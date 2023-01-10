module.exports = (client, guild) => {
    client.on("guildCreate", function (guild) {
        console.log(`[GUILD JOIN] ${guild.name} (${guild.id}) adicinou o bot. Owner: ${guild.owner.user.tag} (${guild.owner.user.id})`);
    });
}
