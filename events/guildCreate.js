const Discord = require("discord.js");

module.exports = async (client, guild) => {
    let owner = await client.users.fetch(guild.ownerID)
    let thanksembed = new Discord.MessageEmbed()
    .setTitle("Thanks for inviteing me!")
    .setDescription("Run >help for commands. \n **If you want the ticket system** run >ticketsetup")
    .setFooter("Bot created by sticks#6436 | Version 1.0 | >credits | >donate")
    client.users.cache.get(owner.id).send(thanksembed)
    console.log(`[GUILD JOIN] ${guild.name} (${guild.id}) added the bot. Owner: ${owner.id}`)
    client.user.setActivity(`Users: ${client.users.cache.size}  | Version 1.0.0`, { type: "WATCHING"})
}