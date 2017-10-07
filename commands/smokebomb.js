exports.run = (client, message, args) => {
  var Amount = args.slice(0);
  message.channel.bulkDelete(parseInt(Amount) + 1);
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
