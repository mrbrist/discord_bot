const chalk = require('chalk');
module.exports = client => {
  client.user.setUsername('Dickbott');
  console.log(chalk.green(`Connected as ${client.user.username}`));
  // TODO Figure out how to get the variable to work as it should
  var ChannelClear = Boolean
};
