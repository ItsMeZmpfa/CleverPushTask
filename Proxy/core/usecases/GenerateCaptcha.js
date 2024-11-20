const CaptchaChallenge = require('../models/Captcha');
const CaptchaService = require('../../infrastructure/services/CaptchaService');


class GenerateCaptcha {
    constructor() {
        this.captchaChallenges = new Map();
    }

    execute(ip) {
        
        const captcha = CaptchaService.generateCaptcha();
        const challenge = new CaptchaChallenge(captcha.JPEGStream,captcha.value, Date.now());     
        this.captchaChallenges.set(ip, challenge);
        return challenge;
    }

    getChallenges() {
        return this.captchaChallenges;
    }
}

module.exports = new GenerateCaptcha();