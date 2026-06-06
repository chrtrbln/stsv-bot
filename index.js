const dotenv = require('dotenv')
dotenv.config();

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ],
});

client.once('ready', () => {
  console.log(`Q pedo`);
});

client.login(process.env.TOKEN);