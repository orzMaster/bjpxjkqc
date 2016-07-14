<style>

.car {
    margin-top: 30px;
    width: 100%;
    text-align: center;
}

.car .title {
    font-size: 22px;
    border-bottom: 2px solid #BEBEBE;
    line-height: 60px;
}

.car .title span {
    margin-left: 10px;
}

.car .content {
    font-size: 22px;
    color: #E38386;
    line-height: 60px;
}

.car .triangle {
    font-size: 28px;
    color: #E9AE2B;
}

.car .separate {
    margin-top: 18px;
    float: left;
    height: 24px;
    width: 0px;
    border-radius: 5px;
    border: 3px solid #B78B60;
}

.car .list {
    text-align: left;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    width: 1170px;
    border: 1px solid #EAEAEA;
    height: 1040px;
    margin-bottom: 20px;
}

.information {
    text-align: left;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    width: 1170px;
    border: 1px solid #EAEAEA;
    margin-bottom: 20px;
    padding: 20px;
}

.description {
    height: 300px;
}

.description .picture {
    margin-top: 20px;
    float: left;
    width: 415px;
    height: 275px;
}

.description .info {
    float: left;
    width: auto;
    height: 275px;
    margin-left: 30px;
}

.description .info .name {
    font-size: 22px;
    line-height: 40px;
}

.description .info .price {
    padding: 0px 10px;
    font-size: 22px;
    width: 680px;
    height: 50px;
    background-color: #F9F8F6;
}

.description .info .price .money {
    font-size: 32px;
    color: #EF313E;
}

.info .color {
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

.info .remark {
    font-size: 12px;
    line-height: 40px;
    margin: 20px 0px 0px 0px;
}

.configuration {}

.configuration .table {
    table-layout: fixed;
}

.configuration .table .thead .td {
    background-color: #f5f5f5;
}

.pictures {}

.pictures .carousel-control {
    position: absolute;
    top: 40%;
    width: 40px;
    height: 40px;
    margin-top: -20px;
    font-size: 60px;
    font-weight: 100;
    line-height: 30px;
    color: #fff;
    text-align: center;
    background: #222;
    border: 3px solid #fff;
    -webkit-border-radius: 23px;
    -moz-border-radius: 23px;
    border-radius: 23px;
    opacity: .5;
    filter: alpha(opacity=50);
}

.promise {}

</style>

<template>

<div class="car">
    <div class="information">
        <div class="description">
            <div class="picture">
                <img data-src="holder.js/140x140" class="img-rounded" data-holder-rendered="true" style="width: 415px; height: 275px;" alt="140x140" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTU2ODdkM2I0MiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTY4N2QzYjQyIj48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4=">
            </div>
            <div class="info">
                <div class="name">
                    <span>{{ item.name }}</span>
                </div>
                <div class="price">
                    <span>平行进口车价: <font class="money">{{ item.price.formatMoney(0, '&yen;') }}</font>元</span>
                </div>
                <div class="color">
                    <div class="color-group">
                        <div class="color-type" v-for="color in item.colors" :class="{ 'color-type-check': item.color == color.class }">
                            <div class="circle {{ color.class }}"></div>
                            <span>{{ color.name }}</span>
                            <input type="radio" name="type" value="{{ color.class }}" v-model="item.color" />
                            <div class="color-check"></div>
                            <i class="zmdi zmdi-check zmdi-hc-fw"></i>
                        </div>
                    </div>
                </div>
                <div class="remark">
                    <span>{{ item.remark }}</span>
                </div>
            </div>
        </div>
        <div class="configuration">
            <div class="title">
                <div class="separate"></div>
                <span>参数配置</span>
            </div>
            <div>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <td colspan="4">基本信息</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>发动机</td>
                            <td>L型/203kW</td>
                            <td>变速箱</td>
                            <td>手自一体</td>
                        </tr>
                        <tr>
                            <td>排量</td>
                            <td>2.3L</td>
                            <td>环保标准</td>
                            <td>国5, 京5</td>
                        </tr>
                        <tr>
                            <td>燃油</td>
                            <td>汽油93号</td>
                            <td>综合工况油耗</td>
                            <td>L/100km</td>
                        </tr>
                        <tr>
                            <td>车门数</td>
                            <td>5</td>
                            <td>座位数(座)</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>车身型式</td>
                            <td>两厢</td>
                            <td>长x宽x高</td>
                            <td>5037x2005x1816</td>
                        </tr>
                        <tr>
                            <td>轴距(mm)</td>
                            <td>2860</td>
                            <td>整备质量(Kg)</td>
                            <td>2118</td>
                        </tr>
                        <tr>
                            <td>邮箱容积(L)</td>
                            <td>70</td>
                            <td>行李箱容积(L)</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>保修政策</td>
                            <td>三年或10万公里</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <td colspan="4">扩展信息</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>进气型式</td>
                            <td>增压</td>
                            <td>最大马力(Ps)</td>
                            <td>276</td>
                        </tr>
                        <tr>
                            <td>最大功率(kw)</td>
                            <td>203</td>
                            <td>最大功率转速(rpm)</td>
                            <td>5500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="pictures">
            <div class="title">
                <div class="separate"></div>
                <span>实拍图片</span>
            </div>
            <div>
                <div id="carousel-example-generic" class="carousel slide">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img style="width: 1200px; height: 600px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTU2ODE0YmFhOSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTY4MTRiYWE5Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
                            alt="First slide">
                        </div>
                        <div class="item">
                            <img style="width: 1200px; height: 600px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTU2ODE0YmFhOSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTY4MTRiYWE5Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
                            alt="First slide">
                        </div>
                        <div class="item">
                            <img style="width: 1200px; height: 600px;" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgdmlld0JveD0iMCAwIDE0MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzE0MHgxNDAKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNTU2ODE0YmFhOSB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE1NTY4MTRiYWE5Ij48cmVjdCB3aWR0aD0iMTQwIiBoZWlnaHQ9IjE0MCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjQ0LjA1NDY4NzUiIHk9Ijc0LjUiPjE0MHgxNDA8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
                            alt="First slide">
                        </div>
                    </div>
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="promise">
            <div class="title">
                <div class="separate"></div>
                <span>郑重承诺</span>
            </div>
            <div class="content">
                <span class="triangle"><i class="zmdi zmdi-alert-triangle zmdi-hc-fw"></i></span>
                <span>所有车辆正规进口，手续齐全，上牌无忧。支付定金有保障，滚雷进口车担保资金安全，按时交车。</span>
            </div>
        </div>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            item: {
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
            },
        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        $('#carousel-example-generic').carousel({
            interval: 5000
        });
    }
}

</script>
