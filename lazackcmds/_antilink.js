const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  // Ignore messages from the bot itself
  if (m.isBaileys && m.fromMe) return true;

  // Ensure the message is from a group
  if (!m.isGroup) return false;

  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[conn.user.jid] || {}; // Use conn.user.jid instead of this.user.jid
  const isGroupLink = linkRegex.exec(m.text);

  // Check if anti-link is enabled and the message contains a group link
  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await conn.groupInviteCode(m.chat).catch(err => {
        console.error('Failed to get group invite code:', err);
        return ''; // Return an empty string if there's an error
      })}`;
      
      // Allow the link if it is the current group link
      if (m.text.includes(linkThisGroup)) return true;
    }

    // Notify the user about the link detection
    await conn.reply(
      m.chat,
      `*≡ Link Detected*\n\nWe do not allow links from other groups.\nI'm sorry *@${m.sender.split('@')[0]}*, you will be kicked out of the group. ${isBotAdmin ? '' : '\n\nI am not an admin, so I can’t expel you :("v'}`,
      null,
      { mentions: [m.sender] }
    );

    // Remove the user if the bot is an admin
    if (isBotAdmin && chat.antiLink) {
      await conn.sendMessage(m.chat, { delete: m.key });
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    } else if (!chat.antiLink) {
      return; // If anti-link is disabled, do nothing
    }
  }
  
  return true; // Allow the message to proceed
}
