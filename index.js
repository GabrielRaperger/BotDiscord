const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require("enmap");
const config = require("./config.json");
client.config = config;
const fs = require("fs");

client.on("ready", () => {
    console.log(`Bot Iniciado com ${client.users.cache.size} usuarios, em  ${client.channels.cache.size} Canais, em ${client.guilds.cache.size} Servidores.`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} Servidores`)
})

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

  client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);