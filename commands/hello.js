exports.run = async (client, message, args, level) => {
    if (message.content === `${prefix}greetings`) {
        message.channel.send('Hello');
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "command",
  category: "Miscelaneous",
  description: "A template",
  usage: "command arg1 arg2 [...]" 
};