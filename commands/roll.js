exports.run = async (client, message, args, level) => { 
  if (args[0] == "d4") { var value = getRandomIntInclusive }
  function getRandomIntInclusive(min, max) {
    
    min = Math.ceil(0);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  
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