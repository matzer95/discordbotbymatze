const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);


const prefix = '!';

var latest_vid_id = 'VID_ID';
var xyz;

client.once('ready', () => {
    console.log('I am ready!');
});

// https://sheets.googleapis.com/v4/spreadsheets/1Wqlovr44XVOGj8dimevZnUbgRk7OX8rfFDSexGARqwo/values/'General%20Stats'!B5:D16?key=
//GGL_TOKEN

//client.on('ready', message => {
//	client.channels.get('657656218281705503').send("loop");
//	let url = 'https://www.googleapis.com/youtube/v3/search?key='+process.env.GGL_TOKEN+'&channelId='+process.env.CHANNEL_ID+'&part=id&order=date&maxResults=1'
//	fetch(url)
//	.then(res => res.json())
//	.then((out) => {
//		if (out.items[0].id.videoId !== latest_vid_id) {
//			latest_vid_id = out.items[0].id.videoId;
//		};
//	});
//});

client.on('ready', message => {
	let url = 'https://sheets.googleapis.com/v4/spreadsheets/1Wqlovr44XVOGj8dimevZnUbgRk7OX8rfFDSexGARqwo/values/\'General%20Stats\'!B5:D16?key='+process.env.GGL_TOKEN
	fetch(url)
	.then(res => res.json())
	.then((out) => {
		xyz = out.values;
	});
});

client.on('message', async message => {
	console.log(message.content);
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	if (message.content === prefix+`sf_bluecar`) message.channel.send('https://imgur.com/a/zMdzP');
	else if (message.content === prefix+`marcel`) message.channel.send('https://www.youtube.com/watch?v=RFWbO4hvsvA');
	else if (message.content === prefix+`oh`) message.channel.send('https://www.youtube.com/watch?v=2KZuZknEI4c');
	else if (message.content === prefix+`test2`) console.log(latest_vid_id);
	else if (message.content === prefix+`test3`) message.channel.send(xyz);
});


client.on('message', function(message) {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
});


client.login(process.env.BOT_TOKEN);