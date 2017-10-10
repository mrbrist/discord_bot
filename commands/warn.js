const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  let UserMessageCount = 0
  let WarnAmount = 0
  let NewMessages = []

  if (!modlog) return message.reply('I could not find the mod-log channel');
  if (reason.length < 1) return message.reply('You have not given a reason');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them').catch(console.error);

//TODO user search with amount of warns
  modlog.fetchMessages()
  .then((msgs) => {
    const filterBy = user ? user.id : Client.user.id;
    NewMessages = msgs.filter(m => m.author.id === filterBy).array().slice(0, msg.size);
    WarnAmount = NewMessages.size
   });
   console.log(WarnAmount)
   console.log("Stage 4")

  message.channel.send(`Warn successful! Logged to ${modlog}`);
  let UserRole = message.member.displayHexColor;
  const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Warning', user.avatarURL)
    .setColor(UserRole)
    .setTimestamp()
    .addField('User', `${user}`)
    .addField('Warned By', `${message.author}#${message.author.discriminator}`)
    .addField('Reason', `${reason}`);
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
