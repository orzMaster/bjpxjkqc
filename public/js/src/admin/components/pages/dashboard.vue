<style>

</style>

<template>
    <div class="block-header">
        <h2>仪表板<small>说明:</small></h2>

        <ul class="actions">
            <li>
                <a href="index.html">
                    <i class="zmdi zmdi-trending-up"></i>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <i class="zmdi zmdi-check-all"></i>
                </a>
            </li>
            <li class="dropdown">
                <a href="index.html" data-toggle="dropdown">
                    <i class="zmdi zmdi-more-vert"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a href="index.html">Refresh</a>
                    </li>
                    <li>
                        <a href="index.html">Manage Widgets</a>
                    </li>
                    <li>
                        <a href="index.html">Widgets Settings</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="dash-widgets">
        <div class="row">
            <component :is="widget" v-for="widget in widgets"></component>
        </div>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {
            widgets: ['weather']
        }
    },
    components: {
        weather: require('../widgets/weather.vue')
    },
    ready: function() {
        //Welcome Message (not for login page)
        function notify(message, type){
            $.growl({
                message: message
            },{
                type: type,
                allow_dismiss: false,
                label: 'Cancel',
                className: 'btn-xs btn-inverse',
                placement: {
                    from: 'top',
                    align: 'right'
                },
                delay: 2500,
                animate: {
                        enter: 'animated bounceIn',
                        exit: 'animated bounceOut'
                },
                offset: {
                    x: 20,
                    y: 85
                }
            });
        };

        if (!$('.login-content')[0]) {
            notify('欢迎来到后台管理', 'inverse');
        }
    }
}
</script>
