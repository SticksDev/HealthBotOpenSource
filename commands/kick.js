const Discord = require("discord.js");
const db = require('quick.db');
const casenum = Math.ceil(Math.random() * 100)
exports.run = (client, message, [mention, ...reason]) => {
    const PermsDeined = new Discord.MessageEmbed()
        .setTitle("You can't do that!")
        .setColor(0x00AE86)
        .setDescription("Either your not a mod, or you dont have ``KICK_MEMBERS`` permission on your role.")
        .setTimestamp()
    const BackToHelp = new Discord.MessageEmbed()
        .setTitle("Help | Kick Command")
        .setColor(0x00AE86)
        .setDescription("**kick reason user** | Kicks a user")
        .setTimestamp()
    if (message.mentions.members.size === 0)
        return message.reply(BackToHelp);

    if (!message.member.hasPermission("KICK_MEMBERS"))
        return message.reply(PermsDeined);

    const kickMember = message.mentions.members.first();


    kickMember.kick(reason.join(" ")).then(member => {
        const PostLog = new Discord.MessageEmbed()
            .setTitle("ModAction | Kick")
            .setColor(0x00AE86)
            .addFields(
                { name: 'Moderator:', value: message.author.username, inline: true },
                { name: 'User who was kicked:', value: kickMember, inline: true },
                { name: 'Reason:', value: reason, inline: true },
                { name: 'Case:', value: casenum, inline: true }
            )
            .setTimestamp()
        message.reply("User was kicked.");
        const res = db.all()
            .filter(c => c.ID.startsWith(`LOGCHANNEL_${message.guild.id}`))
        if(res) {
            try {
              client.channels.cache.get(res[0].ID.split('_')[2]).send(PostLog)
            } catch(err) {
                message.channel.send("Could not access or send to the logs channel. Make sure you have one setup by using >setlogchannel (channelid)")
                client.channels.cache.get("819224230151192606").send("Error Sending to log channel: " + err + " On guild " + message.guild.name + ".")
                console.log(err)
            }
        }
    });
};