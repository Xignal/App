Backend
=======

## Getting started

1. git clone https://github.com/Xignal/App.git
1. cd ./App/src
1. npm install sails
1. npm install sails-mongo 
1. create **config/local.js** with your secret DB settings (see example below)
1. sails lift 

```javascript
// contents of local.js. Add your own secrets. This file will not be committed.
module.exports.connections = {
    
  someMongodbServer: {
        adapter: 'sails-mongo',
        host: 'locahost',
        port: 10001,
        user: '',
        password: '',
        database: ''
    }    
};
```
