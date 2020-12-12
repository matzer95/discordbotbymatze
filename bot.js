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
		'-----------------------------------'+"\n"+
		' '+xy[0][0]+'  '+xy[0][1]+'			'+xy[0][2]+"\n"+
		' '+xy[1][0]+'  '+xy[1][1]+'			'+xy[1][2]+"\n"+
		' '+xy[2][0]+'  '+xy[2][1]+'			'+xy[2][2]+"\n"+
		' '+xy[3][0]+'  '+xy[3][1]+'			'+xy[3][2]+"\n"+
		' '+xy[4][0]+'  '+xy[4][1]+'			'+xy[4][2]+"\n"+
		' '+xy[5][0]+'  '+xy[5][1]+'			'+xy[5][2]+"\n"+
		' '+xy[6][0]+'  '+xy[6][1]+'			'+xy[6][2]+"\n"+
		' '+xy[7][0]+'  '+xy[7][1]+'			'+xy[7][2]+"\n"+
		' '+xy[8][0]+'  '+xy[8][1]+'			'+xy[8][2]+"\n"+
		xy[9][0]+'  '+xy[9][1]+'			'+xy[9][2]+"\n"+
		xy[10][0]+'  '+xy[10][1]+'			'+xy[10][2]+"\n"+
		xy[11][0]+'  '+xy[11][1]+'			'+xy[11][2]+'```'
	);
});


client.login(process.env.BOT_TOKEN);