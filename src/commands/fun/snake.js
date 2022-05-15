const { Command } = require("@src/structures");
const { Message, CommandInteraction } = require("discord.js");
const SnakeGame = require("snakecord");

module.exports = class SnakeCommand extends Command {
  constructor(client) {
    super(client, {
      name: "snake",
      description: "jouer au jeu du serpent sur discord ",
      cooldown: 300,
      category: "FUN",
      botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "ADD_REACTIONS", "READ_MESSAGE_HISTORY", "MANAGE_MESSAGES"],
      command: {
        enabled: true,
      },
      slashCommand: {
        enabled: true,
      },
    });
  }

  /**
   * @param {Message} message
   * @param {string[]} args
   */
  async messageRun(message, args) {
    await message.reply("**Commencement du jeu du serpent **");
    await startSnakeGame(message);
  }

  /**
   * @param {CommandInteraction} interaction
   */
  async interactionRun(interaction) {
    await interaction.followUp("**Commencement du jeu du serpent**");
    await startSnakeGame(interaction);
  }
};

async function startSnakeGame(data) {
  const snakeGame = new SnakeGame({
    title: "Jeu de serpent ",
    color: "#303136",
    timestamp: true,
    gameOverTitle: "Game Over",
  });

  await snakeGame.newGame(data);
}
