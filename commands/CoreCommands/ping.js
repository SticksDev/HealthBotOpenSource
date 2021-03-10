exports.run = (client, message) => {
    message.channel.send(`🏓. API Latency is ${Math.round(client.ws.ping)}ms`);
}