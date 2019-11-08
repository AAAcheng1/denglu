
//设置缓存
function setCookie(name,value,iDay){
	var date = new Date()
	date.setDate(date.getDate() + iDay);
    document.cookie	= name + "=" + value + "; expires =" +date;
}



//查找缓存
function getCookie(name){
	var arr1 = document.cookie.split("; ");
	for (var x = 0 ; x < arr1.length ; x++) {
		var arr2 = arr1[x].split("=");
		if(arr2[0] == name){
			return arr2[1]
		}
	}
}


//清除缓存
function removeCookie(name){
	setCookie(name,"",-1)
}
