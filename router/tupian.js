
  //dest是指定上传的文件保存在那里。
 var objMulter = multer({dest: '../www/upload/'});
 
 var ser = express();
 
 //any() 表示接受任何文件， single(‘表单name’)接受一个指定formname文件。
 ser.use(objMulter.any());
 

 ser.post('/', function (req, res) {
     console.log(req.files)
     //新文件名
     // 这是重点，  新文件名 = path + 后缀名
     var newName = req.files[0].path + pathLib.parse(req.files[0].originalname).ext;
 
    // 使用fs模块的rename重命名方法重名字保存的文件，才能正常使用
     //rename('旧文件名，新文件， 回调 ')
   fs.rename(req.files[0].path, newName, function (err) {
         if(err) {
             res.send('上传失败')
         }else{
             res.send('上传成功')
         }
         res.end();
     })
 })
