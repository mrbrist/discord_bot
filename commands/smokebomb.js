exports.run = (client, message) => {
  message.channel.bulkDelete(10);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'smokebomb',
  description: "Poof and I'm gone",
  usage: 'smokebomb'
};
