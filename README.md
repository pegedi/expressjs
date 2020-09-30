[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/pegedi/expressjs/tree/expressjs02-generator)

# First sample using expressJS
Standard Express Hello World example

Resources: 
- https://expressjs.com/en/starter/hello-world.html
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction

## Setup
    npx express-generator --view=pug myapp
    cd myapp
    npm install
    npm install --save-dev nodemon
    npm install eslint --save-dev
    ./node_modules/.bin/eslint --init

## clone repo
    git clone --branch helloworld-express --single-branch https://github.com/pegedi/expressjs
    npm install
## Running app
  - use `DEBUG=myapp:* npm start` - start node without and serves the helloworld  
  - or `DEBUG=myapp:* npx nodemon` - restarts node server# HTML/CSS/Javascript learning topics using expressJS
default branch is for a blank expressJS template with nodescripts
