var shopCar = (function () {
    return {
        init: function (ele) {
            this.$ele = document.querySelector(ele);
            this.event();
            // this.getData();
            this.getShopList();



        },
        event: function () {
            var _this = this;
            this.$ele.oninput = function (e) {
                e = e || window.event;
                target = e.target || e.srcElement;
                if (target.className == 'shop-count') {
                    //获取商品总价
                    var _parent = target.parentNode.parentNode;
                    _parent.querySelector(".shop-total").innerHTML = target.value * _parent.querySelector(".price").innerHTML;

                }
            }
            this.$ele.onclick = function (e) {
                e = e || window.event;
                target = e.target || e.srcElement;
                if (target.className == "shop-btn-del btn") {
                    var data = JSON.parse(localStorage.shopList);
                    
                    target.parentNode.parentNode.remove();
                    var id = target.getAttribute("attr-id");
                    for (var i = 0; i < data.length; i++) {
                        if (id == data[i].id) {
                            data.splice(i, 1);
                            localStorage.shopList = JSON.stringify(data);
                            
                        }
                    }
                }
            }
            this.$ele.parentNode.lastElementChild.onclick=function(e){
                e = e || window.event;
                target = e.target || e.srcElement;
                if (target.className == "payshop") {
                    if(JSON.parse(localStorage.shopList).length>0){
                        document.querySelector("#keep").style.display="block";
                        target.parentNode.previousElementSibling.style.display="block";
                        var $imation=_this.$ele.querySelectorAll(".imation");
                        var count=0;
                        for(var i=0;i<$imation.length;i++){
                            var $shoptotal=$imation[i].querySelector(".shop-total");
                            $countspan=$shoptotal.querySelectorAll(".shop-total");
                            count=count+Number($shoptotal.innerHTML);   
                        }
                        target.parentNode.previousElementSibling.children[0].innerHTML=count+".00"; 
                    }else{
                        target.parentNode.previousElementSibling.style.display="block";
                        target.parentNode.previousElementSibling.innerHTML='<br/>您还没有选择商品，请先添加商品<br/><button class="cancle">返回</button>';
                    }
                    
                }   
                document.querySelector(".cancle").onclick=function(){
                    document.querySelector("#keep").style.display="none";
                    target.parentNode.previousElementSibling.style.display="none";
                }  
                
            }
                        
        


        },
        //获取商品信息
        getShopList: function () {
            var _this = this;

            var options = {
                data: {},
                success: function (data) {
                    console.log(data); //ajax返回的数据 
                    _this.shopList = data;
                    _this.getData();
                }
            }
            var shops = JSON.parse(localStorage.shopList || "[]");
            var ids = [];
            for (var i = 0; i < shops.length; i++) {
                ids.push(shops[i].id);
            }
            options.data.id = `[${ids}]`;
            if(shops.length>0){
                sendAjax("shopcar.php", options);
            }
        },
        // 获取本地的数据到购物车 
        getData: function () {
            this.carShoplist = JSON.parse(localStorage.shopList || "[]");
            for (var i = 0; i < this.carShoplist.length; i++) {
                this.carShoplist[i].count = Number(this.carShoplist[i].count);
            }
            console.log(this.carShoplist)
            this.insertData(this.carShoplist);

        },
        //把购物车数据添加到页面中，渲染进来，data是localstorage的内容 
        insertData: function (data) {
            var _this = this;
            console.log(data);//本地的存的id和count
            var arr = [];
            var arr2 = [];
            for (var i = 0; i < data.length; i++) {
                //通过id去数据库拿到商品
                var shop;
                for (var j = 0; j < _this.shopList.length; j++) {
                    if (_this.shopList[j][0] == data[i].id) {
                        shop = _this.shopList[j];
                        break;
                    }
                }
                console.log(shop)
                arr.push(`<div class="shopli">
                                <div class="shopimg"><img src="${shop[3]}" alt=""></div>
                                <div class="imation">
                                    <h1>商品名称：<span class="span1 shop-name">${shop[1]}</span></h1>
                                    <h1>商品价格：￥<span class="span2 price">${shop[2]}</span></h1>
                                    <h1>商品数量： <input type="number" class="shop-count" value="${data[i].count}"></h1>
                                    <h1>商品总价：￥<span class="span2 shop-total">${shop[2] * data[i].count}</span></h1>
                                    <button class="shop-btn-del btn" attr-id="${data[i].id}">删除</button><br /><br />
                                </div>
                        </div>`);
                arr2.push(data[i].id);

            }
            console.log(arr2);
            this.$ele.innerHTML = arr.join("");
            var $inpcount = document.querySelectorAll(".shop-count");
            var parent = $inpcount[0].parentNode.parentNode.parentNode.parentNode
            parent.addEventListener("input", function () {
                var data= JSON.parse(localStorage.shopList);
                for (var i = 0; i < data.length; i++) {
                    console.log(target.value,data);
                    data[i].count = $inpcount[i].value;
                }
                localStorage.shopList = JSON.stringify(data);
            }, false)


        }
    }
}())