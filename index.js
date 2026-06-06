import dotenv from 'dotenv'
dotenv.config();

import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages
    ],
});

client.once('ready', () => {
  console.log(`Bot online as ${client.user.tag}`);
});

client.login(process.env.TOKEN);