const Gitter = require('node-gitter')
const cmds = require('./cmds.js')

require('dotenv').config()
const TOKEN = process.env.GITTER_TOKEN
const ROOM = process.env.GITTER_ROOM

//////////////////////////////////////////////////////////////////////////

const gitter = new Gitter(TOKEN)

gitter.currentUser().then(u => console.log('Logged in as @' + u.username))
gitter.rooms.find(ROOM).then(room => {
  console.log('Watching', room.name)

  room.streaming().chatMessages().on('chatMessages', msg => {
    let txt = (msg.model.text || '')

    if(msg.operation !== 'create') return
    if(txt.substr(0, 8).toLowerCase() !== '@nanabot') return

    let args = txt.substr(9).split(' ').map(a => require('remove-markdown')(a).replace(/\$\$/g, ''))
    let cmd = args.splice(0, 1)[0].toLowerCase()

    console.log(cmd + '(' + args.map(a => JSON.stringify(a)).join(', ') + ')');

    (cmds[cmd] || cmds.unknown)(msg => room.send(msg + `\n$$$$\n$$$$ $$$$ $$$$ I'm a bot, _bleep, bloop_.`), ...args)
  })
})
