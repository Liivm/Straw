const { Command } = require("@src/structures");
const { Message, CommandInteraction } = require("discord.js");
const { getMember } = require("@schemas/Member");
const { resolveMember } = require("@utils/guildUtils");

module.exports = class InvitesImportCommand extends Command {
  constructor(client) {
    super(client, {
      name: "invitesimport",
      description: "ajouter des invitations de guilde existantes aux utilisateurs ",
      category: "INVITE",
      botPermissions: ["MANAGE_GUILD"],
      userPermissions: ["MANAGE_GUILD"],
      command: {
        enabled: true,
        usage: "[@membre]",
      },
      slashCommand: {
        enabled: true,
        options: [
          {
            name: "utilisateur",
            description: "l'utilisateur d'importer des invitations pour ",
            type: "USER",
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
    const target = args.length > 0 && (await resolveMember(message, args[0]));
    const response = await importInvites(message, target?.user);
    await message.reply(response);
  }

  /**
   * @param {CommandInteraction} interaction
   */
  async interactionRun(interaction) {
    const user = interaction.options.getUser("utilisateur");
    const response = await importInvites(interaction, user);
    await interaction.followUp(response);
  }
};

async function importInvites({ guild }, user) {
  if (user && user.bot) return "Oups! Vous ne pouvez pas importer d'invitations pour les bots ";

  const invites = await guild.invites.fetch({ cache: false });

  // temporary store for invites
  const tempMap = new Map();

  for (const invite of invites.values()) {
    const inviter = invite.inviter;
    if (!inviter || invite.uses === 0) continue;
    if (!tempMap.has(inviter.id)) tempMap.set(inviter.id, invite.uses);
    else {
      const uses = tempMap.get(inviter.id) + invite.uses;
      tempMap.set(inviter.id, uses);
    }
  }

  for (const [userId, uses] of tempMap.entries()) {
    const memberDb = await getMember(guild.id, userId);
    memberDb.invite_data.added += uses;
    await memberDb.save();
  }

  return `Fait! Invitations pr??c??dentes ajout??es ??  ${user ? user.tag : "tous les membres "}`;
}
