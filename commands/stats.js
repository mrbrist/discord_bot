exports.run = (client, message) => {
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
