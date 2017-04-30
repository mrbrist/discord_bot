const settings = require('../settings.json');
exports.run = (client, msg) => {
  if (client.queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${settings.prefix}add`);
  let tosend = [];
  client.queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
  msg.channel.sendMessage(`:notepad_spiral: __**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? "*[Only next 15 shown]*" : "")}\n\`\`\`${tosend.slice(0,15).join("\n")}\`\`\``);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'queue',
  description: 'Displays the queue for this server',
  usage: 'queue'
};
