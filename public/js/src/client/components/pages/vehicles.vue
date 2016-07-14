<style>

.introduce {
    margin-top: 30px;
    width: 100%;
    text-align: center;
}

.introduce .info {
    text-align: left;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    width: 1170px;
    border: 1px solid #EAEAEA;
    margin-bottom: 20px;
}

.type {
    width: 100%;
    height: 90px;
}

.item-type {
    color: #b9916a;
    width: 50%;
    height: 90px;
    float: left;
    border: 2px solid transparent;
    border-radius: 3px;
    position: relative;
    text-align: center;
    margin-bottom: 10px;
}

.item-type:hover {
    border: 2px solid #b9916a;
}

.item-type-check {
    color: #FFFFFF;
    background-color: #b9916a;
    border: 2px solid #b9916a;
}

.item-type .color-check,
.item-type i {
    display: none;
}

.item-type-check .item-check,
.item-type-check i {
    display: block;
}

.item-type span {
    display: block;
}

.item-type .title {
    margin-top: 20px;
    position: relative;
    line-height: 34px;
    font-size: 28px;
}

.item-type i {
    position: absolute;
    right: -1px;
    bottom: 0px;
    color: #fff;
    font-size: 12px;
}

.item-type input {
    opacity: 0;
    position: absolute;
    top: 0px;
    display: block;
    height: 90px;
    width: 100%;
}

.item-type .color-check {
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #fd6947 #fd6947 transparent;
    height: 20px;
    width: 20px;
    box-sizing: border-box;
}

.brand {
    padding-top: 30px;
    height: 180px;
    background-color: #f8f7f5;
}

.swiper-container {
    width: 100%;
    height: 100px;
    margin: 10px auto;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}

.swiper-slide a {
    border: 1px solid transparent;
}

.swiper-slide a:hover {
    border: 1px solid #fd6947;
}

.swiper-button-left {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 110px;
    height: 100px;
    background-color: #f8f7f5;
    z-index: inherit;
}

.swiper-button-right {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 110px;
    height: 100px;
    background-color: #f8f7f5;
    z-index: inherit;
}

.swiper-button-next,
.swiper-button-prev {
    top: 30%;
    border-radius: 50px;
    background-color: white;
    border: 1px solid #777777;
    width: 80px;
    height: 80px;
}

.carlist {
    text-align: left;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
}

.description {
    border-top: 2px solid #BEBEBE;
    height: 300px;
    margin-bottom: 20px;
}

.description .picture {
    margin-top: 20px;
    float: left;
    width: 415px;
    height: 275px;
    border: 2px solid #b8916a;
}

.description .carinfo {
    margin-top: 20px;
    float: left;
    width: auto;
    height: 275px;
    margin-left: 30px;
}

.description .carinfo .name {
    font-size: 22px;
    line-height: 40px;
}

.description .carinfo .price {
    padding: 0px 10px;
    font-size: 22px;
    width: 680px;
    height: 50px;
    background-color: #F9F8F6;
}

.description .carinfo .price .money {
    font-size: 32px;
    color: #EF313E;
}

.carinfo .color {
    margin: 10px 0px 10px 0px;
    height: 120px;
    width: 100%;
}

.circle {
    border-radius: 50px;
    border: 1px solid #000000;
    width: 48px;
    height: 48px;
    margin: 10px auto 10px auto;
}

.color-type {
    width: 90px;
    height: 110px;
    float: left;
    border: 2px solid transparent;
    border-radius: 3px;
    margin-right: 15px;
    position: relative;
    text-align: center;
    margin-bottom: 10px;
}

.color-type:hover {
    border: 2px solid #BB9168;
}

.color-type-check {
    border: 2px solid #BB9168;
}

.color-type .color-check,
.color-type i {
    display: none;
}

.color-type-check .color-check,
.color-type-check i {
    display: block;
}

.color-type span {
    position: relative;
    line-height: 34px;
    font-size: 14px;
}

.color-type i {
    position: absolute;
    right: -1px;
    bottom: 0px;
    color: #fff;
    font-size: 12px;
}

.color-type input {
    opacity: 0;
    position: absolute;
    top: 0px;
    display: block;
    height: 110px;
    width: 100%;
}

.color-type .color-check {
    position: absolute;
    right: 0px;
    bottom: 0px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent #fd6947 #fd6947 transparent;
    height: 20px;
    width: 20px;
    box-sizing: border-box;
}

.carinfo .remark {
    font-size: 12px;
    line-height: 40px;
    margin: 20px 0px 0px 0px;
}

.pagebar {
    padding-left: 20px;
    padding-right: 20px;
}

.pagination {
    width: 100%;
    padding: 20px;
    background-color: #f9f8f6;
}

</style>

<template>

