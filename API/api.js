const express = require('express')
const app = express()
////const bodyParser = require("bodyparser")

//app.use(bodyParser.urlencoded({extended:false}))
//app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    age : body
  })
});

app.post('', (req, res) => {
  res.send('Button pressed')

})
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
