const Captcha = require('captcha-generator-alphanumeric').default;

class CaptchaService {
    static generateCaptcha() {
        return new Captcha();
    }
}

module.exports = CaptchaService;