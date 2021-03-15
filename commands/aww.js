const Discord = require("discord.js");
const fetch = require("node-fetch");
exports.run = (client, message, args) => {
    function loadCuties() {
        fetch('https://www.reddit.com/r/aww.json?limit=100&?sort=top&t=all')
            .then(res => res.json())
            .then(json => json.data.children.map(v => v.data.url))
            .then(urls => postRandomCutie(urls));
    }

    function postRandomCutie(urls) {
        const randomURL = urls[Math.floor(Math.random() * urls.length) + 1];
        const out = new Discord.MessageEmbed()
            .setTitle("Here is some awww")
            .setImage(randomURL)
            .setFooter("If the image does not load, try re running the command :P")
        message.channel.send(out);
    }
    loadCuties()
}