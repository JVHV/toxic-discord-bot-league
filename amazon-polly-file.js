// Load the SDK
const AWS = require('aws-sdk')
const Fs = require('fs')

// Create an Polly client
const Polly = new AWS.Polly({
    signatureVersion: 'v4',
    region: 'us-west-1'
})

function Roast(newNum, VictimName, FirstBlood) {
    let roast = "";
    if (newNum) {
        randomNum = Math.round(Math.random() * 20);
        if (FirstBlood == true) {
            randomNum = 20;
        }
    }
    console.log(randomNum);
    switch (randomNum) {
        case 1:
            roast = "Daniel dice, como un juego puede estar tan mal hecho";
            return roast;
        case 2:
            roast = VictimName + ", go back to playing Valorant. Wait. Are you even good at Valorant?"
            return roast;
        case 3:
            roast = VictimName + ", Can you like do something with your life other than League? You are legit trash"
            return roast;
        case 4:
            roast = "MALDITO JUEGO MAL HECHO"
            return roast;
        case 5:
            roast = VictimName + " DEJA DE JUGAR POR FAVOR."
            return roast;
        case 6:
            roast = "Holy shit " + VictimName + ". Can you land anything? Next game, kick " + VictimName;
            return roast;
        case 7:
            roast = "ERES UNA BASURA " + VictimName;
            return roast;
        case 8:
            roast = "Wow " + VictimName + ". You know it's a shame you play so much League but you are still trash."
            return roast;
        case 9:
            roast = VictimName + ", play any other game other than League, please."
            return roast;
        case 10:
            roast = "Just don't play League again " + VictimName + ". Just please. I hate watching you play like shit."
            return roast;
        case 11:
            roast = "You're a fucking piece of shit " + VictimName + ". You know that?"
            return roast;
        case 12:
            roast = "go fuck a cat"
            return roast;
        case 13:
            roast = "YOU. ARE. SHIT " + VictimName;
            return roast;
        case 14:
            roast = VictimName + ". Do something else with your life. Just not League.";
            return roast;
        case 15:
            roast = VictimName + "Just stop. PLEASEEEEEE."
            return roast;
        case 16:
            roast = "MALDITO NINO GORDO";
            return roast;
        case 17:
            roast = "God damn. you suck " + VictimName;
            return roast;
        case 18:
            roast = "how can an otaku play chinese games this bad";
            return roast;
        case 19:
            roast = "You are so... fucking... shit " + VictimName;
            return roast;
        case 20:
            roast = VictimName + "Stop playing. Just leave. The rest of your team does better without you feeding."
            return roast;
        case 21:
            roast = VictimName + "YOU. ARE. SHIT."
            return roast;
        case 22:
            roast = "Get your kills up for crying out loud " + VictimName;
            return roast;
        case 23:
            roast = "VIVAN LOS GATOS";
            return roast;
        case 23:
            roast = "ERES PEOR QUE EL HECTOR"
            return roast;
        case 21:
            roast = "First Blood? Really? Wow you really suck. You fucking loser."
            return roast;

    }
    newNum = false;
}

exports.pollySound = function pollySound(realFriendName, FirstBlood) {
    let newSound = false;

    let params = {
        'Text': Roast(true, realFriendName, FirstBlood),
        'OutputFormat': 'mp3',
        'VoiceId': 'Joanna'
    }

    console.log('Before Polly: ' + newSound);
    function getSound() {
        Polly.synthesizeSpeech(params, (err, data) => {
            if (err) {
                console.log(err.code)
            } else if (data) {
                if (data.AudioStream instanceof Buffer) {
                    Fs.writeFile("./speech.mp3", data.AudioStream, function (err) {
                        if (err) {
                            return console.log(err)
                        }
                        console.log("The file was saved!")
                        newSound = true;
                        console.log("After file saved: " + newSound)
                    })
                }
            }
        })
    }
    new Promise(getSound).then(() => {
        console.log("After Polly: " + newSound);
        return newSound;
    }).catch(err => console.log(err));
}
