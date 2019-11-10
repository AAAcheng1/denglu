

//获取url地址栏的内容
//name = 

function getUrlParms(name){
    var re = new RegExp('(^|&)'+ name + "=([^&]*)(&|$)")
    var arr = window.location.search().substr(1).mach(re)
    if(arr == null){
         return ""
    }else{
         return arr[2]
    }
}