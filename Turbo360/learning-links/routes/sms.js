// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({
  site_id: process.env.TURBO_APP_ID
})
const vertex = require('vertex360')({
  site_id: process.env.TURBO_APP_ID
})
const router = vertex.router()

router.get('/', (req, res) => {
  res.json({
    confirmation: "success",
    data: " this is the SMS route"
  })
})

// receive texts from Twilio
router.post('/', (req, res) => {
  var body = req.body // data from Twilio
  var message = body['Body']

  var from = body['From'] // phone #

})


module.exports = router
