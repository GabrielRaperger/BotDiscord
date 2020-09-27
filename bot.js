const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 
const db = require('quick.db')


client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  let atividade = [
    `Utilize ${config.prefix}help Para Obter Ajuda`,
    `Eu Sou o Impostor`,
    `${client.guilds.cache.size} Servidores`,
    `Vou Sabotar A Luz`
  ],
  i = 0;
  setInterval(() => client.user.setActivity(`${atividade[i++ % atividade.length]}`,{type: "WATCHING"}), 1000 *60 *15);  //10000 = 10Ms = 10 segundos
});

client.on("guildCreate", guild =>{
console.log(`O Bot Acabou de entrar no Servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} Membros.`);
//client.user.setActivity(`Estou em ${client.guilds.cache.size} Servidores.`);
db.set(guild.id, [guild.name]).write()
});
//Quando O Bot Entrar De Algum Servidor


client.on("guildDelete", guild =>{
console.log(`o Bot foi removido do servidor ${guild.name} (id: ${guild.id}).`);
//client.user.setActivity(`Porem Ainda Estou Em ${client.guilds.cache.size} Servers.`);
});
//Quando O Bot Sair De Algum Servidor

client.on("guildMemberAdd", async (member) => {
        
        let guild = client.guilds.cache.get("758699386988396574")//ID DO SERVIDOR
        let channel =  db.get(guild).find({Boas_Vindas: db}).value();//ID DO CANAL
        let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'tenor1');//EMOJI
        if (guild != member.guild ) {
        return console.log("Bem-vindo!");
        } else {
        let embed = new Discord.MessageEmbed()
        .setColor("#c81e31")
        .setAuthor(member.user.tag, member.user.displayAvatarURL())
        .setTitle(`${emoji} Boas-vindas ${emoji}`)//TITULO DA MENSAGEM DE BOAS VINDAS
        .setImage("https://media1.tenor.com/images/e215c8c77c1552f11c167efd5a1ae3d3/tenor.gif?itemid=18555996")//IMAGEM DE BOAS VINDAS
        .setDescription(`**${member.user}**, bem-vindo(a) ao servidor **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, divirta-se conosco! ❤️`)
        .addField(`Canais`,`Fale no chat Global <#758699386988396578>`)
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))//Destaca a imagem da pessoa
        .setFooter('Cuidado Há Impostores Entre Nós')//mensagem embaixo
        .setTimestamp();
        console.log(channel)
        console.log("foiiii");
        await channel.send(embed);
        }
});
//Quando Alguem entrar no servidor

client.on("guildMemberRemove", async (member) => {
    let guild = client.guilds.cache.get("758699386988396574")//ID DO SERVIDOR
    let channel = db.get(guild.id).find({Adeus: info}).value();//ID DO CANAL
    let emoji = member.guild.emojis.cache.find(emoji => emoji.name === 'tenor1');//EMOJI
    if (guild != member.guild) {
    return console.log("Adeus Impostor!");
    } else {
    let embed = new Discord.MessageEmbed()
    .setColor("#c81e31")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .setTitle(`${emoji} Ele Não Era O Impostor ${emoji}`)//TITULO DA MENSAGEM DE BOAS VINDAS
    .setImage("https://media1.tenor.com/images/83508ea327a60489096bd58e09116a83/tenor.gif?itemid=18540350")//IMAGEM DE BOAS VINDAS
    .setDescription(`**${member.user}**, Foi Jogado Para Fora Do **${guild.name}**! Atualmente estamos com **${member.guild.memberCount} membros**, Fiquem De Olhos Abertos A 1 Impostor Entre Nós`)
    .addField(`Esperamos Que Ele Faça As Tasks`,`Assim Podemos Vingar Sua Morte`)
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))//Destaca a imagem da pessoa
    .setFooter('Cuidado Ainda há Impostores Entre Nós')//mensagem embaixo
    .setTimestamp();
    console.log(channel)
    console.log("foiiii");
    await channel.send(embed);
    }
});
//Quando Alguem Sair no servidor


client.on('raw', async dados =>{
  //Verifica se há Status no servidor indicado
  if(dados.t == 'PRESENCE_UPDATE' && client.guilds.cache.get("758699386988396574").members.cache.get(dados.d.user.id)){
    //verifica as pessoas naquele servidor
    let member = client.guilds.cache.get("758699386988396574").members.cache.get(dados.d.user.id)
    
    if(dados.d.game == null) return member.roles.remove('758987280739336192')
    if(dados.d.game.state == undefined) return member.roles.remove('758987280739336192')
    
    let valor = dados.d.game.state
    //Verifica se há algo assim no status da pessoa
    let n = valor.search(/((?:discord\.gg|discordapp\.com|www\.|http|invite))/g)
    //se a pessoa estiver com algo proibido será adicionado o seguinte cargo
    if(n >= 0) member.roles.add('758987280739336192')
    //se a pessoa remover do status o item proibido sera removido o cargo
    if(n < 0 && member.roles.cache.has("758987280739336192")) member.roles.remove('758987280739336192')
  }
})
//Tirar Convite Do Status Personalizado
client.on(`message`, async message => {

    global.Boas_Vindas = '';
    global.Adeus = '';
    

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  if(comando === "help") {
    
    const m = await message.channel.send("Loading");
    m.edit(`  **Lista de comandos** 
    _**!Ping**_ - Para Verificar Seu Ping
    _**!Limpar**_ - Limpe o Chat (Claro Se Você Tiver Permissão)`);
  }

 if(comando === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
  if(comando === "limpar"){
    db.get(message.guild.id);
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.reply("Infelizmente Você Não Tem Permissão Para Isso")
    const deletecount = parseInt(args[0], 10);
    if(!deletecount ||deletecount < 1 || deletecount >= 100)
      return message.reply("Forneça O Número De Mensagens Que Deseja Apagar")
      
      const fetched = await message.channel.messages.fetch({limit: deletecount + 1});
      message.channel
      .bulkDelete(fetched)
      const m= await message.channel.send(`${args[0]} Mensagens Limpas Nesse Chat`)
      .catch(error => console.log(`Não Foi Possivel Deletar Mensagens Devido A: ${error}`))
  }
  if(comando === "redcanais"){
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
      message.reply("**você não tem permissão.**")
    }else{
      database.ref(`Servidores/Canais/${message.guild.id}`)
        .once ('value').then(async function(snap){         
            var canal
            let canal2
            message.channel.send('**Qual o ID Do canal você deseja definir os boas vindas?**').then(msg1 => {
              let c1 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
              .on('collect', c1 => {
              canal =  c3.mentions.channels.first()
              
              while(canal == null)
                console.log(canal)
                      message.channel.send('**Qual O ID Do canal você deseja definir os Adeus?**').then(msg2 => {
                        let c2 = message.channel.createMessageCollector(x => x.author.id == message.author.id, { time: 60000 * 20,max:1})
                        .on('collect', c3 => {
                          canal2 = c3.mentions.channels.first()
                          console.log(canal, canal2)
                          database.ref(`Servidores/Canais/${message.guild.id}`)
                          .set({
                            Boas_Vindas: canal,
                            Adeus: canal2
                          })
                          message.channel.send("Dados Atualizados")
                        })
                      })
                          
              //})
            })
        })

      }
  }
});
//COMANDO BOT

client.login(config.token);