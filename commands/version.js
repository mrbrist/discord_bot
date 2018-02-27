const version = require('../package.json').version;
const settings = require('../settings.json');
exports.run = (client, message) => {
  console.log(message.author.id);

  if (message.member.roles.find("name", settings.devrank)){
    message.channel.sendMessage('Loading Version...')
      .then(msg => {
        msg.edit(`\`v${version}\``);
      });
    return;
  }
  message.reply('You\'re not a bot developer you don\'t need this...');
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
