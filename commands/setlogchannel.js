const Discord = require("discord.js");
let db = require('quick.db')
exports.run = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Sorry, you need to have the ADMINISTRATOR permission to do that.")
    }
    if(args.length === 0) {
        return message.channel.send("Please specify a CHANNEL ID to set as the logs channel.")
    }
    db.set(`LOGCHANNEL_${message.guild.id}_${args[0]}`, 'true')
    let sucessembed = new Discord.MessageEmbed()
        .setTitle("Success.")
        .setDescription("The log channel was set to: " + "``" + args[0] + "``")
    message.channel.send(sucessembed)
}