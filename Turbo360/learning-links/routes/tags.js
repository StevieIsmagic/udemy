const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const superagent = require('superagent')
const cheerio = require('cheerio')

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

      var tags = {}
      const html = response.text
      $ = cheerio.load(html)
      $('meta').each(function(i, meta){
        const attribs = meta.attribs
        if (attribs == null) return true

        const property = attribs.property
        if (property == null) return true
    
        if (property == 'og:title') {
          tags['title'] = attribs.content
        }
        if (property == 'og:description') {
          tags['description'] = attribs.content
        }
        if (property == 'og:image') {
          tags['image'] = attribs.content
        }   
      })   
      res.json({
        confirmation: 'success',
        tags: tags
      })
    
    })
})

module.exports = router