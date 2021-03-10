
const Discord = require("discord.js");

const doLog = "812748485748195350"

const Enmap = require("enmap");


module.exports = (client, message) => {
    if (message.content === "<apply") {
        let user = message.member.user
        const member = message.guild.members.cache.get(user.id)
        let newapp = new Discord.MessageEmbed()
        .setTitle("New application has been started.")
        .setColor(0x00AE86)
        .addFields(
            { name: 'User:', value: message.author.username},
                  { name: 'Joined on:', value: new Date(member.joinedTimestamp).toLocaleDateString()},
                  { name: 'Account Creation:', value: new Date(user.createdTimestamp).toLocaleDateString()}
        )
        .setTimestamp()
        client.channels.cache.get(doLog).send(newapp)
    }

// Ignore messages not starting with the prefix (in config.json)
if (message.content.indexOf(client.config.prefix) !== 0) return;

// Our standard argument/command name definition.
const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

// Grab the command data from the client.commands Enmap
const cmd = client.commands.get(command);

// If that command doesn't exist, silently exit and do nothing
if (!cmd) return message.channel.send ("Looks like that command does not exist! Try running ?help")


// Run the command
cmd.run(client, message, args);

}