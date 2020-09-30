[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/pegedi/expressjs/tree/02-express-generator)

# First sample express-generator
Standard express-generator sample

Resources: 
- https://expressjs.com/en/starter/generator.HTML
## Setup
    npx express-generator --view=pug myapp
    cd myapp
    npm install
    npm install --save-dev nodemon
    npm install eslint --save-dev
    ./node_modules/.bin/eslint --init

## clone repo
    git clone --branch 02-express-generator --single-branch https://github.com/pegedi/expressjs
    cd myapp && npm install
    
## Running app
  - use `DEBUG=myapp:* npm start` - start node without restarting the server and serves  
  - or `DEBUG=myapp:* npx nodemon` - restarts node server when source file changes