const crypto = require('crypto')

module.exports = (req, res) => {
  var email = req.query.email
  if (!email) {
    res.status(400).end('Send email as query param')
    return
  }
  email = email.trim().toLowerCase()
  const size = req.query.s || '128'
  const hash = crypto.createHash('md5').update(email).digest('hex')
  res.status(200).send(`https://www.gravatar.com/avatar/${hash}?s=${size}`)
};
