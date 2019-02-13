const Discord = require('discord.js');
const client = new Discord.Client();
const config= require('./config.json');
const botToken = config.token;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'guilds') {
    msg.reply('before');
    msg.reply(client.guilds);
    msg.reply('after');
  }
});
let prefix = '!'; /* Sets the prefix */
const bot = new Discord.Client({
    disableEveryone: true
}); /* imo it's better to use bot than client, you may end up using client for something and it makes it less confusing with little-to-no-effort */
bot.on("message", async message => {
  if(!message.guild || message.content.indexOf(prefix) > 0) return; 
    let msgArray = message.content.split(" ");
    let cmd = msgArray[0].slice(prefix.length);
    let args = msgArray.slice(1);
    if (cmd === 'ping') {
        message.channel.send('pong!')
    } else if (cmd == 'foo') {
        message.channel.send('bar!')
    }
});













client.login(config.token);
