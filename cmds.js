const LENNY = '( ͡° ͜ʖ ͡°)'
const KAPPA = '[![Kappa](http://j.mp/2c1xht5)](http://youtu.be/dQw4w9WgXcQ)'

let c = {}

//////////////////////////////////////////////////////////////////////////

c.halp = c.help = c['?'] = function halp(say) {
  say(`**No**. No halp for you. :shipit:`)
}

c.unknown = say => say(':point_up: $$Say$$ $$$$ $$whaaaat?$$ Unknown command get :worried:')

c.hello = c.hi = c.hey = c.hoi = say => say('hoi!! i\'m $$nanabot$$!')

c.lenny = say => say(LENNY)
c.kappa = say => say(KAPPA)

c.top = say => say(`# $$\\huge \\text{kek}$$`)
c[':top:'] = say => say(`[![:cake:](https://cdn01.gitter.im/_s/c7c9191/images/emoji/cake.png)](http://youtu.be/dQw4w9WgXcQ)`)

c.hell = say => say(`[![nanalan dying in a fire](http://i2.kym-cdn.com/photos/images/newsfeed/001/078/862/ea0.png)](http://youtu.be/dQw4w9WgXcQ)`)

c.icey = say => say(`![iceycoder face](https://trello-avatars.s3.amazonaws.com/d8ab18cb1583b4a4138877ff413f08d8/original.png)\nicey face reveal 2k16!!`)
c['lul'] = c['lel'] = say => say('*lol')

c['('] = say => say(')')
c['{'] = say => say('}')
c['['] = say => say(']')
c['<'] = say => say('>')

c.cancer = say => say(`# $$\\huge \\text{it spreads...}$$`)
c.ayy = say => say(`# $$\\huge \\text{lmao}$$`)

//c.say = (say, ...what) => say(what.join(' '))
//c.shout = c.saybig = (say, ...what) => say(`# $$\\huge \\text{${what.join(' ')}}$$`)
c.pls = say => say('nope! :wink:')

//c.tell = (say, who, to, ...what) => say(`Hey, @${who}! ${what.join(' ').replace(/(him|her|it)/g, 'you').replace(/(his|hers|it's)/g, 'your').replace(/(yourelf|itself)/g, 'yourself').replace(/(he|she|it)/g, 'you')}`)

c.stop = say => say('no')
c.kys = say => say(':musical_note: :musical_note: :musical_note:\nhttp://youtu.be/M_azCIe_0Kk')

//////////////////////////////////////////////////////////////////////////

module.exports = c
