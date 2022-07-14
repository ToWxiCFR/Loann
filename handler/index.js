const { glob } = require("glob");
const { promisify } = require("util"); 
const { Client } = require("discord.js");

const globPromise = promisify(glob);

/**
 * @param {Client} client 
 */
module.exports = async (client) => {
  // Events HANDLER
  const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
  eventFiles.map((value) => require(value));
  console.log(eventFiles)

};