var parseString = require('xml2js').parseString;
const fetch = require('node-fetch');
exports.run = (client, message) => {
  message.channel.sendMessage('You want a nope? Really?')
    .then(msg => {
      fetch('https://www.google.co.uk/search?q=spider/get?format=xml&results_per_page=1').then(function(res) {
        return res.text();
      }).then(function(body) {
        var xml = body;
        var url1 = xml.search("<url>");
        var url2 = xml.search("</url>");
        var res = xml.substring(url1 + 5, url2);
        msg.edit(res);
      });
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['nopenope', 'lolnope', 'fucknope', '4eyefuck'],
  permLevel: 0
};

exports.help = {
  name: 'nope',
  description: 'Hairy Nope Pics',
  usage: 'nope'
};
