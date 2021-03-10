const db = require('quick.db');
exports.run = (client, message, args) => {
    if(message.author.id === "517495640020746250") {
        let checkifbanned = db.fetch(`USER_BANNED_SUGGESTIONS_${args[0]}`)
        if(checkifbanned) {
            db.delete(`USER_BANNED_SUGGESTIONS_${args[0]}`)
            message.channel.send(`:white_check_mark: Unbanned userid: ${args[0]}`)
        }else{
            message.channel.send(":x: No user with that ID was found.")
        }
    }else{
        return;
    }
}