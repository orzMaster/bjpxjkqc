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
    top: 50%;
    width: 50px;
    height: 50px;
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
    border-radius: 50px;
    opacity: .5;
    filter: alpha(opacity=50);
}

.pictures .carousel-control .glyphicon-chevron-left {
    top: 17px;
    left: 17px;
    color: #777777;
}

.pictures .carousel-control .glyphicon-chevron-right {
    top: 17px;
    right: 17px;
    color: #777777;
}

.pictures .carousel-control.left {
    left: 20px;
    background-color: #FFFFFF;
}

.pictures .carousel-control.right {
    right: 20px;
    background-color: #FFFFFF;
}

.pictures .carousel-indicators li {
    margin-left: 5px;
}

.promise {}

</style>

<template>

<div class="car">
    <div class="information">
        <div class="description">
            <div class="picture">
                <img data-src="holder.js/140x140" class="img-rounded" data-holder-rendered="true" style="width: 410px; height: 270px;" alt="140x140" :src="vehicle.colors[vehicle.color].overall">
            </div>
            <div class="info">
                <div class="name">
                    <span>{{ vehicle.title }}</span>
                </div>
                <div class="price">
                    <span>平行进口车价: <font class="money">{{ vehicle.colors[vehicle.color].price.formatMoney(0, '&yen;') }}</font>元</span>
                </div>
                <div class="color">
                    <div class="color-group">
                        <div class="color-type" v-for="color in vehicle.colors" :class="{ 'color-type-check': vehicle.color == color.id }">
                            <div class="circle {{ color.class }}"></div>
                            <span>{{ color.name }}</span>
                            <input type="radio" name="type" value="{{ color.id }}" v-model="vehicle.color" />
                            <div class="color-check"></div>
                            <i class="zmdi zmdi-check zmdi-hc-fw"></i>
                        </div>
                    </div>
                </div>
                <div class="remark">
                    <span>{{ vehicle.remark }}</span>
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
                            <td>{{ vehicle.base.engine }}</td>
                            <td>变速箱</td>
                            <td>{{ vehicle.base.transmission }}</td>
                        </tr>
                        <tr>
                            <td>排量</td>
                            <td>{{ vehicle.base.displacement }}</td>
                            <td>环保标准</td>
                            <td>{{ vehicle.base.environmental_standards }}</td>
                        </tr>
                        <tr>
                            <td>燃油</td>
                            <td>{{ vehicle.base.fuel }}</td>
                            <td>综合工况油耗</td>
                            <td>{{ vehicle.base.fuel_consumption }}</td>
                        </tr>
                        <tr>
                            <td>车门数</td>
                            <td>{{ vehicle.base.door_number }}</td>
                            <td>座位数(座)</td>
                            <td>{{ vehicle.base.seats_number }}</td>
                        </tr>
                        <tr>
                            <td>车身型式</td>
                            <td>{{ vehicle.base.car_box }}</td>
                            <td>长x宽x高</td>
                            <td>{{ vehicle.base.wdh }}</td>
                        </tr>
                        <tr>
                            <td>轴距(mm)</td>
                            <td>{{ vehicle.base.wheelbase }}</td>
                            <td>整备质量(Kg)</td>
                            <td>{{ vehicle.base.weight }}</td>
                        </tr>
                        <tr>
                            <td>邮箱容积(L)</td>
                            <td>{{ vehicle.base.fuel_tank_capacity }}</td>
                            <td>行李箱容积(L)</td>
                            <td>{{ vehicle.base.cargo_volume }}</td>
                        </tr>
                        <tr>
                            <td>保修政策</td>
                            <td>{{ vehicle.base.warranty_policy }}</td>
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
                            <td>{{ vehicle.extend.air_intake }}</td>
                            <td>最大马力(Ps)</td>
                            <td>{{ vehicle.extend.max_horsepower }}</td>
                        </tr>
                        <tr>
                            <td>最大功率(kw)</td>
                            <td>{{ vehicle.extend.max_power }}</td>
                            <td>最大功率转速(rpm)</td>
                            <td>{{ vehicle.extend.max_power_speed }}</td>
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
                <br>
                <div id="carousel-example-generic" class="carousel slide">
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="{{ $index }}" :class="{ 'active': picture.active == 'true' }" v-for="picture in vehicle.pictures"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div :class="{ 'item': true, 'active': picture.active  == 'true' }" v-for="picture in vehicle.pictures">
                            <img style="width: 1200px; height: 600px;" :src="picture.src" :alt="picture.title">
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
            vehicle: {
                colors: [{
                    price: '',
                    overall: ''
                }],
                base: {},
                extend: {}
            }
        }
    },
    methods: {
        loadVehicle: function(id) {
            var self = this
            self.$http.post('api/vehicle/get', {
                vehicle_id: this.$route.query.id
            }).then((response) => {
                self.$set('vehicle', response.data)
                self.$nextTick(function() {
                    $('#carousel-example-generic').carousel({
                        interval: 5000
                    });
                })
            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this
        self.loadVehicle()
    }
}

</script>
