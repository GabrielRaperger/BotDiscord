module.exports = (client, guild) => {
    client.on("guildDelete", function (guild) {
        console.log(`[GUILD LEAVE] ${guild.name} (${guild.id}) Removeu o bot.`);
    });

};