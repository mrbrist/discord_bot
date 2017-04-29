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
  name: 'queue',
  description: 'Displays the queue for this server',
  usage: 'queue'
};
