let handler = async m =>
  m.reply(
    `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣷⣜⢿⣧⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠻⣿⣿⣿⣿⣦⠄⠄
乂───『 *INFO*』───乂 
│ *@Mickey*
│ ╭────《🇹🇿《MICKEY-V2》🇹🇿》────
┴  ╭─────────────
│❒⁠⁠⁠⁠│ *ADMIN* : ${s.OWNER_NAME}
│❒│⁠⁠⁠⁠ *CALENDAR* : ${date}
│❒│⁠⁠⁠⁠ *PREFIX* : ${s.PREFIXE}
│❒⁠⁠⁠⁠│⁠⁠⁠ *BOT IS IN* : ${mode} mode
│❒│⁠⁠⁠⁠ *ORDERS* : ${cm.length} 
│❒│⁠⁠⁠⁠ *SPACE* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒│⁠⁠⁠⁠ *CHROME* : ${os.platform()}
│❒│⁠⁠⁠⁠ *THEME* : *BRONZE*
┬  ╰──────────────
╰─── ··《🇹🇿《MICKEY-V2》🇹🇿》··─
╰───────⳹
╭───────
│  BotMenu
│  OwnerMenu
│  GroupMenu
│  FunMenu
│  ReactionMenu
│  DownloaderMenu
│  GameMenu
│  LogoMenu
│  StickerMenu
│  AudioMenu
│  NewsMenu
│  EconomyMenu
│  AnimeMenu
│  NSFWMenu
│  ToolsMenu
│  AIMenu
│  ReligionMenu
│  PluginMenu
╰───────

*MY WEBSITE*
*https://silver-carly-54.tiiny.site*
*https://rosy-cheetah-m2mt9z.mystrikingly.com/*
*https://mickdadyhamza.websites.co.in/update/welcome-to-mickdady-hamza/2755144*

>  CODDING IS EVERYONE


`.trim()
  )
handler.help = ['ruth']
handler.tags = ['main']
handler.command = ['card']

export default handler
