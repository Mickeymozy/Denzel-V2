let handler = async m =>
  m.reply(
    `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣷⣜⢿⣧⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡄⠻⣿⣿⣿⣿⣦⠄⠄
>  To choose Menu type name of menu 
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

>  CODDING IS EVERYONE


`.trim()
  )
handler.help = ['ruth']
handler.tags = ['main']
handler.command = ['menu']

export default handler
