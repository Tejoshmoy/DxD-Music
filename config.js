module.exports = {
    app: {
        px: '>',
        token: 'OTUxNDg1NjU3MzA0NDA4MDk1.G5lr2l.VPJP4fkc8KJE7F4aA0f0tbBAiDrQ3jSiZoiSEU',
        playing: 'by Troid UwU'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};