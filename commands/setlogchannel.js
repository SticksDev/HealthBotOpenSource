const Discord = require("discord.js");
let db = require('quick.db')
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Sorry, you need to have the ADMINISTRATOR permission to do that.")
    }
    if(args.length === 0) {
        return message.channel.send("Please specify a CHANNEL ID to set as the logs channel.")
    }
    const messagetosend = await message.channel.send("WARNING: Are you sure you wan't to set this log channel? Once you confirm, you **Cannot** Change it! React with check to set, x to cancel.")
    messagetosend.react("❌")
    messagetosend.react("✅")
    const filter = (reaction, user) => {
        return ['❌', '✅'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    messagetosend.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();
        if (reaction.emoji.name === '❌') {
            messagetosend.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
			return messagetosend.edit('Cancelled.');
		} else if (reaction.emoji.name === '✅') {
            messagetosend.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            db.set(`LOGCHANNEL_${message.guild.id}_${args[0]}`, 'true')
            let sucessembed = new Discord.MessageEmbed()
            .setTitle("Success.")
            .setDescription("The log channel was set to: " + "``" + args[0] + "``")
            messagetosend.edit(sucessembed)
        }
	})
}