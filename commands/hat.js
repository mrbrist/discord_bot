const Discord = require('discord.js');
exports.run = (client, message, args) => {

var user = message.mentions.users.random();

  message.channel.send('Picking a name...')
  .then(msg => {
      message.channel.send('I choose: ' + user);
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
