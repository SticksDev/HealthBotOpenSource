const Discord = require("discord.js");


exports.run = (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("You can't use this command.")
    }
    if(message.guild.me.hasPermission("ADMINISTRATOR")) {
        let checkdone1embed = new Discord.MessageEmbed()
        .setTitle("Sucess!")
        .setDescription("I have all permsions to run.")
        .setTimestamp()
        return message.channel.send(checkdone1embed)
    }if(message.guild.me.hasPermission("KICK_MEMBERS")) {
        if(message.guild.me.hasPermission("BAN_MEMBERS")) {
            if(message.guild.me.hasPermission("MANAGE_MESSAGES")){
                if(message.guild.me.hasPermission("EMBED_LINKS")){
                    let checkdone3embed = new Discord.MessageEmbed()
                    .setTitle("Sucess!")
                    .setDescription("I have all permsions to run.")
                    .setTimestamp()
                    return message.channel.send(checkdone3embed)
                }
            }
        }
    }else{
        let checkdone2embed = new Discord.MessageEmbed()
        .setTitle("Error!")
        .setDescription("I have DO NOT have all permsions to run. Please ensure I have ``ADMINISTRATOR`` on my role, or the following premssions: ``KICK_MEMBERS, BAN_MEMBERS, MANAGE_MESSAGES, EMBED_LINKS, SEND_MESSAGES``")
        .setTimestamp()
        return message.channel.send(checkdone2embed)
    }

}