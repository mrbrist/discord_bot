const GoogleImages = require('google-images');
const imagesGoogle = new GoogleImages('009565028834274790724:v44gvc8ozku', 'AIzaSyAkyJYTuOIKw42msRRuxarK8n0fPg_dQR4');

exports.run = (client, message) => {
  imagesGoogle.search('Spider')
    .then(images => {
      message.channel.send('You want a nope? Really?')
        .then(msg => {
          msg.edit(images[0].url)
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
