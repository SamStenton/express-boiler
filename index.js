const express = require('express')
const app = express()
const port = env.NODE_PORT || 3000

app.get('/', (req, res) => res.send('Go build something amazing!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
