const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);
        if (args == '') return message.channel.send(`No Time is given ${message.author}... try again ? ❌`);
        if (!queue || !queue.playing) return message.channel.send(`No music currently playing ${message.author}... try again ? ❌`);
        const timeToMS = ms(args.join(' '));
        if (timeToMS >= queue.current.durationMS) return message.channel.send(`The indicated time is higher than the total time of the current song ${message.author}... try again ? ❌\n*Try for example a valid time like **5s, 10s, 20 seconds, 1m**...*`);
        await queue.seek(timeToMS*1000);
        var timestamp = queue.getPlayerTimestamp();
        message.channel.send(`Time set on the current song **${timeToMS} secs** ✅`);

    },
};