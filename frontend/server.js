const app = require('express')();


app.use('/*', async (req, res) => {
    try {
    //Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
    } catch (error) {
    
    }
  } );
 
app.listen(4000);