const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

const prefix = '!';

var Standings;
var xy;

client.once('ready', () => {
    console.log('Ready');
});


client.on('ready', message => {
	let url = 'https://sheets.googleapis.com/v4/spreadsheets/1Wqlovr44XVOGj8dimevZnUbgRk7OX8rfFDSexGARqwo/values/\'General%20Stats\'!B5:D16?key='+process.env.GGL_TOKEN
	fetch(url)
	.then(res => res.json())
	.then((out) => {
		xy = out.values;
	});
});


client.on('message', async message => {
	console.log(message.content);
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.content === prefix+`test2`) console.log(xy);
	else if (message.content === prefix+`test3`) message.channel.send(xyz);
	else if (message.content === prefix+`test4`) message.channel.send(
		'``` #  Name				Points'+"\n"+
		+' '+xy[0][0]+'  '+xy[0][1]+'			'+xy[0][2]+'```'
	);
});


client.login(process.env.BOT_TOKEN);