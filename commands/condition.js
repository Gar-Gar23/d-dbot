exports.run = async (client, message, args, level) => { 

  switch(args[0]) {
   
  case "blinded" : message.channel.send(" Creature can not see, automatic failure with abilities that rely on sight  "  
  + " " + "attacks agianst blinded are at advatange, attacks from blinded are at disadvantage")
    break;
  case "charmed" : message.channel.send( "a charmed creature ")
    break;
  default : message.channel.send(" what is your condition?")
    break;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "condition",
  category: "Miscelaneous",
  description: "a simple informantion command for displaying various condions; blinded, charmed",
  usage: "command arg1 arg2 [...]" 
};
