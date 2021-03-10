const db = require('quick.db');
exports.run = (client, message, args) => {
    if(message.author.id === "517495640020746250") {
        db.set(`USER_BANNED_SUGGESTIONS_${args[0]}`, { id: `${args[0]}` })
        message.channel.send(`:white_check_mark: Banned userid: ${args[0]} `)
    }else{
        return;
    }
}