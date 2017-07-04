var fortunes = [
  "Yes",
  "No",
  "Maybe",
  "Fuck You",
  "Yes, I think so",
  "No, I don't think so",
  "Impossible."
];

exports.run = (client, message) => {
  let argss = message.content.split(' ').slice(1);
  var result = argss.join(' ');

  if (result) {
      message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
  } else {
      message.channel.sendMessage("Can't read that");
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Ask the bot something, It will answer you',
  usage: '8ball [question]'
};
