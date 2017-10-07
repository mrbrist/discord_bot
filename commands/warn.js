const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('I could not find the mod-log channel');
  if (reason.length < 1) return message.reply('You have not given a reason');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them').catch(console.error);

  message.channel.send(`Warn successful! Logged to ${modlog}`);
  let UserRole = message.member.displayHexColor;
  const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Moderation', message.author.avatarURL)
    .setColor(UserRole)
    .setTimestamp()
    .addField('Actions', 'Warning')
    .addField('Reason', `${reason}`)
    .addField('User', `${user.username}#${user.discriminator}`)
    .addField('Moderator', `${message.author.username}#${message.author.discriminator}`);
    return client.channels.get(modlog.id).sendEmbed(embed);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'warn',
  description: 'Warns the mentioned user / REQUIRES "mod-log" CHANNEL',
  usage: 'warn [mention] [reason]'
};
