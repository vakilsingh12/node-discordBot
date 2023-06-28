const { REST, Routes } = require("discord.js");
const commands = [
  {
    name: "create",
    description: "Create a new short URL",
  },
];

const rest = new REST({ version: "10" }).setToken(
  "MTEyMjk1NzUyMDI5NDY2MjE4NQ.GGSnRi.CqWDremJgp_i8zL_dCRF4bkTkOFuutHQv2hyDg"
);

(async ()=>{
    try {
        console.log("Started refreshing application (/) commands.");
      
        await rest.put(Routes.applicationCommands("1122957520294662185"), {
          body: commands,
        });
      
        console.log("Successfully reloaded application (/) commands.");
      } catch (error) {
        console.error(error);
      }
})()
