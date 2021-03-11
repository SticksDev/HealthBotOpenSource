const Discord = require("discord.js");
const fetch = require("node-fetch");

exports.run = (client, message, args) => {
    if(message.author.id === "517495640020746250") {
        let thanksembed = new Discord.MessageEmbed()
        .setTimestamp()
        .setTitle(`Thank's for testing the bot, ${args[0]} `)
        .setDescription(`It really means alot to us. Thanks from everyone on the healthbot team!`)
        message.channel.send(thanksembed)
        message.delete()
    }else{
        return;
    }
}