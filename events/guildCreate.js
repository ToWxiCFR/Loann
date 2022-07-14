const client = require("../index");
const { pushSlashCommand } = require("../controllers/utils");

client.on("guildCreate", function (guild) {
  pushSlashCommand(client);
});
