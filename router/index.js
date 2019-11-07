var express = require("express")
var router = express.Router();
var db = require("../db")
var  art = require("art-template")


//注册
router.post("/reg", function (req, res) {
        // res.send('login!')
    /* 
    1.利用手机号去数据库进行查询，判断该用户是否注册过
    2.如果未注册，则提示用户注册
    3.注册则进行登录
    4.登录时还要判断用户名或密码是否正确
    */
  db.find("student", { username: req.body.username }, (err, data) => {
    if (err) throw err;
    else {
      if (data.length != 0) {
        // res.render("../public/deng.html", { list: data })
        res.send({
          status: 1,
          msg: "该用户已经存在"
        })
      }
      else if (data.length == 0) {
        //注册
        var info = {
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          phone: req.body.phone,
          createAt: new Date(),
          updateAt: new Date(),
          isDelete: 0
        }
        db.add("student", info, (err) => {
          if (err) throw err;
        //   db.find("user1", {},(err2,data2)=>{
        //     res.render("../public/deng.html", { list: data2 })
        //   })
          res.send({
            status: 2,
            msg: "注册成功"
          })
        })
      }
    }
  })
})

//登陆
router.post("/login", function (req, res) {
    // res.send('login!')
    /* 
    1.利用手机号去数据库进行查询，判断该用户是否注册过
    2.如果未注册，则提示用户注册
    3.注册则进行登录
    4.登录时还要判断用户名或密码是否正确
    */
//    console.log(req.body.username)
  db.find("student", { username: req.body.username }, (err, data) => {
    if (err) throw err;
    else {
      if (data.length == 0) {
        res.send({
          status: 0,
          msg: "该用户未注册"
        })
      }
      else {
        //登陆
        if (data[0].username == req.body.username && data[0].password == req.body.password) {
              db.find("user1", {},(err2,data2)=>{
                  if(err2) throw err2;
                res.render("../public/deng.html", { list: data2 })
              })
        //   res.send({
        //     status: 1,
        //     msg: "登录成功"
        //   })
        }
        else {
          res.send({
            status: 2,
            msg: "用户名或密码错误"
          })
        }
      }
    }
  })
})



//增加数据
// router.get("/add",function (req, res) {
//     db.find("user1", {},(err2,data2)=>{
//         if(err2) throw err2;
//       res.render("../public/deng.html", { list: data2 })
//     })
// })

router.post("/add",function (req, res) {
    var info = {
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        adress: req.body.adress,
        createAt: new Date(),
        updateAt: new Date(),
        isDelete: 0
      }
      db.add("user1", info, (err) => {
        if (err) throw err;
      db.find("user1", {},(err2,data2)=>{
        if(err2) throw err2;
        res.render("../public/deng.html", { list: data2 })
    })
      })
})
//查找
router.post("/find",function (req, res) {
    var info = {
        name: req.body.name,
        sex: req.body.sex,
        age: req.body.age,
        adress: req.body.adress,
        createAt: new Date(),
        updateAt: new Date(),
        isDelete: 0
      }
      db.add("user1", info, (err) => {
        if (err) throw err;
      db.find("user1", {},(err2,data2)=>{
        if(err2) throw err2;
        res.render("../public/deng.html", { list: data2 })
    })
      })
})

router.get("/del",(req,res)=>{
    db.del("user1",{name:req.query._id},(err)=>{
        if(err) throw err;
          db.find("user1", {},(err2,data2)=>{
           if(err2) throw err2;
            res.render("../public/deng.html", { list: data2 })
          })
    })
})
module.exports = router