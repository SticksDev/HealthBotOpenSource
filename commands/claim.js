const Discord = require("discord.js");
const delay = ms => new Promise(res => setTimeout(res, ms));
exports.run = async (client, message, args) => {
    message.delete()
    const supportrole = message.guild.roles.cache.find(role => role.name === "ticketsupport");
    if(!message.guild.roles.cache.some(role => role.name === 'ticketsupport')) {
        return message.channel.send("Unable to claim ticket: No support role. Run >ticketsetup to fix this.")
    }
    if (!message.member.roles.cache.has(supportrole.id)){
      return message.channel.send("Sorry, you cannot do that.");
    
    } else if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.cache.has(supportrole.id)  ) {
          sentmsg = await message.channel.send("Claim this ticket? Type Yes/No (Case Sensitive)")
          message.channel.awaitMessages(m => m.author.id == message.author.id,
              {max: 1, time: 30000}).then(collected => {
                      if (collected.first().content.toLowerCase() == 'yes') {
                              message.channel.setTopic(`Claimed | By: ${message.author.username} | At: ${new Date().toLocaleString()} EST.`)
                              sentmsg.edit("Claimed!").then(msg => {
                                  msg.delete({ timeout: 1000 })
                              })
                      }
  
                      else
                              message.channel.send('Operation canceled.');      
              }).catch(() => {
                      message.reply('No answer after 30 seconds, operation canceled.');
              });
      
          }
    
}
