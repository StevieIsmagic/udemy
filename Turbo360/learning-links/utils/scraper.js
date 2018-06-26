const cheerio = require('cheerio')


module.exports = {

  scraper: function(html) {

    var tags = {}
    $ = cheerio.load(html)
    $('meta').each(function (i, meta) {
      const attribs = meta.attribs
      console.log("SCRAPER ATTRIBS", attribs)
      
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
    return tags
  }
}