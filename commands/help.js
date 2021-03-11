const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    let help = new Discord.MessageEmbed()
        .setTitle("Help Menu")
        .setDescription("Welcome to the help menu. React with the Shield to see mod commands, X for health commands, Check for orther commands.")
    const messagetosend = await message.channel.send(help)
    messagetosend.react("🛡️")
    messagetosend.react("❌")
    messagetosend.react("✅")
    const filter = (reaction, user) => {
        return ['🛡️', '❌', '✅'].includes(reaction.emoji.name) && user.id === message.author.id;
    };
    messagetosend.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '🛡️') {
            messagetosend.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            let modemebd = new Discord.MessageEmbed()
            .setTitle("Mod Help Menu")
            .setDescription(">ban user reason (Bans the user and logs it.) \n >kick user reason (Kicks the user and logs it.) \n >setlogchannel id (Sets the log channelID. ONLY USE THIS ONCE)")
            .setTimestamp()
            .setFooter("See a command that's not on here, and you want it to be added to the bot? Run >suggest (idea) to tell us!")
			messagetosend.edit(modemebd);
		} else if (reaction.emoji.name === '❌') {
            messagetosend.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            let healthembed = new Discord.MessageEmbed()
            .setTitle("Health Help Menu")
            .setDescription(">hotlines (Lists the hotlines for || suicide prevention ||")
            .setTimestamp()
            .setFooter("See a command that's not on here, and you want it to be added to the bot? Run >suggest (idea) to tell us!")
			messagetosend.edit('');
		} else if (reaction.emoji.name === '✅') {
            let ortherembed = new Discord.MessageEmbed()
            .setTitle("Orther Commands Help Menu")
            .setDescription(">suggest (idea) (Sends a suggestion to us.) \n >ping (checks the bots ping)")
            .setTimestamp()
            .setFooter("See a command that's not on here, and you want it to be added to the bot? Run >suggest (idea) to tell us!")
            messagetosend.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
            messagetosend.edit("")
        }
	})
	.catch(collected => {
		message.reply('Invaild Emote. Please do not react with any orther emotes as this breaks the bot :(');
	});
}