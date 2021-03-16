const Discord = require("discord.js");
const delay = ms => new Promise(res => setTimeout(res, ms));
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
        return message.channel.send("Sorry, you need to have the ADMINISTRATOR permission to do that.")
    }
    message.reply("Seting up ticket system..")
    if (message.guild.roles.cache.some(role => role.name === 'ticketsupport')) {
        message.channel.send('A role with the name "ticketsupport" already exists on this server. Skipping Creation.');
    }else if(!message.guild.roles.cache.some(role => role.name === 'ticketsupport')) {
        message.guild.roles.create({ data: { name: 'ticketsupport'} })
        .then(() => message.channel.send('Created ticketsupport role.'));  await delay(2000)
        .catch(console.error);
    }
    message.channel.send("**Sucess!** Give anyone who needs support acess to the tickets, the ticketsupport role.")
}