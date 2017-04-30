exports.run = (client, msg) => {
  var x = client.uptime;
  var Time = moment.duration(x);
  msg.channel.sendMessage(`\`${Time.hours() + Time.minutes() + Time.seconds()}\``)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'uptime',
  description: 'Displays how long the bot has been online',
  usage: 'uptime'
};
