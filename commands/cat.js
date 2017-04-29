var parseString = require('xml2js').parseString;
const fetch = require('node-fetch');
exports.run = (client, message) => {
  message.channel.sendMessage('You want a cat pic?')
    .then(msg => {
      fetch('http://thecatapi.com/api/images/get?format=xml&results_per_page=1').then(function(res) {
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
  aliases: ['pussy'],
  permLevel: 0
};

exports.help = {
  name: 'cat',
  description: 'Cat Pics',
  usage: 'cat'
};
