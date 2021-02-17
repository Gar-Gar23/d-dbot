 function getRandomIntInclusive(min, max) {
    
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

exports.run = async (client, message, args, level) => { 
 
switch(args[0]) {
  default: message.channel.send("please give me a die to roll.")
  case "d4":  var value = getRandomIntInclusive(1,4) 
    break; 
  case "d6": var value = getRandomIntInclusive(1,6) 
    break;
  case "d8": var value = getRandomIntInclusive(1,8) 
    break;
  case "d8": var value = getRandomIntInclusive(1,8) 
    break;
  case "d10": var value = getRandomIntInclusive(1,10) 
    break;
  case "d12": var value = getRandomIntInclusive(1,12) 
    break;
  case "d20": var value = getRandomIntInclusive(1,20) 
    break;
  case "d100": var value = getRandomIntInclusive(1,100) 
    break;
}
  message.channel.send(value)
};




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "roll",
  category: "Miscelaneous",
  description: "this roller can do d4, d6",
  usage: "command arg1 arg2 [...]" 
};