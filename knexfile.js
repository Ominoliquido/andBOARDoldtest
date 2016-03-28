module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/album-demo'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
