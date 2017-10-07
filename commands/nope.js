const GoogleImages = require('google-images');
const imagesGoogle = new GoogleImages('009565028834274790724:v44gvc8ozku', 'AIzaSyAkyJYTuOIKw42msRRuxarK8n0fPg_dQR4');

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

exports.run = (client, message) => {
  imagesGoogle.search('Spider', {page: "4"})
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
