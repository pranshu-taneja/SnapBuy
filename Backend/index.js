const express = require('express')
const app = express()
const port = 3000
const {dummy} = require('./middleware/dummy')


app.get('/', dummy, (req, res) => {
    const data = req.body.data;
    const num = data.num + 100;
    res.send(num);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))