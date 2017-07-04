const chalk = require('chalk');
module.exports = client => {
  console.log(`Logged in as ${client.user.username}\nID : ${client.user.id}\nLogged in at ${client.readyAt}`);
  client.user.setGame('Pirates Music');
};
