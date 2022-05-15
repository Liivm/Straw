const { MessageEmbed } = require("discord.js");
const { getUser } = require("@schemas/User");
const { EMBED_COLORS, ECONOMY } = require("@root/config");

module.exports = async (user, coins) => {
  if (isNaN(coins) || coins <= 0) return "Veuillez saisir un nombre valide de pièces à déposer ";
  const userDb = await getUser(user.id);

  if (coins > userDb.bank) return `Vous n'avez que  ${userDb.bank}${ECONOMY.CURRENCY} pièces dans votre banque `;

  userDb.bank -= coins;
  userDb.coins += coins;
  await userDb.save();

  const embed = new MessageEmbed()
    .setColor(EMBED_COLORS.BOT_EMBED)
    .setAuthor({ name: "Nouvel équilibre " })
    .setThumbnail(user.displayAvatarURL())
    .addField("Porte monnaie ", `${userDb.coins}${ECONOMY.CURRENCY}`, true)
    .addField("Banque ", `${userDb.bank}${ECONOMY.CURRENCY}`, true)
    .addField("Valeur nette ", `${userDb?.coins + userDb?.bank}${ECONOMY.CURRENCY}`, true);

  return { embeds: [embed] };
};
