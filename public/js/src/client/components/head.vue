<style>

</style>

<template>
    <header class="common-header">
        <div class="container">
            <div class="pc-nav">
                <a class="logo" href=""> <img src="/static/images/client/logo.png" alt=""> </a>
            </div>
            <div class="right-col">
                <ul class="sub-nav">
                  <li v-link="{ path: '/home', activeClass: 'active' }">首  页</li>
                  <li v-link="{ path: '/vehicles', activeClass: 'active'  }">车型介绍</li>
                  <li v-link="{ path: '/reserve', activeClass: 'active'  }">预约试驾</li>
                  <li v-link="{ path: '/buy', activeClass: 'active'  }">购车流程</li>
                  <li v-link="{ path: '/contact', activeClass: 'active'  }">关于我们</li>
                </ul>
            </div>
        </div>
    </header>
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
