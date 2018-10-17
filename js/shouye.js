// var $top22 = document.querySelectorAll(".top22");
// for (var j = 0; j < $top22.length; j++) {
//     var $li = $top22[j].querySelectorAll("li");
//     for (var i = 0; i < $li.length; i++) {
//         $li[i].addEventListener("click", function () {
//             location.href = "shoplist.html";

//         }, false)
//     }
// }

//    this.$top22 = document.querySelectorAll(".top22");
//     for (var j = 0; j < this.$top22.length; j++) {
//         this.$li = this.$top22[j].querySelectorAll("li");
//         for (var i = 0; i < this.$li.length; i++) {
//             this.$li[i].addEventListener("click", function () {
//                 location.href = "shoplist.html";

//             }, false)
//         }
//     }

var shouye = (function () {
    return {
        init: function (ele) {
            this.$ele=document.querySelectorAll(ele);
            this.event();
            this.getData();
            

        },
        event: function () {
            var _this=this;
            for(var i=0;i<_this.$ele.length;i++){
                _this.$li=_this.$ele[i].querySelectorAll("li");
                for(var j=0;j<_this.$li.length;j++){
                    _this.$li[j].addEventListener("click",function(){
                        var id= this.getAttribute("attr-id");
                        // 点击的话就跳转到shoplist页面
                        location.href = "shoplist.html?id="+id;
                        console.log();
                    },false)
                }
            }

        },
        //获取数据库的数据
        getData: function () {
            var _this=this;
            var options={
                // data:{id:2},
                success:function(data){
                    _this.insertData(data);
                    console.log(data);
                }
            }
            sendAjax("php/shouyeshop.php",options)

        },
        // 渲染数据库的数据到首页中
        insertData: function (data) {
            var _this=this;
            console.log(data);
            for(var i=0;i<_this.$ele.length;i++){
                _this.$li=_this.$ele[i].querySelectorAll("li");
                var data1=data;
                for(var j=0;j<_this.$li.length;j++){
                    data=data[j];
                   
                    var shop=(`<div class="shopimg"><img src="${data[3]}"></div>
                        <div class="imation">
                            <h1>商品价格：￥<span class="span2">${data[2]}</span></h1>
                            <h1>商品名称：<span class="span1">${data[1]}</span></h1>
                        </div>`);
                    _this.$li[j].innerHTML=shop;
                   _this.$li[j].setAttribute("attr-id",data[0]);
                    data = data1;
                    
                }

            }    
            this.$ele.innerHTML=shop;
        }

    }
}())
shouye.init(".top22");

