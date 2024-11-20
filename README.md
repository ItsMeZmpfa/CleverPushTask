# CleverPushTask

This project is solution to prevent DDos Attack.

## TECHSTACK
NodeJS
Postgres

## Configuration
Create a new .env file and place it in your root folder. This will be the file where you define the Secret Key

### Warning: ALWAYS SET YOUR SECRET KEY in the .env for security purpose

## Quick Start

Example .env File:
```

DATABASE="YOURDATABASE"
DATABASE_USER="YOURDATABASEUSER"
DATABASE_PASSWORD="YOURDATABASEPASSWORD"
DATABASE_HOST="YOURDATABASEIP"
DATABASE_PORT="YOURDATABASEPORT"

REQUEST_LIMIT="HOWMANYREQUESTALLOW" //2

SERVER_PORT="DEFINEASERVERPORT"
FRONTEND_URL="YOURFRONTENDURL"
```
Setup your DATABASE in my Case it was Postgres

Run on Frontend and Backend Folder
```
npm install
```


After that run on Frontend and Backend Folder

```
npm run dev
```

## How the Project works

The Client make a Request on Proxy.
The Proxy check if the Client has reach the Limit.
If the Limit is reach the Proxy sent a Captcha Value back to the Client.
The client have to validate the Captcha Value if not the client will stuck till the Captcha Value is validate.
After the validate the Client can forward request agian to Frontend

## Project Problem Solving

The main Problem to solve was how to keep track the rps on every giving Time.

## Libraries
-   @acpr/rate-limit-postgresql
-  captcha-generator-alphanumeric
-   ejs
-   express
-   express-rate-limit
-   http-proxy
-   dotenv