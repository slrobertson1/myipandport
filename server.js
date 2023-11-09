const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.json({ remoteAddress: req.socket.remoteAddress, remotePort: req.socket.remotePort, timestamp: Date.now() })
})

app.listen(port, () => {
    console.log(`Remote Port app listening on port ${port}`)
})
