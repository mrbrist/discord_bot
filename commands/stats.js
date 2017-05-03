const settings = require('../settings.json');
exports.run = (client, message) => {
  if (msg.author.id !== settings.ownerid) return msg.reply('You are not Brist... Fuck off!');
  message.channel.sendMessage('Under Construction');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'stats',
  description: 'Displays stats',
  usage: 'stats'
};
