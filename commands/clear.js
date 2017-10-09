exports.run = (client, message) => {
  console.log('Event Begin')
  console.log(client.ChannelClear)
  message.channel.send('Are you sure you want to clear the channel?')
    .then(msg => {
      if(client.ChannelClear){
        msg.edit('Clearing....');
        //Recursive channel clear OR clone channel and delete old?
        console.log('Event True')
      }else{
        msg.edit('If you wish to continue please repeat the command. Otherwise please type .cancelclear');
        client.ChannelClear == true
        console.log('Event False')
      }  
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'clear',
  description: 'Clears the current channel',
  usage: 'clear'
};
