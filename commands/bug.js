const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let desc = args.slice(0).join(' ');
  let bugs = message.guild.channels.find('name', 'bugs');

  if (!bugs) return message.reply('I could not find the bugs channel');
  if (desc.length < 1) return message.reply('You have not given a Description');

  message.channel.send('Bug has been logged.');
  let UserColor = message.author.displayHexColor;
  const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Bug', message.author.avatarURL)
    .setColor(UserColor)
    .setTimestamp()
    .addField('Bug Description', `${desc}`);
    return client.channels.get(bugs.id).sendEmbed(embed);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Reports a bot dev / REQUIRES "bugs" CHANNEL',
  usage: 'bug [bug description]'
};
