exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
};

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
};// require the discord.js module
const Discord = require('discord.js');
const { prefix, token} = require('./config.json');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', message => {
   if (message.content.startswith(prefix) || message.author.bot) return ;
       message.channel.send('Hello user')
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase(); 
   else if (message.content.startswith('${prefix}sun')) {
       message.channel.send('moon.');
   }
   else if (message.contebt === '${prefix}server') {
       message.channel.send('this server name is: ${message.guild.name}');
   }
});
// login to Discord with your app's token
client.login('ODA3MzM1MTYxNDAxMzExMjcy.YB2fdg.Ji-uTq9rODw7UOIe0F50U3us0q8');
