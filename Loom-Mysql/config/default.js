const config = {
  email: {
    domain: 'mail.mousebelt.com',
    mailgun: {
      public: 'Input public key',
      private: 'Input private key',
    },
    masterEmail: 'galen@mousebelt.com',
    from: {
      general: 'hello@mousebelt.com',
    },
    template: {
      folder: 'default',
    }
  },
  project: 'Stardust Loom Explorer',

  RESET_PASSWORD_URL: 'http://localhost:3000/resetPassword',
  RESET_PASSWORD_EXPIRE_MINS: 10, // minutes
  BACKEND_URL: 'http://localhost:3000',

  CRON_TIME_INTERVAL: 200,	// if we decrease this to 100ms, cronservice has trouble after some time.
  CHECK_PARALLEL_BLOCKS: 10, // thread count for parallel block processing
  TICKER_BLOCK: 50,
  CRON_SYNCING_MINUTES: 30, // minutes,
};

module.exports = config;
