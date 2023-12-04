const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const forwarded = require('forwarded-for');

app.get('/', (req, res) => {
    const address = forwarded(req, req.headers);
    // res.json({ remoteAddress: address.ip, remotePort: req.socket.remotePort, timestamp: Date.now() })
    res.json({ remoteAddress: address.ip, remotePort: req.socket.remotePort, timestamp: Date.now() })
})

app.listen(port, () => {
    console.log(`Remote Port app listening on port ${port}`)
})
