<style>

.home {
    width: 100%;
    text-align: center;
}

.home .banner {
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
    background: url("/static/images/client/home_01.png") no-repeat;
    width: 100%;
    max-width: 1600px;
    height: 872px;
    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
}

.home .introduce {
    margin-left: auto;
    margin-right: auto;
    background: url("/static/images/client/home_03.png") no-repeat;
    width: 100%;
    max-width: 1600px;
    height: 688px;
    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
}

.home .advantage {
    margin-left: auto;
    margin-right: auto;
    background: url("/static/images/client/home_05.png") no-repeat;
    width: 100%;
    max-width: 1600px;
    height: 953px;
    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
}

.home .style {
    margin-left: auto;
    margin-right: auto;
    background: url("/static/images/client/home_07.png") no-repeat;
    width: 100%;
    max-width: 1600px;
    height: 683px;
    filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale')";
    -moz-background-size: 100% 100%;
    background-size: 100% 100%;
}

.home .cooperation {
    background-color: #F9F9F9;
    height: auto;
    text-align: center;
}

.home .cooperation .title {
    line-height: 160px;
    font-size: 36px;
}

.home .cooperation ul {
    margin-left: auto;
    margin-right: auto;
    width: 1170px;
    height: 440px;
    list-style: none;
}

.home .cooperation ul > li {
    float: left;
    width: 100px;
    height: 100px;
    background-color: #FFFFFF;
    text-align: center;
    margin: 10px;
}

.home .cooperation ul > li {
    border: 1px solid transparent;
}

.home .cooperation ul > li:hover {
    border: 1px solid #fd6947;
}

</style>

<template>

<div class="home">
    <div class="banner">

    </div>
    <div class="introduce">

    </div>
    <div class="advantage">

    </div>
    <div class="style">

    </div>
    <div class="cooperation">
        <span class="title">合作品牌</span>
        <ul>
            <li v-for="brand in brands">
                <a :href="brand.url" target="_black" :alt="brand.name"><img :src="brand.src"></a>
            </li>
        </ul>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            brands: []
        }
    },
    methods: {
        loadBrand: function() {
            var self = this
            self.$http.post('api/brand/list', {}).then((response) => {
                self.$set('brands', response.data)
            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this
        self.loadBrand();
    }
}

</script>
