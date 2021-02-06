exports.run = async (client, message, args, level) => {
    client.on('message', message => {
    if (message.content === '!Hello') {
        message.author.send('Hello!');
        }
    }
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