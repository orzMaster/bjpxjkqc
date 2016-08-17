<style>
    .navbar-header {
        height: 80px;
        min-height: 80px;
    }

    .navbar-toggle {
        margin-right: 22px;
        margin-top: 22px;
    }

    .navbar-nav > li {
        cursor: pointer;
        font-size: 16px;
        text-align: center;
        height: 77px;
        width: 80px;
        line-height: 80px;
        display: inline-block;
        margin: 0 12px;
        letter-spacing: 2px;
        vertical-align: middle;
        border-bottom: 3px solid transparent;
    }
    
    .navbar-nav > li:hover {
        border-bottom: 3px solid #FFFFFF;
        color: #FFFFFF;
    }

    .navbar-nav .active {
        border-bottom: 3px solid #FFFFFF;
        color: #FFFFFF;
    }

    .in .navbar-nav > li {
        height: 40px;
        width: 95%;
        line-height: 40px;
    }

    .in .navbar-nav > li:hover {
        border: 0;
        color: #FFFFFF;
    }

    .in .navbar-nav .active {
        border: 0;
        color: #FFFFFF;
    }
</style>

<template>
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" 
                data-target="#example-navbar-collapse">
                <span class="sr-only">切换导航</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#"><img src="/static/images/client/logo.png" alt=""> </a>
        </div>
        <div class="collapse navbar-collapse" id="example-navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li v-link="{ path: '/home', activeClass: 'active' }">首  页</li>
                <li v-link="{ path: '/vehicles', activeClass: 'active'  }">车型介绍</li>
                <li v-link="{ path: '/reserve', activeClass: 'active'  }">预约试驾</li>
                <li v-link="{ path: '/buy', activeClass: 'active'  }">购车流程</li>
                <li v-link="{ path: '/contact', activeClass: 'active'  }">关于我们</li>
            </ul>
        </div>
    </nav>
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