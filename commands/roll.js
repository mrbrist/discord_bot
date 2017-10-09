const Discord = require('discord.js');
exports.run = (client, message, args) => {
var Inputs = args.slice(0)
var Sides = Inputs[0]
var NumberOfDie = Inputs[1]
let TempArray = []
var Result = 0
if(!NumberOfDie){ 
NumberOfDie = 1
var MessageText = "The result is: "
}else{
var MessageText = "The Results are: "
}
  message.channel.send('Rolling...')
  .then(msg => {
      for(var i = 0; i < NumberOfDie; i++){
        Result = (Math.floor(Math.random()*parseInt(Sides)) + 1)
        TempArray.push(" " + Result)
      }
      msg.edit(MessageText + TempArray.toString());
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Rolls a (Sided) sided die (Amount) many times',
  usage: 'roll (Sides) (Amount of die)'
};
