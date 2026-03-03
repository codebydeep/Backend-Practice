import express from 'express'

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({
        msg: "Badhai Ho, Server Chalu hai!"
    })
})

app.listen(port, () => {
    console.log(`Hello from Server!`);
})