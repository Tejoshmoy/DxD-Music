require('dotenv').config();

module.exports = {
    app: {
        px: '.',
        token: process.env.TOKEN,
        playing: 'Troid UwU (Prefix: " . ")'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 500,
        loopMessage: true,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};