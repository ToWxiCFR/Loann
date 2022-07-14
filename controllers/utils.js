const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const globPromise = promisify(glob);
const fetchAll = require("discord-fetch-all");

function isASlashCommand(messageOrReactionOrInteraction) {
  if (messageOrReactionOrInteraction.type == "APPLICATION_COMMAND") {
    return true;
  } else {
    return false;
  }
}


// DUE TO THE DISCORD LIMITATION WE WILL PUSH COMMAND TO ALL DISCORD WITH THERE FUCNTION, AND USE THE CHECK UP WHEN THE COMMAND WILL BE EXECTUED.
async function pushSlashCommand(client) {
  const slashCommands = await globPromise(
    `${process.cwd()}/ls
    /*/*.js`
  );

  const arrayOfSlashCommands = [];
  slashCommands.map((value) => {
    const file = require(value);
    if (!file?.name) return;
    client.slashCommands.set(file.name, file);
    if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
    arrayOfSlashCommands.push(file);
  });

  console.log(arrayOfSlashCommands)
  await client.guilds.cache
    .get("852865182820859924")
    .commands.set(arrayOfSlashCommands); //Push to dev Server*/
 // await client.application.commands.set(arrayOfSlashCommands); //Push to all

  /**
   * Using This Method we should never bust the api limite.
   * */
}


module.exports = {
  pushSlashCommand,
  isASlashCommand
};
