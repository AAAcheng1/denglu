var express = require("express");
var path = require("path")
var app = express();
var cookieParser = require("cookie-parser")
var session = require("express-session")
//处理post请求
var bodyParser = require("body-parser")
//配置路由
var router = require("./router")



app.use(cookieParser())
//配置session
app.use(session({
    secret:"safe",
    name:"safe",
    cookie:{maxAge:900000,httpOnly:true},
    resave:true,
    saveUninitialized:true
}))

//配置模板引擎
app.engine("html",require("express-art-template"))
//处理json
app.use(bodyParser.json())
//处理字符串
app.use(bodyParser.urlencoded({ extended: false }))
//静态资源
var static = path.resolve(__dirname,"public")
app.use(express.static(static))


app.use(router)

app.listen(3000)