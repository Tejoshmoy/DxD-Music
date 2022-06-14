# **DxD-Music**
It's a Discord music bot coded in JavaScript.


## ⚡ Configuration

Create an `.env` file in the main folder and write:
 
     TOKEN=
*followed by the bot's token generated from the [Discord Developers](https://discordapp.com/developers/applications) portal*

<br>

Open the configuration file located in the main folder `config.js`.

```js
module.exports = {
    app: {
        px: 'XXX',
        token: process.env.TOKEN,
        playing: 'XXX'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'XXX',
            commands: []
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {}
    }
};
```

### Basic configuration

- `app/px`, the prefix that will be set to use the bot
- `app/playing`, the activity of the bot

DJ mode configuration

- `opt/DJ/enabled`, whether the DJ mode should be activated or not 
- `opt/DJ/roleName`, the name of the DJ role to be used
- `opt/DJ/commands`, the list of commands limited to members with the DJ role

Advanced configuration

- `opt/maxVol`, the maximum volume that users can define
- `opt/loopMessage`, if the message that a music is played should be sent when it is looped
- `opt/discordPlayer`, options used by discord-player

### 📑 Installation

To use the project correctly you will need some tools.

[FFmpeg](https://www.ffmpeg.org) to process audio

[Node JS](https://nodejs.org/en/) (v16) for environment

Without forgetting, of course, the code editor ^^UwU^^

<br><br>

## 📝 NOTE:

### *For modifying code:*
 If there are issues with auto generated files like ".DS_Store", open the project folder in terminal and check for hidden files by running the command: 

    ls -a

And if the file producing issues is in there, run the following command to delete it:

    find . -name .DS_Store -type f -delete