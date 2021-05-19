const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('自動デプロイだよ!!')
})
 
app.listen(80)