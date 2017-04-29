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
  name: 'skip',
  description: 'Skips the current song',
  usage: 'skip'
};
