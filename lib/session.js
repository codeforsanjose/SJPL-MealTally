function getsession() {
  const session = require('express-session')
  const HALF_HOUR = 1000 * 60 * 30;
  const sessionConfigs = {
    genid: (req) => {
      return genuuid() // use UUIDs for session IDs
    },
    secret: 'keyboard cat',
    cookie: { maxAge: HALF_HOUR, sameSite: true },
    rolling: true,
    resave: false,
    saveUninitialized: false
  }

  if (process.env.NODE_ENV === 'redis_production') {

    const redis = require('redis');
    const RedisStore = require('connect-redis')(session);
    const redisClient = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_URL);

    const prodSessionConfigs = {
      ...sessionConfigs,
      store: new RedisStore({ client: redisClient }),
      name: 'connect.sid',
      cookie: { secure: true },
      secret: process.env.SESSION_SECRET,
      saveUninitialized: true
    };
    console.log("REDIS SESSION")
    return session(prodSessionConfigs)
  } else {
      console.log("LOCAL SESSION")
      return session(sessionConfigs)
  };
};

module.exports = getsession();