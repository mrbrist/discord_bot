const GoogleImages = require('google-images');
const imagesGoogle = new GoogleImages('009565028834274790724:v44gvc8ozku', 'AIzaSyAkyJYTuOIKw42msRRuxarK8n0fPg_dQR4');

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

exports.run = (client, message) => {
  //TEMP DISABLED, TODO: FIX
  message.channel.send('Im sorry, this command is disabled at the moment. :/')
  return;
  PageNum = Math.floor(Math.random()*50)
  Start = Math.floor(Math.random()*10)
  console.log(PageNum)
  console.log(Start)
  imagesGoogle.search('Spider', {page: PageNum, start: Start, colorType: 'color'})
    .then(images => {
      message.channel.send('You want a nope? Really?')
        .then(msg => {
          msg.edit(images[Math.floor(Math.random()*images.length)].url)
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nopenope', 'lolnope', 'fucknope', '4eyefuck'],
  permLevel: 0
};

exports.help = {
  name: 'nope',
  description: 'Spider Pics',
  usage: 'nope'
};
