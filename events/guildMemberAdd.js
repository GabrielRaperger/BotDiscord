module.exports = async (client, member) =>{
    const Discord = require("discord.js")

    let emoji = member.guild.emojis.cache.find(emoji => emoji.name == 'work')
    let emoji2 = member.guild.emojis.cache.find(emoji => emoji.name == 'sirene')
    let emoji3 = member.guild.emojis.cache.find(emoji => emoji.name == 'exclamacao')
    let emoji4 = member.guild.emojis.cache.find(emoji => emoji.name == 'hehe')

    const embed = new Discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.displayAvatarURL())
    .setTitle(`${emoji} Boas-vindas ao servidor ${member.guild.name} ${emoji}`)

    .setColor('#e61919')  
    .addField(`${emoji2}  Atenção!  ${emoji2}`,`Leia as nossas <#849364409116917810> e <#856589907673743370> para evitar ser punido no servidor!`, true)
    .addField(`${emoji3} Precisando de ajuda? ${emoji3}`, `Caso você tenha alguma dúvida ou problema, consulte a <#849373854275076200>`, true)
    .addField(`${emoji4} Você Sabia! ${emoji4}`, ` O **Rancroow** não é careca, ele apenas não tem cabelo`, true)
    .addField("Informação",`${member.user} Bem-vindo, Atualmente estamos com **${member.guild.memberCount} membros!**, Divirta-se Conosco \n`)//canal das regras
    .setThumbnail(member.user.displayAvatarURL({ dynamic:true, format: "png", size:1024}))
    .setFooter('ID do usuário '+ member.user.id)
    .setTimestamp(new Date())
   
    member.guild.channels.cache.get('868078127648239646').send({embed}); //canal de boas vindas
}