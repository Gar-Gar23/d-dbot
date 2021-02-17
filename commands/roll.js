exports.run = async (client, message, args, level) => { 
  if (args[0] == "d4") { var value = getRandomIntInclusive(1,4) }
  if (args[1] == "d6") {var value = getRandomIntInclusive(1,6) }
  function getRandomIntInclusive(min, max) {
    
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
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