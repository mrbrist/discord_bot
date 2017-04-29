const version = require('../package.json').version;
exports.run = (client, message) => {
  message.channel.sendMessage('Loading Version...')
    .then(msg => {
      msg.edit(`\`v${version}\``);
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'version',
  description: 'Displays the version of the bot',
  usage: 'version'
};
