const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public/page'));
app.use('/css', express.static('node_modules/bootstrap/dist/css'));

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
});
