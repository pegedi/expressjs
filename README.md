[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/pegedi/expressjs/tree/03-local-library)

# Local Library with express generator
MDN express-generator sample

Resources: 
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Tutorial_local_library_website
- github: https://github.com/mdn/express-locallibrary-tutorial
## Setup
    npx express-generator --view=pug myapp
    cd myapp
    npm install
    npm install dotenv --save
    npm install --save-dev nodemon
    npm install eslint --save-dev
    ./node_modules/.bin/eslint --init
    npm install mongoose
    npm install async

## clone repo
    git clone --branch 02-express-generator --single-branch https://github.com/pegedi/expressjs
    cd myapp && npm install
## checking actual ip address
To put on whitelist at mongodb.com atlas service:
    curl http://ifconfig.me/ip
More details: https://stackabuse.com/how-to-get-your-ip-address-on-linux/


## Running app
  - use `DEBUG=myapp:* npm start` - start node without restarting the server and serves  
  - or `DEBUG=myapp:* npx nodemon` - restarts node server when source file changes
