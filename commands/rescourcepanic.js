const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()
    let embed = new Discord.MessageEmbed()
        .setTitle("Here's what to do during a panic attack.")
        .setDescription("1. Try Box Breathing (Posted with this message) \n 2. Try grounding (Also Posted with this message.) \n 3. Sip some cold water, and focus on the sensation.")
    let groundingembed = new Discord.MessageEmbed()
        .setTitle("How to: Grounding")
        .setDescription("Ask yourself these questions, and answer them. After, you should feel better." +
            "1. Where am I?\n" +
            "2. What is today?\n" +
            "3. What is the date?\n" +
            "4. What is the month?\n" +
            "5. What is the year?\n" +
            "6. How old am I?\n" +
            "7. What season is it?")
    message.channel.send(embed)
    message.channel.send(groundingembed)
    message.channel.send("https://cdn.discordapp.com/attachments/641122189084590080/641143998895095823/boxbreath.gif");
}