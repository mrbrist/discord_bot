const settings = require('../settings.json');
module.exports = message => {

  let logChannel = message.guild.channels.find('name', 'logchannel');

  if (message.author.bot) return;
  if (message.channel.id == 361888311196909578);


  //TODO: Fix This
  if (message.attachments.array.length !== 0) {
    logChannel.send(`(${message.createdTimestamp}) (TTS:${message.tts}) ${message.author.tag}@${message.channel.name}: ${message.content}`)
  } else {
    console.log(JSON.stringify(message.attachments.array))
    logChannel.send(`(${message.createdTimestamp}) (TTS:${message.tts}) ${message.author.tag}@${message.channel.name}: ${JSON.stringify(message.attachments.array)} ${message.content}`)
  }

  let client = message.client;
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
