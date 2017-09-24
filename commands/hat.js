const Discord = require('discord.js');
exports.run = (client, message, args) => {

var max = message.mentions.users.size;
var UserNum = Math.random() * (max - 2) + 2;
let User = args.slice(UserNum).join(' ');

  message.channel.sendMessage('Picking a name...')
  .then(msg => {
      message.channel.sendMessage('I choose: ' + User);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hat',
  description: 'Picks a name from a selection of names.',
  usage: 'hat'
};
