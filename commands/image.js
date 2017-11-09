const GoogleImages = require('google-images');
const imagesGoogle = new GoogleImages('009565028834274790724:v44gvc8ozku', 'AIzaSyAkyJYTuOIKw42msRRuxarK8n0fPg_dQR4');

exports.run = (client, message, args) => {

//TEMP DISABLED, TODO: FIX
message.channel.send('Im sorry, this command is disabled at the moment. :/')
return;

  PageNum = Math.floor(Math.random()*50)
  Start = Math.floor(Math.random()*10)
  console.log(PageNum)
  console.log(Start)
  imagesGoogle.search(args.slice(0).join(" "), {page: PageNum, start: Start, colorType: 'color'})
    .then(images => {
      message.channel.send('Coming right up!')
        .then(msg => {
          msg.edit(images[Math.floor(Math.random()*images.length)].url)
        });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'image',
  description: 'Search for an image',
  usage: 'image'
};
