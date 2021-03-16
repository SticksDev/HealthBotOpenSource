const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const SayMessage = message.content.slice(23).trim();
    if(args.length === 0) {
        return message.channel.send("Please mention a userid to send a system message to.")
    }
    let rsp = new Discord.MessageEmbed()
        .setTitle("Message from system")
        .setDescription(SayMessage)
    if(message.author.id === "517495640020746250") {
        try {
            client.users.cache.get(args[0]).send(rsp)
            message.react("✅")
        } catch (err) {
            message.channel.send("Error sending:")
            message.channel.send(err.message)
            message.react("❌")
        }
    }else {
        return;
    }

}