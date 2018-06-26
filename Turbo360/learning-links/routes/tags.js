const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const superagent = require('superagent')
const scrape = require('../utils/scraper')

router.get('/', (req, res) => {
  var url = req.query.url
  
  if (url === null) {
    res.json({
      confirmation: 'fail',
      message: 'missing url'
    })
    return
  }
  
  
  res.send({'TAGS URL': url})
})

module.exports = router