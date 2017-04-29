exports.run = (client, message) => {
  const voiceChannel = message.member.voiceChannel ? message.member.voiceChannel : (message.guild.voiceConnection ? message.guild.voiceConnection.channel : null);
  if (!voiceChannel || (!message.member.voiceChannel && message.author.permLevel < 2)) {
    return message.reply('Please join a voice channel to use this command');
  }
  if (!client.playlists.get(message.guild.id).dispatcher.paused) return message.reply('Playback has not been paused');
  message.channel.sendMessage('Resuming playback');
  client.playlists.get(message.guild.id).dispatcher.resume();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'resume',
  description: 'Resumes the current song and queue',
  usage: 'resume'
};
