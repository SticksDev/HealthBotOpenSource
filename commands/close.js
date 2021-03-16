const Discord = require("discord.js");

exports.run = (client, message, args) => {
    message.delete()
    const supportrole = message.guild.roles.cache.find(role => role.name === "ticketsupport");
    if(!message.guild.roles.cache.some(role => role.name === 'ticketsupport')) {
        return message.channel.send("Unable to close ticket: No support role. Run >ticketsetup to fix this.")
    }
    if (!message.member.roles.cache.has(supportrole.id)){
      return message.channel.send("Sorry, you cannot do that.");
    }else if(message.member.hasPermission("ADMINISTRATOR") || message.member.roles.cache.has(supportrole.id)  ) {
        message.channel.send("**WARNING: This will delete the ticket, and channel. ** Proceed? Type Yes/No (Case Sensitive)")
        message.channel.awaitMessages(m => m.author.id == message.author.id,
            {max: 1, time: 30000}).then(collected => {
                    if (collected.first().content.toLowerCase() == 'yes') {
                            message.reply('Closing ticket..');
                            message.channel.delete()
                            message.author.send("Operation Complete. Ticket closed.")
                    }

                    else
                            message.channel.send('Operation canceled.');      
            }).catch(() => {
                    message.reply('No answer after 30 seconds, operation canceled.');
            });
    
        }
}
