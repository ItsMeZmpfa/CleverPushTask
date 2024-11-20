const { rateLimit } = require('express-rate-limit');
let postgresStores = require('@acpr/rate-limit-postgresql');
const dotenv = require('dotenv').config()

// Config file for Express-Rate-Limit Paket
const rateLimiter = (handler) =>
    rateLimit({
        skip:(req) => req.url === "/captcha" || req.url === "/captcha/generate-captcha" ||  req.url === "/captcha/validate-captcha"||  req.url === "/favicon.ico"  ,
        keyGenerator: (req) => req.ip, // Use the IP address as the key
        windowMs: 2 * 60 * 1000, // 2min Time Frame for how long the request is Valid
        limit: process.env.REQUEST_LIMIT, // Max Request Amount
        handler,
        store: new postgresStores.PostgresStore(
            {
                user: process.env.DATABASE_USER,
                password: process.env.DATABASE_PASSWORD,
                host: process.env.DATABASE_HOST,
                database: process.env.DATABASE,
                port: process.env.DATABASE_PORT,
            },
            'aggregated_store',
        ),
    });

module.exports = rateLimiter;