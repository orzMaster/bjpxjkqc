<style>

.buy {
    margin-top: 30px;
    width: 100%;
    text-align: center;
}

.buy .steps {
    text-align: left;
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    width: 1170px;
    border: 1px solid #EAEAEA;
    margin-bottom: 20px;
}

.buy .steps .step,
.info,
.list {
    margin-top: 20px;
}

.buy .steps .step .title {
    margin-left: 30px;
    color: #B78B60;
    font-size: 24px;
}

.buy .steps .step .sub-title {
    color: #C1C1C1;
    font-size: 20px;
}

.buy .steps .info {
    margin: 30px;
    padding: 20px;
    background-color: #F9F8F6;
}

.buy .steps .list {
  background: url('/static/images/client/buy_03.png');
  height: 509px;
}

</style>

<template>

<div class="buy">
    <div class="steps">
        <div class="step">
            <span class="title">购车流程</span>
            <span class="sub-title">Buy steps</span>
        </div>
        <div class="info">
            <span>1. 确认购车, 支付定金</span>
            <br>
            <span>通过北京平行进口车平台，选择海外真实车源，网上下单；销售顾问会第一时间和您联系，专人提供全程服务，确保整个购车流程顺利进行；
            <br><br>
            <span>2. 平台发车, 货运通关</span>
            <br>
            <span>确认收取定金后，北京平行进口车完成海外采购、物流运输、3C认证、报关报检等一系列工作，不远万里将全新好车送到客户指定的港口；</span>
            <br>
            <br>
            <span>3. 支付尾款, 提车回家</span>
            <br>
            <span>验车满意后，补齐车辆尾款，客户即可将新车提走。如果有需要，北京平行进口车也可提供国内物流服务，确保送车到家。</span>
        </div>
        <div class="list">

        </div>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {

        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {

    }
}

</script>
