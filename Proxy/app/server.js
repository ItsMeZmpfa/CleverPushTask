const express = require('express');
const rateLimiter = require('./middleware/rateLimiter');
const captchaRoutes = require('./routes/captcha');
const ProxyHandler = require('../infrastructure/proxy/httpProxy');
const GenerateCaptcha = require('../core/usecases/GenerateCaptcha');
const app = express();

// Set Engine
app.set('view engine', 'ejs');

// Routen
app.use('/captcha', captchaRoutes);

// Proxy-Middleware for RateLimiter
app.use(rateLimiter((req, res,next) => {
    //redirect To Captcha Page
    res.redirect("captcha/generate-captcha");
}));

//Proxy Handler to Forward Request to Frontend
app.use((req, res) => ProxyHandler.forwardRequest(req, res));

module.exports = app;