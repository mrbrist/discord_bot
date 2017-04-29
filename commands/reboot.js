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
  name: 'reboot',
  description: '...',
  usage: 'reboot'
};
