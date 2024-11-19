
const { rateLimit } = require('express-rate-limit');

class ValidateCaptcha {
    constructor(generateCaptchaInstance) {
        //Get Current Captcha Data
        this.captchaChallenges = generateCaptchaInstance.getChallenges();
    }

    execute(ip, answer) {
        const challenge = this.captchaChallenges.get(ip);
        if (challenge && challenge.value === answer) {     
            this.captchaChallenges.delete(ip);
            return true;
        }
        return false;
    }
}

module.exports = ValidateCaptcha;