const request = require('request');
exports.run = (client, message, args) => {

 message.channel.send('Generating Voting Link...')
   .then(msg => {
    let Desc = args.toString().split('?')
    let Title = Desc[0].toString().replace(/,/g,' ')
    let Options = Desc[1].replace(/^,|,$/g,'')

      var poll = { 
        title: Title, 
        //options: Options
        options: [1,2,3] //Options doesnt seem to work here idk why? 
        //could be an issue with the replace on line 8
      };

      request.post({
        url: 'https://strawpoll.me/api/v2/polls',
        followAllRedirects: true,
        body: poll,
        json: true
      },
          function (error, response, body) {
              if (!error && response.statusCode == 200) {
                msg.edit('Here is your link: http://www.strawpoll.me/' + body.id)
              }
          }
      );
   });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'vote',
  description: 'Generate a strawpoll link.',
  usage: 'vote (description)? (option) (option) ...'
};
