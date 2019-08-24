const Discord = require('discord.js');
const client = new Discord.Client();
const config= require('./config.json');
const botToken = config.token;
const prefix = '!';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
 
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
 
  if(command === 'ping') {
    message.channel.send('Pong!');
  } else
  if (command === 'blah') {
    message.channel.send('Meh.');
  }
  if(command === "kick") {
    let member = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    if(member === null) {
      message.member.reply('Lacking a member to ban, please mention a member'); 
    } else if (reason === null) {
      message.member.reply('Lacking a reason, please add a reason');
    } else if (member === message.author) {
      message.member.reply('Cannot kick yourself'); 
    } else {
      member.kick(reason);
    }
  };
});
client.login(botToken);

