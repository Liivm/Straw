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
    BOT_EMBED: "#ffc0c9",
    TRANSPARENT: "#ffc0c9",
    SUCCESS: "#ffc0c9",
    ERROR: "#ffc0c9",
    WARNING: "#ffc0c9",
    AUTOMOD: "#ffc0c9",
    TICKET_CREATE: "#ffc0c9",
    TICKET_CLOSE: "#ffc0c9",
    TIMEOUT_LOG: "#ffc0c9",
    UNTIMEOUT_LOG: "#ffc0c9",
    KICK_LOG: "#ffc0c9",
    SOFTBAN_LOG: "#ffc0c9",
    BAN_LOG: "#ffc0c9",
    VMUTE_LOG: "#ffc0c9",
    VUNMUTE_LOG: "#ffc0c9",
    DEAFEN_LOG: "#ffc0c9",
    UNDEAFEN_LOG: "#ffc0c9",
    DISCONNECT_LOG: "#ffc0c9",
    MOVE_LOG: "#ffc0c9",
    GIVEAWAYS: "#ffc0c9",
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
