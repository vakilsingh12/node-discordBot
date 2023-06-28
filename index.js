const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
client.on("messageCreate", (message) => {
  console.log(message.content);
  if (message.author.bot) return null;
  if(message.content.startsWith('create')){
    const url=message.content.split("create")[1];
    return message.reply({
      content:'Generating short id for' +url
    })
  }
  message.reply({
    content: "Hi from bot",
  });
});
client.on("interactionCreate", (interaction) => {
  // console.log(interaction);
  interaction.reply("Pong!!!");
});
client.login(
  "MTEyMjk1NzUyMDI5NDY2MjE4NQ.GGSnRi.CqWDremJgp_i8zL_dCRF4bkTkOFuutHQv2hyDg"
);
