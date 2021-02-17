exports.run = async (client, message, args, level) => { 
  function getRandomIntInclusive(min, max) {
    if (args[0] == "d4") { var value = getRandomIntInclusive() }
    min = Math.ceil(1);
    max = Math.floor(4);
    message.channel.send(
     Math.floor(Math.random() * (max - min + 1) + min)); //The maximum is inclusive and the minimum is inclusive
    }
  }


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