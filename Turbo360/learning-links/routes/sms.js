// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const superagent = require('superagent')
const scrape = require('../utils/scraper')


router.get('/', (req, res) => {
  res.json({
    confirmation: "SMS success",
    data: " this is the SMS route"
  })
})

// receive texts from Twilio
router.post('/', (req, res) => {
  var body = req.body // data from Twilio
  var message = body['Body']
  if (message == null) {
    res.json({
      confirmation: "fail",
      message: err.message
    })
    return
  }

  var from = body['From'] // phone #
  if (from == null) {
    res.json({
      confirmation: "fail",
      message: err.message
    })
    return
  }
  // checks if response message is an http URL link
  if (message.indexOf('http') != -1 || message.indexOf('.co') != -1) {
    superagent
      .get(message)
      .query(null)
      .end((err, response) => {
        if (err) {
          res.json({
            confirmation: 'fail',
            message: err.message
          })
          return
        }

        const html = response.text
        var tags = scrape.scraper(html)

        console.log("SMS ROUTE TAGS AFTER SCRAPER", tags)

        // create document in LINK Model of MongoDB
        turbo.create('link', tags)
          .then(data => {
              res.json({
                confirmation: 'Confirm Link Document Success',
                data: data
              })
          })
          .catch(err => {
            res.json({
              confirmation: 'fail',
              message: err.message
            })
          })
      })
    return
  }

  var sms = {
    from: from,
    message: message
  }

  // create document in SMS Model of MongoDB
  turbo.create('sms', sms)
    .then(data => {
      res.json({
        confirmation: 'Confirm SMS Document Success',
        data: data
      })
    })
    .catch(err => {
      res.json({
        confirmation: 'fail',
        message: err.message
      })
    })
})


module.exports = router
