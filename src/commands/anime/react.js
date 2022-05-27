const { Command } = require("@src/structures");
const { MessageEmbed, Message, CommandInteraction, MessageActionRow, MessageButton } = require("discord.js");
const { EMBED_COLORS } = require("@root/config.js");
const { getJson } = require("@utils/httpUtils");
const { getRandomInt } = require("@utils/miscUtils");

module.exports = class MemeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "anime",
      description: "envoie des animes random",
      category: "FUN",
      botPermissions: ["EMBED_LINKS"],
      cooldown: 20,
      command: {
        enabled: true,
        usage: "[categorie]",
      },
      slashCommand: {
        enabled: true,
        options: [
          {
            name: "category",
            description: "meme category",
            type: "STRING",
            required: false,
          },
        ],
      },
    });
  }

  /**
   * @param {Message} message
   * @param {string[]} args
   */
  async messageRun(message, args) {
    const choice = args[0];

    const buttonRow = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("regenMemeBtn").setStyle("SECONDARY").setEmoji("<:recharger:963284695313948742>")
    );
    const embed = await getRandomEmbed(choice);

    const sentMsg = await message.reply({
      embeds: [embed],
      components: [buttonRow],
    });

    const collector = message.channel.createMessageComponentCollector({
      filter: (reactor) => reactor.user.id === message.author.id,
      time: this.cooldown * 10000,
      max: 3,
      dispose: true,
    });

    collector.on("collect", async (response) => {
      if (response.customId !== "regenMemeBtn") return;
      await response.deferUpdate();

      const embed = await getRandomEmbed(choice);
      await sentMsg.edit({
        embeds: [embed],
        components: [buttonRow],
      });
    });

    collector.on("end", () => {
      buttonRow.components.forEach((button) => button.setDisabled(true));
      return sentMsg.edit({
        components: [buttonRow],
      });
    });
  }

  /**
   * @param {CommandInteraction} interaction
   */
  async interactionRun(interaction) {
    const choice = interaction.options.getString("category");

    const buttonRow = new MessageActionRow().addComponents(
      new MessageButton().setCustomId("regenMemeBtn").setStyle("SECONDARY").setEmoji("<:recharger:963284695313948742>")
    );
    const embed = await getRandomEmbed(choice);

    await interaction.followUp({
      embeds: [embed],
      components: [buttonRow],
    });

    const collector = interaction.channel.createMessageComponentCollector({
      filter: (reactor) => reactor.user.id === interaction.user.id,
      time: this.cooldown * 1000,
      max: 3,
      dispose: true,
    });

    collector.on("collect", async (response) => {
      if (response.customId !== "regenMemeBtn") return;
      await response.deferUpdate();

      const embed = await getRandomEmbed(choice);
      await interaction.editReply({
        embeds: [embed],
        components: [buttonRow],
      });
    });

    collector.on("end", () => {
      buttonRow.components.forEach((button) => button.setDisabled(true));
      return interaction.editReply({
        components: [buttonRow],
      });
    });
  }
};

async function getRandomEmbed(choice) {
  const subReddits = ["AnimeFR"];
  let rand = choice ? choice : subReddits[getRandomInt(subReddits.length)];

  const response = await getJson(`https://www.reddit.com/r/${rand}/random/.json`);
  if (!response.success) {
    return new MessageEmbed().setColor(EMBED_COLORS.ERROR).setDescription("Une erreur est survenue!");
  }

  const json = response.data;
  if (!Array.isArray(json) || json.length === 0) {
    return new MessageEmbed().setColor(EMBED_COLORS.ERROR).setDescription(`Aucun meme pour ${choice}`);
  }

  try {
    let permalink = json[0].data.children[0].data.permalink;
    let memeUrl = `https://reddit.com${permalink}`;
    let memeImage = json[0].data.children[0].data.url;
    let memeTitle = json[0].data.children[0].data.title;
    let memeUpvotes = json[0].data.children[0].data.ups;
    let memeNumComments = json[0].data.children[0].data.num_comments;

    return new MessageEmbed()
      .setAuthor({ name: memeTitle, url: memeUrl })
      .setImage(memeImage)
      .setColor("#303136")
      .setFooter({ text: `👍 ${memeUpvotes} | 💬 ${memeNumComments}` });
  } catch (error) {
    return new MessageEmbed().setColor(EMBED_COLORS.ERROR).setDescription("Une erreur est survenue!");
  }
}
