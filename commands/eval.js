const Discord = require("discord.js");
const config = require("../config.json");
exports.run = (client, message,args) => {
    async function DoEval() {
        client.clean = async (client, text) => {
            if (text && text.constructor.name == "Promise")
                text = await text;
            if (typeof text !== "string")
                text = require("util").inspect(text, {depth: 1});

            text = text
                .replace(/`/g, "`" + String.fromCharCode(8203))
                .replace(/@/g, "@" + String.fromCharCode(8203))
                .replace(client.token, "NO-TOKEN-FOR-YOU-HAHAHAHAHAHA");

            return text;
        };

        const code = args.join(" ");
        try {
            const evaled = eval(code);
            const clean = await client.clean(client, evaled);
            let success = new Discord.MessageEmbed()
                .setTitle(`Results`)
                .setColor("GREEN")
                .setDescription(`\`\`\`js\n${clean}\n\`\`\``)
                .setTimestamp()
                .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL());
            message.channel.send(success)
        } catch (err) {
            let error = new Discord.MessageEmbed()
                .setTitle(`Error`)
                .setColor("RED")
                .setDescription(`\`\`\`xl\n${await client.clean(client, err)}\n\`\`\``)
                .setTimestamp()
                .setFooter(`Requested By: ${message.author.tag}`, message.author.displayAvatarURL())
            message.channel.send(error)
        }

    }
    console.log("Eval Requested: " + message.author.id )
    if(message.author.id === "517495640020746250") {
        client.channels.cache.get(config.devlogchannel).send(`UserID: ${message.author.id} requested eval on ${message.guild.name}`)
        return DoEval()
    }else{
        return;
    }
}
