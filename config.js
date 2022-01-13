const env = process.env;

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'localhost',
    user: env.DB_USER || 'gotit',
    password: env.DB_PASSWORD || 'gotit2021',
    database: env.DB_NAME || 'eleccionesjoven2021',
    multipleStatements: true
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;



