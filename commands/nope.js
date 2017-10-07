const GoogleImages = require('google-images');
const client = new GoogleImages('010006338513942582612:hshddmo5_0w', 'AIzaSyCFbfJ_oDSfcUulPj9Qzavjk6Xb-ZOy-1c');


exports.run = (client, message) => {
  message.channel.sendMessage('You want a nope? Really?')
    .then(msg => {
      client.search('Spider')
      .then(images => {

          /*
          [{
              "url": "http://steveangello.com/boss.jpg",
              "type": "image/jpeg",
              "width": 1024,
              "height": 768,
              "size": 102451,
              "thumbnail": {
                  "url": "http://steveangello.com/thumbnail.jpg",
                  "width": 512,
                  "height": 512
              }
          }]
           */
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
