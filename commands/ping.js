exports.run = async (client, message) => {
    if(message.channel.type === 'dm')
    return message.reply("Esquece Meu Programador me Configurou Bem")
    if(message.author.bot)
    return    

    const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('📡 Seu ping é: ' + clientms + 'ms / 🖥 Ping do bot com Server:' + Math.floor(client.ping) + 'ms');
}