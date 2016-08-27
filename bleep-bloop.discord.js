const Discord = require('discord.js')
const profanity = require('profanity-censor')

require('dotenv').config()
const TOKEN = process.env.DISCORD_TOKEN

//////////////////////////////////////////////////////////////////////////

const bot = new Discord.Client()

bot.on('ready', () => console.log('Ready!!'))

bot.on('message', msg => {
  if(msg.cleanContent.substr(0, 13).toLowerCase() !== '@nanabot#8711') return

  let args = msg.cleanContent.substr(14).split(' ').map(a => a.trim())
  let cmd = args.splice(0, 1)[0].toLowerCase()

  console.log(`${cmd}(${args.map(a => JSON.stringify(a)).join(', ')})`)

  switch(cmd) {
    case 'ping':
      msg.channel.sendMessage('pong')
    break

    case 'google':
      const google = require('google')
      const what = args.join(' ') || 'nothing'

      google(what, (err, res) => {
        if(err || !res) {
          if(err) console.error(err)
          else {
            msg.channel.sendMessage(profanity.filter(`**Failed to Google **${what}**. Sorry! :worried:`))
          }
        } else {
          msg.channel.sendMessage(profanity.filter(`Results for **${what}**:`))

          res.links.filter(link => link.title !== `Images for ${what}`).splice(0, 2).forEach(link => {
            msg.channel.sendMessage(profanity.filter(`**${link.title}**: ${link.description} - ${link.href}\n\n`))
          })

          msg.channel.sendMessage(``)
        }
      })
    break

    default:
      msg.channel.sendMessage(`:point_up: I don't know how to **${cmd}**, sorry! :worried:`)
    break
  }
})

bot.loginWithToken(TOKEN)
  .then(() => console.log('Logged in to Discord!'))
  .catch(console.log)
