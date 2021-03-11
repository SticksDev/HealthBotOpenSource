const Discord = require("discord.js");
const Pagination = require('discord-paginationembed');

exports.run = async (client, message, args) => {
    const FieldsEmbed = new Pagination.FieldsEmbed()
        .setArray([{ word: '>ban user reason (Bans the user and logs it.) \n >kick user reason (Kicks the user and logs it.) \n >setlogchannel id (Sets the log channelID. ONLY USE THIS ONCE)' }, { word: '>hotlines (Lists the hotlines for || suicide prevention ||' },  { word: '>suggest (idea) (Sends a suggestion to us.) \n >ping (checks the bots ping)' }])
        .setAuthorizedUsers([message.author.id])
        .setChannel(message.channel)
        .setElementsPerPage(1)
        .setPageIndicator(true)
        .formatField('Command List', el => el.word)
        .setDeleteOnTimeout(true)
    FieldsEmbed.embed
        .setColor(0x00FFFF)
        .setTitle('Help Menu')
        .setDescription('This is the command list for health bot. Use the arrows to move around and the trash icon to remove the embed.')
        .setTimestamp()
        .setFooter("See a command that's not on here, and you want it to be added to the bot? Run >suggest (idea) to tell us!")
    await message.delete()
    await FieldsEmbed.build();
}