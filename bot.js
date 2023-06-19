// Import modules
const dotenv = require('dotenv');
dotenv.config("./.env");
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require('discord.js');
// const time = require('')
const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});
const generalChannel = client.channels.cache.get("837186884375281697");
    
var today = new Date(); 
var time = today. getHours() + ":" + today;


// Run bot
client.on('ready', () => {
    console.log("Connected as " + client.user.tag);
    client.user.setActivity("You", {type:"Listening"});

    client.guilds.cache.forEach((guild)=>{
        console.log(guild.name);
        guild.channels.cache.forEach((channel)=>{
            console.log(` - ${channel.name} ${channel.type} ${channel.id}`)
        });
    });
    let generalChannel = client.channels.cache.get("837186884375281697");
    generalChannel.send("D.js Bot Active now");
});

client.on('messageCreate', (message)=>{
    if (message.author == client.user){
        return;
    }
    message.channel.send("Message received: "+message.author.toString+" "+message.content);
});

client.on('presenceUpdate', (oldPresence, newPresence)=>{
    console.log('presence update');

    generalChannel.send(client.user+" Changed Presence Status");
})

client.login(process.env.TOKEN);