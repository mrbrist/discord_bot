const moment = require('moment');
require("moment-duration-format");
exports.run = (client, msg) => {
  var A = client.uptime;
  var seconds=(A/1000)%60
  var minutes=(A/(1000*60))%60
  var hours=(A/(1000*60*60))%24
  msg.channel.sendMessage(`\`${Math.round(hours)}h ${Math.round(minutes)}m ${Math.round(seconds)}s\``)
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
