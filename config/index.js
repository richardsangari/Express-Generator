const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    sercviceName: process.env.SERVICE_NAME,
    mongoUrl: process.env.MONGO_URL,
};