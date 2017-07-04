module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user} was just unbanned!`)
};
