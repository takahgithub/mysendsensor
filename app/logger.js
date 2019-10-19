var log4js = require('log4js');
var logger = exports = module.exports = {};
log4js.configure({
  appenders:{
    request:{
             "type": "file",
             "category": "request",
             "filename": "./logs/request.log",
             "pattern": "-yyyy-MM-dd"
            }
  },
  categories:{
    default:{
      appenders: ['request'],
      level: 'debug'
    }
  }
});

logger.request = log4js.getLogger('request');
