// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
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

  var sms = {
    from: from,
    message: message
  }

  // create document in MongoDB
  turbo.create('sms', sms)
    .then(data => {
      res.json({
        confirmation: 'success',
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
