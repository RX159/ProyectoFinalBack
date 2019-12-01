const mongoose = require('mongoose')

// revisa tu connectionURL aqui :-)
var curl = process.env.CURL || require('../config.js').connectionURL

mongoose.connect( curl, {
  useNewUrlParser: true,
  useCreateIndex: true
})
