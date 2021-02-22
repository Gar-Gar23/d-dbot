exports.run = async (client, message, args, level) => { 

  switch(arg[0]) {
  case "blinded" : message.channel.send(" Creature can not see, auto fails abilities that rely on sight  "  
  + " " + "attacks agianst blinded are at advatange, attacks from blinded are at disadvantage")
    break;
  case "charmed" : message.channel.send( "a charmed creature ")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "cond",
  category: "Miscelaneous",
  description: "A template",
  usage: "command arg1 arg2 [...]" 
};
