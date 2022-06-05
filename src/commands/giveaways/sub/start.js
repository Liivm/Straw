/**
 * @param {import('discord.js').GuildMember} member
 * @param {import('discord.js').GuildTextBasedChannel} giveawayChannel
 * @param {number} duration
 * @param {string} prize
 * @param {number} winners
 * @param {import('discord.js').User} [host]
 */
module.exports = async (member, giveawayChannel, duration, prize, winners, host) => {
  if (!host) host = member.user;
  if (!member.permissions.has("MANAGE_MESSAGES")) {
    return "You need to have the manage messages permissions to start giveaways.";
  }

  if (!giveawayChannel.isText()) {
    return "You can only start giveaways in text channels.";
  }

  try {
    await member.client.giveawaysManager.start(giveawayChannel, {
      duration: 60000 * duration,
      prize,
      winnerCount: winners,
      hostedBy: host,
      thumbnail: "",
      messages: {
        giveaway: "**LOTTERIE**",
        giveawayEnded: "**LOTTERIE TERMINER**",
        inviteToParticipate: "Reagis avec 🍡 pour entrer",
        dropMessage: "Soyez le premier à réagir avec 🍡 pour gagner!",
        hostedBy: `\nOrganiser par: ${host.tag}`,
      },
    });

    return `Giveaway started in ${giveawayChannel}`;
  } catch (error) {
    member.client.logger.error("Giveaway Start", error);
    return `An error occurred while starting the giveaway: ${error.message}`;
  }
};
