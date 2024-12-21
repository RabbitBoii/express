const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    let a = 0
    console.log("request reached")
    for (let i = 1; i <= 100; i++) {
        a = a + i;
    }
    console.log(a)
    res.send('Hello from vs code!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

