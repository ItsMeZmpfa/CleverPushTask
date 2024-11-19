// Model for Captcha
class CaptchaChallenge {
    constructor(captchaImage,value, timestamp) {
        this.imageCanvas = captchaImage;
        this.value = value;
        this.timestamp = timestamp;
    }
}

module.exports = CaptchaChallenge;