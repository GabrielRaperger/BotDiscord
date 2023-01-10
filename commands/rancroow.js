exports.run = async (client, message) => {
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) 
        return message.reply("⚠️ Comando apenas para admins!"); 
    if(message.channel.type === 'dm')
        return message.reply("Esquece Meu Programador me Configurou Bem")
    if(message.author.bot)
        return    
        const Discord = require("discord.js");
        const paulin = "Rancroow"
        const img = "https://cdn.discordapp.com/attachments/867826967226482729/868217749292339260/Logo.png"

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${paulin}`, `${img}`)
    .setTitle(` Rancroow Live Iniciada `)   
    .setColor('#e61919') 
    .setDescription('Vamos que Vamos, Mais um Dia Começando') 
    .setImage(`${img}`)
    .addField(`Live Iniciada Rapaziada`,`Cola ai Na Live para trocar uma ideia e dar uma força \n https://www.twitch.tv/rancroow`)
    .setFooter(`Leu Tudo isso?, Ta perdendo live já`)
    .setTimestamp(new Date())
           
    client.channels.cache.get('856589493633024051').send({embed}); //canal de boas vindas
        
  }