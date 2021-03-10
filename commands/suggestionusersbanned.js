const db = require('quick.db');
const backticks = "```"
exports.run = (client, message, args) => {
    if(message.author.id === "517495640020746250") {
        const notreadable = JSON.stringify(db.all(), null , 4)
        message.channel.send(backticks + notreadable + backticks)
    }else{
        return
    }
}