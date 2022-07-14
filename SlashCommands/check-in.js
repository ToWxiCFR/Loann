const { CommandInteraction, Client } = require("@discordjs/builders");
const { CheckTeamIn } = require("../../controllers/toornamentController");
const { CheckIfAllowedGuild } = require("../../controllers/dataController");
const { sendDiscordNotAllowed } = require("../../controllers/embedController");
var OnLog = require("../../classes/Log.js");
module.exports = {
  name: "check-in",
  description: "Check-in",
  //default_permission: false,
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
     /** LOGGING SECTION START */
     var location = {}
     location.file = `clear.js`
     var data = {}
     data.title = `command executed`
     data.guild = {}
     data.guild.name = `${interaction.guild.name}`
     data.guild.id = `${interaction.guild.id}`
     data.client = {}
     data.client.name = `${client.user.username}`
     data.client.id = `${client.user.id}`
     data.command = {}
     data.command.name = `${interaction.commandName}`
     data.command.id = `${interaction.commandId}`
     data.command.args = `${interaction.options._hoistedOptions}`
     data.executer = {}
     data.executer.name = `${interaction.user.username}`
     data.executer.id = `${interaction.user.id}`
     var log = new OnLog("command", "ok", data, location, Date.now())
     log.showLog()
     log.sendEventLog(interaction.guild)
     /** LOGGIN END SECTION */
      interraction.followUp("bonjour")
      return;
    }
};
