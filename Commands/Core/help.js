const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));
        // embed.setAuthor(client.user.username);
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.setDescription('Did Groovy and Rhythm getting taken down made you wanna give up on discord?\nTroid got you covered mate\nDxD Music is free for life! ENJOY!');
        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();
        embed.setFooter('from Troid Inc.', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};