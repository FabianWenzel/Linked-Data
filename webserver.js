/**
 * Created by fuexle on 05.10.2016.
 * Source; https://blog.risingstack.com/your-first-node-js-http-server
 */
const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
    response.send('Hello from Express!')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
