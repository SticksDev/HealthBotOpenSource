const Discord = require("discord.js");

exports.run = (client, message, args) => {
    if(message.author.id === "517495640020746250") {
        const SayMessage = message.content.slice(5).trim();
        message.channel.send(SayMessage)
        message.delete()
    }else{
        return;
    }
}