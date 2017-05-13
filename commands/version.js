const version = require('../package.json').version;
const settings = require('../settings.json');
exports.run = (client, message) => {
  console.log(message.author.id);
  if (message.author.id == settings.ownerid) {
    return;
    message.channel.sendMessage('Loading Version...')
      .then(msg => {
        msg.edit(`\`v${version}\``);
      });
  }
  message.reply('You are not Brist... Fuck off!');
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
