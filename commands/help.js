exports.run = async (client, message) => {
    if (!message.guild.me.hasPermission("ADMINISTRATOR")) 
        return message.reply("⚠️ Comando apenas para admins!"); 
    if(message.channel.type === 'dm')
        return message.reply("Esquece Meu Programador me Configurou Bem")
    if(message.author.bot)
        return        
    const Discord = require("discord.js");
  
    const embed = new Discord.MessageEmbed()
    .setColor('#ff0000') // cor da barra
      .setTitle('Comandos Do Bot - Raperger') // Titulo
      .setURL('') // Link do titulo
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription('Descrição') // Descrição da mensagem
      .setThumbnail('https://i.imgur.com/wSTFkRM.png') // Miniatura a direita (thumb)
      .addField('.delete <Numero>', 'Digite esse comando e apague x mensagens daquele canal') // Titulo e texto simples
      .addField('.kick <@nome>', 'Digite esse Comando para remover uma x pessoa do servidor') //Titulo e texto em coluna
      .addField('.ping', 'Digite Esse comando para saber seu Ping') //Titulo e texto em coluna
      .addField('.racroow', 'Para Divulgar a Live do Racroow automaticamente')
      .addField('.aakimn', 'Para Divulgar a Live do Aakimn automaticamente') //Titulo e texto em coluna

      .setTimestamp() // Hora
      .setFooter('ID do usuário '+ client.user.id, client.user.displayAvatarURL()) //Texto do rodapé e imagem
  
  message.reply({embed});
  }