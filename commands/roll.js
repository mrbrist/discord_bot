const Discord = require('discord.js');
exports.run = (client, message, args) => {
var Sides = args.slice(0)
var NumberOfDie = args.slice(2)
let TempArray = []
var Result = 0
console.log(Sides)
console.log(NumberOfDie)

  message.channel.send('Rolling...')
  .then(msg => {

      for(var i = 0; i < NumberOfDie; i++){
        Result = (Math.floor(Math.random()*parseInt(Sides)) + 1)
        TempArray.push(Result)
        console.log(i)
      }
      msg.edit('The Results are: ' + TempArray.toString());

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
