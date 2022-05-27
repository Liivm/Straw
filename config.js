module.exports = {
  OWNER_IDS: ["499447456678019072", "635889581887062076"], // Créateur du bot
  PREFIX: ".", // Prefix par defaut
  SUPPORT_SERVER: "https://discord.gg/qsnUGDSHGt", // Serveur d'Assistance
  PRESENCE: {
    ENABLED: true,
    STATUS: "online",
    TYPE: "STREAMING",
    MESSAGE: ".aide | En Maintenance",
  },
  DASHBOARD: {
    enabled: true,
    baseURL: "https://strawbot-production.up.railway.app:8080",
    failureURL: "https://strawbot-production.up.railway.app:8080",
    port: "8080",
  },
  INTERACTIONS: {
    SLASH: false,
    CONTEXT: false,
    GLOBAL: false,
    TEST_GUILD_ID: "xxxxxxxxxx",
  },
  XP_SYSTEM: {
    COOLDOWN: 5,
    DEFAULT_LVL_UP_MSG: "Bravo tu viens de monter aux **Niveau {l}**",
  },
  MISCELLANEOUS: {
    DAILY_COINS: 100,
  },
  ECONOMY: {
    CURRENCY: "❀",
    DAILY_COINS: 100,
    MIN_BEG_AMOUNT: 100,
    MAX_BEG_AMOUNT: 2500,
  },
  SUGGESTIONS: {
    ENABLED: true,
    EMOJI: {
      UP_VOTE: "⬆️",
      DOWN_VOTE: "⬇️",
    },
    DEFAULT_EMBED: "#febf4b",
    APPROVED_EMBED: "#00ff00",
    DENIED_EMBED: "#ff0000",
  },
  IMAGE: {
    BASE_API: "https://image-api.strangebot.xyz",
  },
  MUSIC: {
    IDLE_TIME: 60,
    MAX_SEARCH_RESULTS: 5,
    NODES: [
      {
        host: "ger.lavalink.mitask.tech",
        port: 2333,
        password: "lvserver",
        identifier: "German Link",
        retryDelay: 5000,
        secure: false,
      },
      {
        host: "usa.lavalink.mitask.tech",
        port: 2333,
        password: "lvserver",
        identifier: "USA Link",
        retryDelay: 5000,
        secure: false,
      },
    ],
  },
  /* Couleurs des embed */
  EMBED_COLORS: {
    BOT_EMBED: "#bef4e5",
    TRANSPARENT: "#bef4e5",
    SUCCESS: "#bef4e5",
    ERROR: "#bef4e5",
    WARNING: "#bef4e5",
    AUTOMOD: "#bef4e5",
    TICKET_CREATE: "#bef4e5",
    TICKET_CLOSE: "#bef4e5",
    TIMEOUT_LOG: "#bef4e5",
    UNTIMEOUT_LOG: "#bef4e5",
    KICK_LOG: "#bef4e5",
    SOFTBAN_LOG: "#bef4e5",
    BAN_LOG: "#bef4e5",
    VMUTE_LOG: "#bef4e5",
    VUNMUTE_LOG: "#bef4e5",
    DEAFEN_LOG: "#bef4e5",
    UNDEAFEN_LOG: "#bef4e5",
    DISCONNECT_LOG: "#bef4e5",
    MOVE_LOG: "#bef4e5",
    GIVEAWAYS: "#bef4e5",
  },
  /* Nombre maximal de clés pouvant être stockées */
  CACHE_SIZE: {
    GUILDS: 100,
    USERS: 1000,
    MEMBERS: 1000,
  },
  MESSAGES: {
    API_ERROR: "Erreur inattendue dans le backend ! Essayez à nouveau plus tard ou contactez le serveur d'assistance",
  },
};
