// Full Documentation - https://www.turbo360.co/docs
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})

const app = vertex.app() // initialize app

// import routes
const index = require('./routes/index')
const api = require('./routes/api')
const sms = require('./routes/sms')
const tags = require('./routes/tags')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes
app.use('/sms', sms) // messages returned from Twilio API call
app.use('/tags', tags) // scraper returns specified html tags


module.exports = app