const httpProxy = require('http-proxy');
const dotenv = require('dotenv').config()
class ProxyHandler {
    constructor(target) {
        this.proxy = httpProxy.createProxyServer();
        this.target = target;
    }

    forwardRequest(req, res) {
        this.proxy.web(req, res, { target: this.target });
    }
}


module.exports = new ProxyHandler(process.env.FRONTEND_URL);