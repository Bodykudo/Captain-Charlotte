function generateHex() {
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

module.exports = member => {
  let guild = member.guild;
  member.addRole(member.guild.roles.find("name", "Member"));
  member.guild.createRole({
    name: member.user.username,
    color: generateHex(),
    premissions: []
  }).then(function(role) {
      member.addRole(role);
  });
};
