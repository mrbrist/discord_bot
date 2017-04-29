module.exports = (guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} has been un banned from the server`);
};
