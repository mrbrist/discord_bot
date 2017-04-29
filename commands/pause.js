exports.run = (client, message) => {
  const voiceChannel = message.member.voiceChannel ? message.member.voiceChannel : (message.guild.voiceConnection ? message.guild.voiceConnection.channel : null);
  if (!voiceChannel || (!message.member.voiceChannel && message.author.permLevel < 2)) {
    return message.reply('Please join a voice channel to use this command');
  }
  if (client.playlists.get(message.guild.id).dispatcher.paused) return message.reply('Playback is already paused');
  message.channel.sendMessage('Pausing playback');
  client.playlists.get(message.guild.id).dispatcher.pause();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'pause',
  description: 'Pauses playback of the current song',
  usage: 'pause'
};
