const Discord = require('discord.js');
const client = new Discord.Client();
const config= require('./config.json');
const botToken = config.token;
const prefix = '!';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(!message.guild || message.content.indexOf(prefix) > 0) return;
  let msgArray = message.content.split(" ");
  let cmd = msgArray[0].slice(prefix.length);
  let args = msgArray.slice(1);
  if (cmd === 'ping'){
    message.channel.send('pong!');
  } else if(cmd == 'foo'){
    message.channel.send('bar!');
  }
});
client.login(botToken);
 
