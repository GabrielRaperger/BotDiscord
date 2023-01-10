module.exports = async client => {
	console.log('Bot logado com ' + client.users.cache.size + ' usuários, em ' + 
    client.channels.cache.size + ' canais de ' + client.guilds.cache.size + ' servidores.');

	let contador = 0;

	setInterval(function(){
		client.user.setPresence({
			status: "online",
			activity: {
				name: "Rancroow tem " + contador + " Anos e o Aakimn tem " + contador,
				type: "PLAYING"
			}
		})
		console.log('Contando ' + contador);
		contador++;

	}, 1 * 60 * 1000)
}