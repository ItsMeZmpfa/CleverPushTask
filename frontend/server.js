const app = require('express')();
const cors = require('cors');
const dotenv = require('dotenv').config()

var whitelist = [process.env.BACKENDURL,process.env.BACKENDURL]
console.log(process.env.BACKENDURL)
var corsOptions = {
  origin: process.env.BACKENDURL,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use('/',async (req, res) => {
    try {
    //Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
    } catch (error) {
    
    }
  } );
 
app.listen(4000);