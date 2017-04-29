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
  name: 'play',
  description: 'Play a video from youtube',
  usage: 'play [youtube url]'
};
