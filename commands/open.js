const Discord = require("discord.js");
const casenum = Math.ceil(Math.random() * 10000)
exports.run = (client, message, args) => {
    message.delete();
    const reason = message.content.slice(6).trim();
    if(!message.guild.roles.cache.some(role => role.name === 'ticketsupport')) {
        return message.channel.send("Unable to open ticket: No support role. Run >ticketsetup to fix this.")
    }
    const supportrole = message.guild.roles.cache.find(role => role.name === "ticketsupport");
    message.guild.channels.create(`ticket-${casenum}`, {
        type: 'text',
        permissionOverwrites: [
            {
                id: message.guild.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: message.author.id,
                allow: ['VIEW_CHANNEL'],
            },
            {
                id: supportrole.id,
                allow: ['VIEW_CHANNEL'],
            }
        ],
    }).then(channel => {
        channel.setTopic(`unclaimed | Opened at ${new Date().toLocaleString()} EST.`)
        let newmessage2 = new Discord.MessageEmbed()
            .setTitle("Welcome to support! Someone will be with you soon.")
            .setDescription(`Reason: ${reason}`)
            .setFooter("If no reason is seen, none was provided.")
            channel.send(newmessage2)
            return channel.send(`<@&${supportrole.id}>, <@!${message.author.id}>`)

    });
}