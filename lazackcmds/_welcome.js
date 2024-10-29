import {WAMessageStubType} from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, {conn, participants, groupMetadata}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://files.catbox.moe/gxvhsx.jpg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `┌─★ *${botname}* \n│「 WELCOME 🫣 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  Welcome to\n   │✑  ${groupMetadata.subject}\n   └───────────────┈ ⳹`
    
await conn.sendAi(m.chat, botname, textbot, bienvenida, img, img, canal, estilo)
  }
  
  if (chat.welcome && m.messageStubType == 28) {
    let bye = `┌─★ *${botname}* \n│「 GOODBYE 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  He/She went away\n   │✑ We never wanted you here\n   └───────────────┈ ⳹`
await conn.sendAi(m.chat, botname, textbot, bye, img, img, canal, estilo)
  }
  
  if (chat.welcome && m.messageStubType == 32) {
    let kick = `┌─★ *${botname}* \n│「 GOODBYE 👋 」\n└┬★ 「 @${m.messageStubParameters[0].split`@`[0]} 」\n   │✑  He/She went away\n   │✑ We never wanted you here\n   └───────────────┈ ⳹`
await conn.sendAi(m.chat, botname, textbot, kick, img, img, canal, estilo)
}}
