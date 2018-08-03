var Discord = require('discord.js')
var client = new Discord.Client()

client.on('ready', () => {
	var moment = require('moment')
		var server = client.guilds.get("395536394883301379")
	setInterval(function(){
		
		let online = server.members.filter(member => member.user.presence.status !== 'offline');
		var hr = new Date().getHours() +2
		if(hr == 25) hr = 1
	client.channels.get("465564963801530389").edit({name: `Członków: ${server.members.size}`})
	client.channels.get("474968736886161408").edit({name: `Online: ${online.size}`})
	client.channels.get("474969149043638283").edit({name: `Botów: ${server.members.filter(m => m.user.bot).size}`})
	client.channels.get("474976409215959061").edit({name: `Ludzi: ${server.memberCount - server.members.filter(m => m.user.bot).size}`})	
	client.channels.get("474969888767737884").edit({name: `Godzina: ${hr}:${moment.utc(new Date()).format('mm:ss')}`})
  	client.channels.get("474970004085800960").edit({name: `Dzisiaj jest: ${moment.utc(new Date()).format('DD.MM.YYYY')}`})
  },1000)
	console.log(`[${client.user.tag}]Zalogowano pomyślnie`)
	})
client.on("message", message => {
	var prefix = `!`
		if (message.author.bot) return;
 	 let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
	var args = message.content.slice(prefix.length).trim().split(/ +/g);;
	var command = args.shift().toLowerCase();
	if(command == 'eval'){
		if(message.author.id !== '367390191721381890') return
		eval(args.join(" "))
	}
	})


client.login(process.env.TOKEN)