
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
                }
            }
            sendAjax("shop.php",options)
        },
        // 渲染数据库的商品信息
        insertData:function(data){
            console.log(data);
            var shop=(`<div class="shopimg"><img src="${data.adress}"></div>
                        <div class="imation">
                            <h1>商品名称：<span class="span1">${data.name}</span></h1>
                            <h1>商品价格：￥<span class="span2">${data.price}</span></h1>
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