const settings = require('../settings.json');
const Discord = require('discord.js');
module.exports = message => {

  if (message.author.bot) return;
  if (message.content == null) return;
  if (message.channel.id == 361888311196909578);
  let client = message.client;
  let UserRole = message.member.displayHexColor;
  let MessType = message.MessageType;
  if(message.channel.name !== "bot-dev" && message.channel.name !== "bugs"){
    const embed = new Discord.RichEmbed()
    .setTitle('')
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor(UserRole)
    .setTimestamp()
    .addField('Channel:', `${message.channel}`)
    .addField('TTS:', `${message.tts}`)

    let logChannel = message.guild.channels.find('name', 'logchannel');

    if(message.content){
      embed.addField('Message:', `${message.content}`)
      message.client.channels.get(logChannel.id).send(embed);
    }
  }

  if (!message.content.startsWith(settings.prefix)) return;
  let command = message.content.split(' ')[0].slice(settings.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};
