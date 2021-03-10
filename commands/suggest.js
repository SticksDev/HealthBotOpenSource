const Discord = require("discord.js");
let db = require('quick.db')
exports.run = (client, message, args) => {
    let checkifbanned = db.fetch(`USER_BANNED_SUGGESTIONS_${message.author.id}`)
    if(checkifbanned) {
        return message.channel.send("You are banned from the suggestions system.")
    }
    const SayMessage = message.content.slice(8).trim();
    let newsuggestions = new Discord.MessageEmbed()
        .setTitle("New Suggestion.")
        .setDescription(`From user ${message.author.username} on guild ${message.guild.name}.`)
        .addFields(
            {name: "UserID", value: message.author.id},
                   {name: "Message", value: SayMessage }
        )
    client.channels.cache.get("819224230151192606").send(newsuggestions)
    message.channel.send("Sucessfully sent. Please don't abuse this system, or you will be banned.")
}