const express = require('express');
const rateLimiter = require('./middleware/rateLimiter');
const captchaRoutes = require('./routes/captcha');
const ProxyHandler = require('../infrastructure/proxy/httpProxy');
const GenerateCaptcha = require('../core/usecases/GenerateCaptcha');
const app = express();

// Set Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


// Routen
app.use('/captcha', captchaRoutes);

// Proxy-Middleware for RateLimiter
app.use(rateLimiter((req, res) => {
    //Return a handler
    //Generate Captcha Value and send result
    const captchaValue = GenerateCaptcha.execute(req.ip);
    res.status(200).json({
        captchaValue: captchaValue.value,
    });
}));

//Proxy Handler to Forward Request to Frontend
app.use((req, res) => ProxyHandler.forwardRequest(req, res));

module.exports = app;