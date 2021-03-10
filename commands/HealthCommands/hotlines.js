const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let hotlinelist = new Discord.MessageEmbed()
        .setTitle("Hotlines: List")
        .addFields(
            { name: "US Hotline", value: "1-800-273-8255 or https://suicidepreventionlifeline.org/chat/" },
            {name: "CA Hotline", value: "1.833.456.4566 or text 45645"}
        )
    message.channel.send("If you need help, call these numbers. We are here for you.")
    message.channel.send(hotlinelist)
}