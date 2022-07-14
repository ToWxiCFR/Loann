const client = require("../index");
const { pushSlashCommand } = require("../controllers/utils");

client.on("guildCreate", function (guild) {
  console.log(`New Server ${guild.name}`);
  pushSlashCommand(client);
});
