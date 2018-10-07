const Discord = require('discord.js');

var bot = new Discord.Client();

var prefix = ("v!");

bot.on('ready',() => {
	console.log("Bot Ready !");
});

bot.login(process.env.BOT_TOKEN);


bot.on('message', message => {
	if (message.content === "Spotted"){
		message.reply("Je m'appelle pas spotted mais je repond quand meme !");
		console.log("ping pong")
	}
	
	if (message.content === prefix + "help"){
		message.channel.sendMessage("```Bonjour c'est le bot Oya voici le prefix : \n o! \nVoici les commands : \n   o!help ```");
		console.log("ping pong")
	}
		
});

bot.on('message', message => {
	if (message.content === "Salut Vlad"){
		message.reply("Yo ça vas ?");
		console.log("ping pong")
	}

});

bot.on('message', message => {
	if (message.content === "oui Vlad"){
		message.reply("Ok");
		console.log("ping pong")
	}

});

bot.on('message', message => {
	if (message.content === "Comment faire un bot ?"){
		message.reply("*```Voici le lien pour cree un bot :\nhttps://discordapp.com/developers/applications```*");
		console.log("ping pong")
	}

});

bot.on('message', message => {
	if (message.content === "ça va Vlad ?"){
		message.reply("oui et toi ?");
		console.log("ping pong")
	}

});

bot.on('message', message => {
	if (message.content === "Twit Oya"){
		message.reply("oui et toi ?");
		console.log("ping pong")
	}

});
