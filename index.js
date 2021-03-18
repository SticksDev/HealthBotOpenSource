const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

const client = new Discord.Client();
const config = require("./config.json");

// Please do not edit the below, this is the key checker. Doing so will result in a key removal.
if(config.selfhost === "false") {
  throw new Error("This is the open source version of the bot, not the main one. Please set selfhost in config to true.")
}
if(config.key === "") {
  throw new Error("No self host key was set in config. Killing.")
}
function existsFile(url) {
  var http = new XMLHttpRequest();
  http.open('HEAD', url, false);
  http.send();
  return http.status!=404;
}

if(existsFile(`http://sticks.cf/healthbot/${config.key}`) === true) {
  console.log("Key OK")
} else {
  throw new Error("Key not OK.")
}
// Start Editable code

client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token)
