const Discord = require('discord.js');

exports.run = (client, message) => {
  author=message.author
  let user = message.mentions.users.first();
  if (!user) {
  var embed = new Discord.RichEmbed()
    .addField(author.username,`Was created at ${author.createdAt}\nThe last message : ${author.lastMessage}`)
    .setColor(0x00FFFF)
    .setThumbnail(author.avatarURL)
  } else {
    var embed = new Discord.RichEmbed()
    .addField(user.username,`Was created at ${user.createdAt}\nThe last message : ${user.lastMessage}`)
    .setColor(0x00FFFF)
    .setThumbnail(user.avatarURL)
  }
  message.channel.sendEmbed(embed);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'profile',
  description: 'Shows the player profile',
  usage: 'profile [mention]'
};
