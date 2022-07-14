const fs = require("fs");
const client = require("../index");
const { pushSlashCommand } = require("../controllers/utils");
var OnLog = require("../classes/Log.js")


/**  What i want to do here is
 * At every Lunch Remove every command of all server, then repush them, is the best way i found to make sur every body have the last updated command without delay.
 * Frist Del command
 * Second Push command
 * Then Overwrite command
 */
client.on("ready", async () => {
  console.log("je suis ready")
  pushSlashCommand(client);
  const Guilds = client.guilds.cache.map((guild) => guild);
  var i = 0;
  Guilds.forEach((guild) => {
    /** LOGGING SECTION START */
    var location = {}
    
    var data = {}
    data.title = `conneted guild`
    data.guild = {}
    data.guild.name = `${guild.name}`
    data.guild.id = `${guild.id}`
    data.client = {}
    data.client.name = `${client.user.username}`
    data.client.id = `${client.user.id}`
    var log = new OnLog("event", "ok", data, location, Date.now())
    log.showLog()
    log.sendEventLog(guild)
     /** LOGGING SECTION END */
    i++;
  });
   /** LOGGING SECTION START */
   var location = {}
   location.file = `events\\ready.js`
   location.function = `client.on(ready)`
   var data = {}
   data.title = `Bot Launched`
   data.client = {}
   data.client.name = `${client.user.username}`
   data.client.id = `${client.user.id}`
   var log = new OnLog("event", "ok", data, location, Date.now())
   log.showLog()
   
});
