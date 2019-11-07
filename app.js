var express = require("express");
var path = require("path")
var app = express();

app.engine("html",require("express-art-template"))
//处理post请求
var bodyParser = require("body-parser")
//配置路由
var router = require("./router")
//处理json
app.use(bodyParser.json())
//处理字符串
app.use(bodyParser.urlencoded({ extended: false }))
//静态资源
var static = path.resolve(__dirname,"public")
app.use(express.static(static))
 app.use(router)
//解决跨域
router.all("*", (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Method", "get,patch,post,delete,put,option")
    next()
})

app.listen(3000)