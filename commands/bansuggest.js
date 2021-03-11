const db = require('quick.db');
const config = require("../config.json");
exports.run = (client, message, args) => {
    if(message.author.id === "517495640020746250") {
        db.set(`USER_BANNED_SUGGESTIONS_${args[0]}`, { id: `${args[0]}` })
        message.channel.send(`:white_check_mark: Banned userid: ${args[0]} `)
        client.channels.cache.get(config.devlogchannel).send(`UserID: ${args[0]} was banned from suggestions by ${message.author.username}`)
    }else{
        return;
    }
}