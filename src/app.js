require('./routes')
const { restoreSessions } = require('./sessions')
const { routes } = require('./routes')
const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const { maxAttachmentSize } = require('./config')

// Initialize Express app
app.disable('x-powered-by')
app.use(cors({
  origin: 'http://localhost',
  credentials: true
}))
app.use(bodyParser.json({ limit: maxAttachmentSize + 1000000 }))
app.use(bodyParser.urlencoded({ limit: maxAttachmentSize + 1000000, extended: true }))
app.use('/', routes)

restoreSessions()

module.exports = app