<div class="introduce">
    <div class="info">
        <div class="type">
            <div class="item-type" :class="{ 'item-type-check': item.type == 'present' }">
                <span class="title">现车</span>
                <span class="sub-title">Present car</span>
                <input type="radio" name="type" value="present" v-model="item.type" />
                <div class="item-check"></div>
            </div>
            <div class="item-type" :class="{ 'item-type-check': item.type == 'period' }">
                <span class="title">期车</span>
                <span class="sub-title">Period car</span>
                <input type="radio" name="type" value="period" v-model="item.type" />
                <div class="item-check"></div>
            </div>
        </div>
        <div class="brand">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_11.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_13.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_15.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_17.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_19.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_21.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_23.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_25.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_27.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_38.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_39.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_40.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_41.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_42.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_44.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_45.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_47.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_48.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_58.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_59.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_60.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_61.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_62.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_63.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_64.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_66.png"></a>
                    </div>
                    <div class="swiper-slide">
                        <a href=""><img src="/static/images/client/home_67.png"></a>
                    </div>
                </div>
                <!-- Add Arrows -->
                <div class="swiper-button-right">
                    <div class="swiper-button-next"></div>
                </div>
                <div class="swiper-button-left">
                    <div class="swiper-button-prev"></div>
                </div>
            </div>
        </div>
        <div class="carlist">
            <div class="description" v-for="car in cars">
                <div class="picture">
                    <img data-src="holder.js/140x140" class="img-rounded" data-holder-rendered="true" style="width: 411px; height: 271px;" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTU2ODdkM2I0MiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTY4N2QzYjQyIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=">
                </div>
                <div class="carinfo">
                    <div class="name">
                        <span>{{ car.name }}</span>
                    </div>
                    <div class="price">
                        <span><font class="money">{{ car.price.formatMoney(0, '&yen;') }}</font>元</span>
                    </div>
                    <div class="color">
                        <div class="color-group">
                            <div class="color-type" v-for="color in car.colors" :class="{ 'color-type-check': car.color == color.class }">
                                <div class="circle {{ color.class }}"></div>
                                <span>{{ color.name }}</span>
                                <input type="radio" name="type" value="{{ color.class }}" v-model="car.color" />
                                <div class="color-check"></div>
                                <i class="zmdi zmdi-check zmdi-hc-fw"></i>
                            </div>
                        </div>
                    </div>
                    <div class="remark">
                        <span>{{ car.remark }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="pagebar">
            <div class="pagination"></div>
        </div>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            item: {
                type: 'present'
            },
            cars: [{
                name: '16款探险者XLT 2.3T汽油四驱五门七座版',
                price: 4992334,
                color: 'black',
                remark: '2.3T 手自一体 精英版 EcoBoost2.3T 手自一体 风尚版 EcoBoost3.5T',
                colors: [{
                    name: '摩纳哥蓝',
                    class: 'darkblue'
                }, {
                    name: '安迪斯棕',
                    class: 'brown'
                }, {
                    name: '珍珠岩白',
                    class: 'white'
                }, {
                    name: '塞舌尔黒',
                    class: 'black'
                }]
            }, {
                name: '16款探险者XLT 2.3T汽油四驱五门七座版',
                price: 4992334,
                color: 'black',
                remark: '2.3T 手自一体 精英版 EcoBoost2.3T 手自一体 风尚版 EcoBoost3.5T',
                colors: [{
                    name: '摩纳哥蓝',
                    class: 'darkblue'
                }, {
                    name: '安迪斯棕',
                    class: 'brown'
                }, {
                    name: '珍珠岩白',
                    class: 'white'
                }, {
                    name: '塞舌尔黒',
                    class: 'black'
                }]
            }]
        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        var swiper = new Swiper('.swiper-container', {
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            width: 320
        });

        $(".pagination").paging(20, {
            perpage: 10,
            format: '[< ncnnn >]',
            onSelect: function(currentPage) {

            },
            onFormat: function(type) {
                switch (type) {
                    case 'block': // n and c
                        if (this.value == this.page) {
                            return '<li class="active"><a>' + this.value + '</a></li>';
                        } else {
                            return '<li><a>' + this.value + '</a></li>';
                        }
                    case 'next': // >
                        if (this.value == this.page) {
                            return '';
                        } else {
                            return '<li class="next"><a>></a></li>';
                        }
                    case 'prev': // <
                        if (this.value == this.page) {
                            return '';
                        } else {
                            return '<li class="previous"><a><</a></li>';
                        }
                    case 'first': // [
                        if (this.value == this.page) {
                            return '';
                        } else {
                            return '<li><a><<</a></li>';
                        }
                    case 'last': // ]
                        if (this.value == this.page) {
                            return '';
                        } else {
                            return '<li><a>>></a></li>';
                        }
                }
            }
        });
    }
}

</script>
