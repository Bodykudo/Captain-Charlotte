module.exports = member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`${member} has left the Server! :frowning:`);
};
