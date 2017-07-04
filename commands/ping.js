exports.run = (client, message) => {
  message.channel.sendMessage(`**Pong!** \`${Date.now() - message.createdTimestamp} ms\``);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does?',
  usage: 'ping'
};
