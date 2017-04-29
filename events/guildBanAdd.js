module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} has been banned from the server`);
};
