module.exports = {
  "development": {
    "username": "shippable",
    "password": "test1234",
    "database": "testdb",
    "dialect": "postgres",
    "protocol": "postgres",
    "port": 5432,
    "host": "127.0.0.1"
  },
  test: {
    "username": "shippable",
    "password": "test1234",
    "database": "testdb",
    "dialect": "postgres",
    "protocol": "postgres",
    "port": 5432,
    "host": "127.0.0.1""
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    dialect: 'mysql',
  }
};
