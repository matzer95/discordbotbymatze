const Discord = require('discord.js');
const client = new Discord.Client();

const fetch = require('node-fetch');
const querystring = require('querystring');
const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);




const prefix = '!';
const list_of_commands = ["info", "docs", "grayhammer", "powersurge", "rattlesnake", "shortfuse", "snowvalley", "warhead", "slaughterhouse", "piazza", "gray_outside_a", "sf_bluecar", "sf_whitecar", "PSST1", "PSST2", "1v5", "1v4mtp", "mikki", "melee", "modemtap", "r4z", "marcel", "oh"];


var latest_vid_id = 'VID_ID';
var loopstatus = 'on';
var mastery5 = 'a';


client.once('ready', () => {
    console.log('I am ready!');
});


client.on('ready', message => {
	client.channels.get('657656218281705503').send("loop");
	let url = 'https://www.googleapis.com/youtube/v3/search?key='+process.env.GGL_TOKEN+'&channelId='+process.env.CHANNEL_ID+'&part=id&order=date&maxResults=1'
	fetch(url)
	.then(res => res.json())
	.then((out) => {
		if (out.items[0].id.videoId !== latest_vid_id) {
			latest_vid_id = out.items[0].id.videoId;
		};
	});
});


client.on('message', async message => {
	console.log(message.content);
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// INFO
	if (message.content === prefix+`info`) message.channel.send("'!list' gives a list of all available commands");
	// ALLE DOCS
	else if (message.content === prefix+`docs`) message.channel.send(
		"GRAY HAMMER: https://docs.google.com/document/d/1txZIn904D2F9ZNe4lWhoGROZX4K85A4OmSIkZfGete0/edit?usp=sharing" + "\n" +
		"POWER SURGE: https://docs.google.com/document/d/1iAD8b1Zcaymvqx1eaPLEMDSTn4yLtUDerclUeJ_QrNo/edit?usp=sharing" + "\n" +
		"RATTLESNAKE: https://docs.google.com/document/d/1ApP13FWX_YlhjQlXuFnd7nGA73crY337Kt8_Ud00CbA/edit?usp=sharing" + "\n" +
		"SHORT FUSE:  https://docs.google.com/document/d/1QL46WkgNSaC6J3vnnVXxm3_RohT70blv-I87Qt8M0Vs/edit?usp=sharing" + "\n" +
		"SNOW VALLEY: https://docs.google.com/document/d/1jBo7Rw5eVvdei12IwowTgp6YyK9OhD_XfyCqhclR5Y4/edit?usp=sharing"
		);
	// EINZELNE NADES
	else if (message.content === prefix+`gray_outside_a`) message.channel.send('https://www.youtube.com/watch?v=ZkVDDrPZQj0');
	else if (message.content === prefix+`sf_bluecar`) message.channel.send('https://imgur.com/a/zMdzP');
	else if (message.content === prefix+`sf_whitecar`) message.channel.send('https://www.youtube.com/watch?v=0nd11CmDdxE');
	// VIDS 
	else if (message.content === prefix+`PSST1`) message.channel.send('https://www.youtube.com/watch?v=nTl9ufFtwuM');
	else if (message.content === prefix+`PSST2`) message.channel.send('https://www.youtube.com/watch?v=R2iQ6LrCOzE');
	else if (message.content === prefix+`1v5`) message.channel.send('https://www.youtube.com/watch?v=nqfAKg14VD0');
	else if (message.content === prefix+`mikki`) message.channel.send('https://www.youtube.com/watch?v=gGhq_9ubHbI');
	else if (message.content === prefix+`melee`) message.channel.send('https://www.youtube.com/watch?v=z880r5pHh_Y');
	else if (message.content === prefix+`1v4mtp`) message.channel.send('https://www.youtube.com/watch?v=dS-bbM_RNgw');
	else if (message.content === prefix+`modemtap`) message.channel.send('https://www.youtube.com/watch?v=mEK9k_2nH0M');
	else if (message.content === prefix+`r4z`) message.channel.send('https://www.youtube.com/watch?v=IfghPvgU1Zk');
	else if (message.content === prefix+`marcel`) message.channel.send('https://www.youtube.com/watch?v=RFWbO4hvsvA');
	else if (message.content === prefix+`oh`) message.channel.send('https://www.youtube.com/watch?v=2KZuZknEI4c');
	// LIST
	else if (message.content === prefix+`list`) message.channel.send(list_of_commands);
	// ROLE ASSIGN
	else if (message.content === prefix+`add_YT`) message.member.addRole('655357708773621770');
	else if (message.content === prefix+`remove_YT`) message.member.removeRole('655357708773621770');
	else if (message.content === prefix+`test1`) message.channel.send('Hello <@&655357708773621770>');
	else if (message.content === prefix+`test2`) console.log(latest_vid_id);
	else if (message.content === prefix+`test3`) message.channel.send(mastery5);
	// NOT EXIST COMMAND
	// else message.channel.send('This command does not exist.');
	//																						} else if (message.member.user.id !== '656839558788415518') message.delete(1);
});


client.on('message', function(message) {
	if (message.content === "loopend") loopstatus = 'off';
	if (message.content === "loopstart") loopstatus = 'on';
	if (loopstatus !== 'on') return;
    else if (message.content === "loop") {
        var interval = setInterval (function () {
			if (loopstatus !== 'on') return;
			client.channels.get('657656218281705503').lastMessage.delete(1);
            client.channels.get('657656218281705503').send("1")
            .catch(console.error);
        }, 3600 * 1000);														// SOURCE: https://stackoverflow.com/questions/12460378/how-to-get-json-from-url-in-javascript
    }
	let url = 'https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+process.env.SUMM_ID+'?api_key='+process.env.RIOT_TOKEN;
	fetch(url)
	.then(res => res.json())
	.then((out) => {
		mastery5 = out[0].championId;
	});
});


client.login(process.env.BOT_TOKEN);