const settings = require('../settings.json');
exports.run = (client, msg) => {
  let tosend = [settings.prefix + "join : \"Join Voice channel of msg sender\"",	settings.prefix + "add : \"Add a valid youtube link to the queue\"", settings.prefix + "queue : \"Shows the current queue, up to 15 songs shown.\"", settings.prefix + "play : \"Play the music queue if already joined to a voice channel\"", "", "the following commands only function while the play command is running:".toUpperCase(), settings.prefix + "pause : \"pauses the music\"",	settings.prefix + "resume : \"resumes the music\"", settings.prefix + "skip : \"skips the playing song\"", settings.prefix + "time : \"Shows the playtime of the song.\""];
  msg.channel.sendCode("xl",tosend);
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'musichelp',
  description: 'Displays the commands for the music portion of DickBott',
  usage: 'musichelp'
};
