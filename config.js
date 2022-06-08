module.exports = {
  OWNER_IDS: ["499447456678019072", "635889581887062076"], // Créateur du bot
  PREFIX: ".", // Prefix par defaut
  SUPPORT_SERVER: "https://discord.gg/qsnUGDSHGt", // Serveur d'Assistance
  PRESENCE: {
    ENABLED: true,
    STATUS: "online",
    TYPE: "STREAMING",
    MESSAGE: ".aide | .gg/straw",
  },
  DASHBOARD: {
    enabled: true,
    baseURL: "https://straw-production.up.railway.app/",
    failureURL: "https://straw-production.up.railway.app/",
    port: "443",
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
    DEFAULT_EMBED: "#aff6e5",
    APPROVED_EMBED: "#aff6e5",
    DENIED_EMBED: "#aff6e5",
  },
  IMAGE: {
    BASE_API: "https://image-api.strangebot.xyz",
  },
  MUSIC: {
    IDLE_TIME: 60,
    MAX_SEARCH_RESULTS: 5,
    NODES: [
      {
        host: "lavalink.cloudblue.ml",
        port: 1555,
        password: "danbotbest",
        identifier: "German Link",
        retryDelay: 5000,
        secure: false,
      },
      {
        host: "lavalink.islantay.tk",
        port: 8880,
        password: "waifufufufu",
        identifier: "USA Link",
        retryDelay: 5000,
        secure: false,
      },
    ],
  },
  /* Couleurs des embed */
  EMBED_COLORS: {
    BOT_EMBED: "#aff6e5",
    TRANSPARENT: "#aff6e5",
    SUCCESS: "#aff6e5",
    ERROR: "#aff6e5",
    WARNING: "#aff6e5",
    AUTOMOD: "#aff6e5",
    TICKET_CREATE: "#aff6e5",
    TICKET_CLOSE: "#aff6e5",
    TIMEOUT_LOG: "#aff6e5",
    UNTIMEOUT_LOG: "#aff6e5",
    KICK_LOG: "#aff6e5",
    SOFTBAN_LOG: "#aff6e5",
    BAN_LOG: "#aff6e5",
    VMUTE_LOG: "#aff6e5",
    VUNMUTE_LOG: "#aff6e5",
    DEAFEN_LOG: "#aff6e5",
    UNDEAFEN_LOG: "#aff6e5",
    DISCONNECT_LOG: "#aff6e5",
    MOVE_LOG: "#aff6e5",
    GIVEAWAYS: "#aff6e5",
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
