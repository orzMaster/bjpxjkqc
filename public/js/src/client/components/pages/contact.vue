<style>
    .concat {
        width: 100%;
        text-align: center;
    }
    
    .banner {
        height: 300px;
    }
    
    .us {
        text-align: left;
        background-color: #ffffff;
        margin-left: auto;
        margin-right: auto;
        max-width: 1170px;
        border: 1px solid #EAEAEA;
        min-height: 800px;
        margin-bottom: 20px;
    }
    
    .us .about,
    .address {
        margin-top: 20px;
    }
    
    .us .title {
        margin-left: 30px;
        color: #B78B60;
        font-size: 24px;
    }
    
    .us .sub-title {
        color: #C1C1C1;
        font-size: 20px;
    }
    
    .us .info {
        margin: 30px;
        padding: 20px;
        background-color: #F9F8F6;
    }
    
    .us .allmap {
        margin: 30px;
        padding: 20px;
        min-height: 330px;
        overflow: hidden;
    }
    
    .us .allmap dl,
    dt,
    dd,
    ul,
    li {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    
    .us .allmap dt {
        font-size: 14px;
        font-family: "微软雅黑";
        font-weight: bold;
        border-bottom: 1px dotted #000;
        padding: 5px 0 5px 5px;
        margin: 5px 0;
    }
    
    .us .allmap dd {
        padding: 5px 0 0 5px;
    }
    
    .us .allmap li {
        line-height: 28px;
    }
</style>

<template>
    <div class="concat">
        <div class="banner hidden-xs">
            <img src="/static/images/client/contact.png"></img>
        </div>
        <div class="us">
            <div class="about">
                <span class="title">关于我们</span>
                <span class="sub-title">About us</span>
            </div>
            <div class="info">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京平行进口车是中国最大的平行进口车采销平台，隶属于北京泰昌裕达汽车贸易有限公司。2005年4月，北京平行进口车正式注册公司并申请独家商标，目前已在平行进口车领域建立起广泛的口碑。</span>
                <br>
                <br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;北京泰昌裕达创始人兼CEO陈守刚先生早在2005年就申请并注册了平行进口汽车商标。2015年，随着中国开放了平行进口车政策，出台了诸多鼓励平行进口车的行业利好。如今，公司旗下拥有一支经验丰富的国际化团队，汇聚了遍布全球主要汽车出口国家和地区的采购经理，设有覆盖各国的汽车采购网络，与各大汽车品牌如福特、丰田、奔驰、宝马、保时捷、路虎等在海外的经销商形成了多年的商业合作，能够在第一时间获取中国市场上最急需的车型。</span>
                <br>
                <br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在中国，北京平行进口汽车与各领域的客户建立了持续稳定的合作关系。能够为不同类型的经销商提供车辆选型、采购、仓储物流、金融、3C认证、报关报检等一站式服务。在客户体验方面，本公司运用互联网技术为客户创新性地提供海外仓储及物流直播，让经销商随时了解车辆状态，为预销售创造可能性。</span>
                <br>
                <br><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本公司致力于通过全球化采购最大限度优化中国平行进口车贸易流程，为中国客户与海外资源搭建起最便捷的桥梁。</span>
            </div>
            <div class="address">
                <span class="title">联系地址</span>
                <span class="sub-title">Contact address</span></div>
            <div id="allmap" class="allmap"></div>
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
            var map = new BMap.Map("allmap", {
                minZoom: 12,
                maxZoom: 16
            }); // 创建地图实例
            var point = new BMap.Point(116.4251770000, 40.1015190000); // 创建点坐标
            map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别

            var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                '地址：北京市昌平区新亚运村汽车交易市场A7区02号<br/>电话：(010)61753197<br/>简介：' +
                '</div>';

            //创建检索信息窗口对象
            var searchInfoWindow = null;
            searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
                title: "北京平行进口汽车", //标题
                width: 290, //宽度
                height: 105, //高度
                panel: "panel", //检索结果面板
                enableAutoPan: true, //自动平移
                searchTypes: [

                ]
            });
            var marker = new BMap.Marker(point); // 创建标注
            marker.addEventListener("click", function(e) {
                searchInfoWindow.open(marker); //开启信息窗口
            })
            map.addOverlay(marker); // 将标注添加到地图中
        }
    }
</script>