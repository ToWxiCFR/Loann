const client = require("../index")
const { isTeamVoice } = require("../controllers/dataController")
const { makeVoiceVisible, makeVoiceInVisible } = require("../controllers/voiceController")

client.on("voiceStateUpdate", async (oldState, newState) => {
    if(oldState.channel){
        if(isTeamVoice(oldState.channel.id)){
            makeVoiceInVisible(oldState.channel, oldState)
        }
    }
    if(newState.channel){
        if(newState.channel.id){
            if(isTeamVoice(newState.channel.id)) {
                makeVoiceVisible(newState.channel, newState)
              }
        }
    }
}
);