import express from 'express'
import cookies from 'cookie-parser'

let app = express()

app.use(cookies())

app.use((req, res, next) => {
  res.cookie('foo', 'foo', {
    secure: true,
    domain: 'localhost',
    sameSite: 'none'
  })

  next()
})

app.use((req, res, next) => {
  res.cookie('bar', 'bar', {
    secure: true,
    domain: 'localhost',
    sameSite: 'none'
  })

  next()
})

app.get('*', (r, res) => {
  res.send('<h1>yo</h1>').set('Content-Type', 'text/html')
})

app.listen(42069)
