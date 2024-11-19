const app = require('./app/server');
const dotenv = require('dotenv').config()

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server is running on port \n' + process.env.SERVER_PORT);
});