var big = function () {
    return {
        init: function () {
            this.$draft = document.querySelector(".draft");
            this.$shopimg1 = document.querySelector(".shopimg1");
            console.log(this.$shopimg1);
            this.$shopimg2 = document.querySelector(".shopimg2");
            this.event();

        },
        event: function () {
            var _this = this;
            this.$shopimg1.onmouseenter = function (e) {
                e = e || window.event;
                _this.$draft.style.display = "block";
                _this.$shopimg2.style.display = "block";
                var _x = this.offsetLeft + _this.$draft.offsetWidth / 2+this.parentNode.offsetLeft;
                var _y = this.offsetTop + _this.$draft.offsetHeight / 2+this.parentNode.offsetTop +this.parentNode.parentNode.parentNode.offsetTop;
                var maxx = this.clientWidth - _this.$draft.offsetWidth;
                var maxy = this.clientHeight - _this.$draft.offsetHeight;
                console.log(_y,this.offsetTop,this.parentNode.offsetTop,this.parentNode.offsetParent)
                this.onmousemove = function (e) {
                    e = e || window.event;
                    var x = e.clientX - _x;
                    var y = e.clientY - _y;
                    if (x > maxx) {
                        x = maxx;
                    } else if (x < 0) {
                        x = 0;
                    }
                    if (y > maxy) {
                        y = maxy;
                    } else if (y < 0) {
                        y = 0;
                    }
                    _this.$draft.style.left = x + "px";
                    _this.$draft.style.top = y + "px";
                    var img = _this.$shopimg2.querySelector("img");
                    img.style.left = -3 * x + 'px';
                    img.style.top = -3 * y + 'px';
                    // console.log(img.style.left,img.style.top)

                }

            }
            _this.$shopimg1.onmouseleave = function () {
                _this.$draft.style.display = "none";
                _this.$shopimg2.style.display = "none";
            }

        }
    }

}

var shopList = (function () {
    return {
        init:function(ele){
            this.$ele=document.querySelector(ele);
            this.event();
            this.getData();

        },
        event:function(){
            var _this=this;
            this.$ele.addEventListener("click",function(e){
                e=e||window.event;
                var target=e.target||e.srcElement;
                if(target.nodeName=="A"&&target.className=="addcar"){
                    //获取商品的id；
                    var id=target.getAttribute("attr-id");
                    //获取商品数量
                    var count=target.parentNode.parentNode .querySelector(".shop-count").value;
                    console.log(id,count);
                    _this.addCar(id,count);  
                }
            },false)

        },
        // 获取ajax返回的数据，数据库的商品信息；
        getData:function(){
            var _this=this;
            var options={
                data:{id:location.search.split("=")[1]},
                success:function(data){
                    _this.insertData(data);
                    big().init();
                }
            }
            sendAjax("shop.php",options)
        },
        // 渲染数据库的商品信息
        insertData:function(data){
            console.log(data);
            var shop=(`<div class="shopimg shopimg1">
                            <img src="${data.adress}">
                            <div class="draft"></div>
                        </div>
                        <div class="shopimg shopimg2"><img src="${data.adress}"></div>
                        <div class="imation">
                            <h1>商品名称：<span class="span1">${data.name}</span></h1>
                            <h1 class="hprice">商品价格：<span>￥</span><span class="span2">${data.price}</span></h1>
                            <h1>商品数量： <input type="number" value="1" class="shop-count"></h1>
                            <div>
                                <a href="#" class="addcar" attr-id=${data.id}>加入购物车</a>
                                <a href="shopcar.html">查看购物车</a>
                            </div>
                        </div>`);
            this.$ele.innerHTML=shop;
        },
        // 商品加入到购物车的函数
        addCar:function(id,count){
            var shopList=localStorage.shopList||"[]";
            shopList=JSON.parse(shopList);//转换为对象形式
            // 判断数据中是否已经添加过商品，如果添加过直接累加，没添加过就添加新的数据
            for(var j=0;j<shopList.length;j++){
                if(shopList[j].id==id){
                    //证明商品已经存在
                    //注意count是字符串
                    shopList[j].count=Number(shopList[j].count)+Number(count);
                    break;
                }
            }
            if(j===shopList.length){
                //商品不存在,添加新数据
            shopList.push({id: id,count: count});
            }
            localStorage.shopList=JSON.stringify(shopList);

        }
       
    }
}())


shopList.init(".shop-con");