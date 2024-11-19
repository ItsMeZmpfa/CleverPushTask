const express = require('express');
const { rateLimit } = require('express-rate-limit');
const router = express.Router();
const GenerateCaptcha = require('../../core/usecases/GenerateCaptcha');
const ValidateCaptcha = require('../../core/usecases/ValidateCaptcha');
const db = require('../../infrastructure/services/DatabasePostgres');

const validateCaptchaInstance = new ValidateCaptcha(GenerateCaptcha);

//Route to Validate Captcha
router.post('/validate-captcha', express.json(), (req, res) => {
    const { ip } = req;
    const { answer } = req.body;

    const isValid = validateCaptchaInstance.execute(ip, answer);
    if (isValid) {
        db.updateRateLimitToZero(req,res);
        return res.status(200).json({ message: 'Captcha validated successfully' });
    }
    return res.status(400).json({ message: 'Invalid captcha' });
});

//Route to Generate Captcha
router.get('/generate-captcha', (req, res) => {
    const captchaValue = GenerateCaptcha.execute(req.ip);
    res.status(200).json({ captchaValue: captchaValue });
});

module.exports = router;