const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let creditsembed = new Discord.MessageEmbed()
        .setTitle("Credits")
        .setDescription("Lead Developer: sticks#6436 \n" +
            "Developer: Bennyg#9999")
    message.channel.send(creditsembed)
}