# Koa Barebones Boilerplate
###### A starter/boilerplate server built on Koa 2

### Features
* ES7 async/await
* Koa 2 (HTTP Middleware) - http://koajs.com/
    * Koa Router - https://github.com/alexmingoia/koa-router/tree/master/
    * Koa Bodyparser

### Initial Setup
```
git pull https://github.com/zlshames/koa-barebones-boilerplate.git
cd koa-api-starter
cp .env.example .env                // Copy the environment file to be configured
npm install                         // Install dependencies
```

### Run the server
```
npm run server                      // Runs the server in development mode
npm run server:prod                 // Runs the server in prroduction mode
```
