const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = message.guild.channels.find('name', 'mod-log');
  let UserMessageCount = 0
  if (!modlog) return message.reply('I could not find the mod-log channel');
  if (reason.length < 1) return message.reply('You have not given a reason');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them').catch(console.error);


//   console.log(user.discriminator)
// for(var i = 0; i < 9; i++){
//     const Message = await modlog.fetchMessage(i);
//     console.log(Message.content.includes(user.discriminator))
//   }

//TODO user search with amount of warns
console.log("Stage 1")
  message.channel.fetchMessages()
  .then((messages) => {
    console.log("Stage 2")
    if (user) {
      console.log("Stage 3")
      //messages = messages.filter(user.discriminator)
      //const filterBy = user ? user.id : Client.user.id;
      //messages = messages.filter(m => m.author.id === filterBy).array().slice(0, messages.size);
    let WarnAmount = messages.size
    console.log(WarnAmount)
    console.log("Stage 4")
    }
   });






  message.channel.send(`Warn successful! Logged to ${modlog}`);
  let UserRole = message.member.displayHexColor;
  const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor('Warning', user.avatarURL)
    .setColor(UserRole)
    .setTimestamp()
    .addField('Reason', `${reason}`)
    .addField('Warned By', `${message.author.username}#${message.author.discriminator}`);
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
