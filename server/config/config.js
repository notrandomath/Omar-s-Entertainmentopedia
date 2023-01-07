module.exports = {
    "development": {
      "username": "root",
      "password": "{,i}Y4CEczXn{fXnjI<.",
      "database": "OmarsEntertainmentopediaDB",
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": "omars_entertainmentopedia_db",
      "host": process.env.DB_HOST,
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": "omars_entertainmentopedia_db",
      "host": process.env.DB_HOST,
      "dialect": "mysql"
    }
}