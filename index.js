const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('main の内容変えたら自動で deploy 出来るらしいのでテスト')
})
 
app.listen(80)
