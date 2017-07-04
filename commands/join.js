const YTDL = require("ytdl-core");
var servers = {};

function play(connection, message) {
  var server = servers[message.guild.id];
  server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  server.queue.shift();
  server.dispatcher.on("end", function() {
    if (server.queue[0]) server.queue.push('https://www.youtube.com/watch?v=npDyVwYrIUI');
    else server.queue.push('https://www.youtube.com/watch?v=npDyVwYrIUI');
    play(connection, message);
  });
}

exports.run = (client, message) => {
  if (!message.member.voiceChannel) {
    message.channel.sendMessage("You should be in the Voice Channel");
    return;
  }
  if (!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
  };
  var server = servers[message.guild.id];
  server.queue.push('https://www.youtube.com/watch?v=npDyVwYrIUI');
  if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
    play(connection, message);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'join',
  description: 'Make the bot joins the Voice Channel and plays One piece music',
  usage: 'join'
};
