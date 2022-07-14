const { send, geteuid } = require('process');
const { Client, MessageEmbed, Collection, MessageActionRow, MessageButton, Discord  } = require('discord.js');
const config = require('cfg-lib'); 
const { get } = require('http');
const internal = require('stream');

let discordConf = new config.Config("./config/discord.cfg")

const client = new Client({
  intents: 32767,
  fetchAllMembers: true
});
module.exports = client;


// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();


// Initializing the project
require("./handler")(client);

//Très secret, ne pas laisser ici!!!
client.login(discordConf.get('bot.token'))


const prefix = "/";

/*
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  //client.user.setActivity("vous aider")
});

client.on('message', message => {
  if (message.type !== 'DEFAULT' || message.author.bot) return
  if (message.channel.type == "dm") return

  //DONNER ID
  //const channel = member.guild.channels.find('⭐┊ᴍᴏɴ-ɪᴅᴇɴᴛɪꜰɪᴀɴᴛ');
  //if (!channel) return;

  if (message.content.toLowerCase() == prefix + "id") {
    client.guilds.cache.get(message.guild.id);
    message.author.send("Salut " + message.author.tag + " ! Ton Identifiant Life Invader est : " + message.author.id)
    console.log(message.author.tag + "a utiliser la commande ID " + message.author.id)
    setTimeout(function () {
      message.delete();
    }, 2500);
  }


  //SUPPRIMER LES MESSAGES
  if (
    message.content.toLowerCase().startsWith(prefix + 'clear') ||
    message.content.toLowerCase().startsWith(prefix + 'c ')
  ) {
    if (!message.member.hasPermission('MANAGE_MESSAGES'))
      return message.channel.send("Vous n'êtes pas autoriser à utiliser cette commande").then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    if (!isNaN(message.content.split(' ')[1])) {
      let amount = 0;
      if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
        amount = 1;
      } else {
        amount = message.content.split(' ')[1];
        if (amount > 100) {
          amount = 100;
        }
      }
      message.channel.bulkDelete(amount, true).then((_message) => {
        message.channel.send(`J'ai supprimer \`${_message.size}\` messages :broom:`).then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      });
    } else {
      message.channel.send('Entrez le nombre de messages que vous voulez supprimer').then((sent) => {
        setTimeout(function () {
          sent.delete();
        }, 2500);
      });
    }
  } else {
    if (message.content.toLowerCase() === prefix + 'aide clear') {
      const supEmbed = new Discord.MessageEmbed().setColor('RED').setTitle('**Aide à la suppression**');
      supEmbed
        .setDescription('Cette commande supprime les messages`.clear 5` ou `.c 5`.')
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        .setTimestamp();
      message.channel.send(supEmbed);
    }
  }
});


//token de life invader : OTc4MjE1NzUzMjU1ODk5MTQ2.GMUloF.AS4mhSwY1OijJOl4pe7m_WNCNvtEY3-1xOu1wI

*/
