const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'guildhub')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'guildhub', 'index.html'))
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'guildhub', '404.html'))
})

app.listen(PORT, () => {
  console.log(`Sunucu aktif: http://localhost:${PORT}`)
})
