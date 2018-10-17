
var $inp = document.querySelector("#inp");
var $btn = document.querySelector("#btn");
var $box = document.querySelector(".box");
var $ul = document.querySelector("ul");
$ul.style.display = "none";

$inp.oninput = function () {
    $ul.style.display = "block";
    var params = {
        wd: $inp.value,
        p: 3,
        cb: "BaiduSuggestion.callbacks.give1538218680896",
        t: "1538219767869",
        cb: "getdata"
    }
    jsonp("https://www.baidu.com/su", params)
}
function getdata(data) {
    var $ul = document.querySelector("ul");
    $ul.remove();
    console.log(data);
    var $ul = document.createElement("ul");
    for (var i in data) {
        for (var j = 0; j < data.s.length; j++) {
            var $li = document.createElement("li");
            var val = data.s[j];
            var $text = document.createTextNode(val);
            // console.log(val)
            $li.appendChild($text);
            $ul.appendChild($li);
        }

    }
    $box.appendChild($ul);

}
$box.onclick = function (e) {
    e = e || window.event;
    var target = e.target || e.srcElement;
    if (target.nodeName === "LI") {
        $inp.value = target.innerText;
    }
}
document.onclick = function () {
    //注意此处不能直接写成 $ul.style.display="none";因为53行已经删去了ul，这时需要重新获取
    document.querySelector("ul").style.display = "none";
}



