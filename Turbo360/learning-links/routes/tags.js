const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const superagent = require('superagent')

router.get('/', (req, res) => {
  var url = req.query.url

  if (url === null) {
    res.json({
      confirmation: 'fail',
      message: 'missing url'
    })
    return
  }

  superagent
    .get(url)
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
      res.send(html)
    })

  // res.json({
  //   confirmation: "success",
  //   data: " this is the TAGS route"
  // })
})

module.exports = router