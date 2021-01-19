const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

const prefix = '?';

var xy;

client.once('ready', () => {
    console.log('Ready');
});

client.on('message', message => {
	let url = 'https://sheets.googleapis.com/v4/spreadsheets/1Wqlovr44XVOGj8dimevZnUbgRk7OX8rfFDSexGARqwo/values/\'General%20Stats\'!B5:D16?key='+process.env.GGL_TOKEN
	fetch(url)
	.then(res => res.json())
	.then((out) => {
		xy = out.values;
	});
});

const embed1 = new Discord.MessageEmbed()
	.setColor('#34d9d1')
	.setTitle('Current Standings')
	.addFields(
		{ name: '#', value: 'Mitch', inline: true },
		{ name: 'Name', value: 'xyyayad', inline: true },
		{ name: 'Points', value: '11299', inline: true },
	)
	.setTimestamp();

client.on('message', async message => {
	console.log(message.content);
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.content === prefix+`test2`) console.log('test');
	else if (message.content === prefix+`standings`)
		message.channel.send(
		'``` #  Name				Points'+"\n"+
		'-------------------------------'+"\n"+
		' '+xy[0][0]+'  '+xy[0][1]+' '+" ".repeat(20-xy[0][1].length)+xy[0][2]+"\n"+
		' '+xy[1][0]+'  '+xy[1][1]+' '+" ".repeat(20-xy[1][1].length)+xy[1][2]+"\n"+
		' '+xy[2][0]+'  '+xy[2][1]+' '+" ".repeat(20-xy[2][1].length)+xy[2][2]+"\n"+
		' '+xy[3][0]+'  '+xy[3][1]+' '+" ".repeat(20-xy[3][1].length)+xy[3][2]+"\n"+
		' '+xy[4][0]+'  '+xy[4][1]+' '+" ".repeat(20-xy[4][1].length)+xy[4][2]+"\n"+
		' '+xy[5][0]+'  '+xy[5][1]+' '+" ".repeat(20-xy[5][1].length)+xy[5][2]+"\n"+
		' '+xy[6][0]+'  '+xy[6][1]+' '+" ".repeat(20-xy[6][1].length)+xy[6][2]+"\n"+
		' '+xy[7][0]+'  '+xy[7][1]+' '+" ".repeat(20-xy[7][1].length)+xy[7][2]+"\n"+
		' '+xy[8][0]+'  '+xy[8][1]+' '+" ".repeat(20-xy[8][1].length)+xy[8][2]+"\n"+
		xy[9][0]+'  '+xy[9][1]+' '+" ".repeat(20-xy[9][1].length)+xy[9][2]+"\n"+
		xy[10][0]+'  '+xy[10][1]+' '+" ".repeat(20-xy[10][1].length)+xy[10][2]+"\n"+
		xy[11][0]+'  '+xy[11][1]+' '+" ".repeat(20-xy[11][1].length)+xy[11][2]+'```'
	);
	else if (message.content === prefix+`123`)
		message.channel.send(embed1)
});


client.login(process.env.BOT_TOKEN);