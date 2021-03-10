const Discord = require("discord.js");
const PermsDeined = new Discord.MessageEmbed()
    .setTitle("You can't do that!")
    .setColor(0x00AE86)
    .setDescription("Either your not a mod, or you dont have ``manage_messages`` permission on your role.")
    .setTimestamp()
exports.run = async (client, message, member, args) => {
    const user = message.mentions.users.first();
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.reply(PermsDeined);
    }
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Must specify an amount to delete!');
    if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
    // Fetch 100 messages (will be filtered and lowered up to max amount requested)
    message.channel.messages.fetch({
        limit: 100,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
        message.channel.send(":white_check_mark: Complete: Deleted: " + amount).then(message => {
            message.delete({ timeout: 5000 })
        })
    });

}