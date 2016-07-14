<style>

</style>

<template>
    <header id="header" class="clearfix" data-ma-theme="blue">
        <ul class="h-inner">
            <li class="hi-trigger ma-trigger" data-ma-action="sidebar-open" data-ma-target="#sidebar">
                <div class="line-wrap">
                    <div class="line top"></div>
                    <div class="line center"></div>
                    <div class="line bottom"></div>
                </div>
            </li>

            <li class="hi-logo hidden-xs">
                <a href="index.html">Material Admin</a>
            </li>

            <li class="pull-right">
                <ul class="hi-menu">
                    <li data-ma-action="search-open">
                        <a href="index.html"><i class="him-icon zmdi zmdi-search"></i></a>
                    </li>
                    <component :is="messages"></component>
                    <component :is="notifications"></component>
                    <component :is="tasks"></component>
                    <component :is="settings"></component>
                    <li class="hidden-xs ma-trigger" data-ma-action="sidebar-open" data-ma-target="#chat">
                        <a href="index.html"><i class="him-icon zmdi zmdi-comment-alt-text"></i></a>
                    </li>
            </li>
        </ul>

        <!-- Top Search Content -->
        <div class="h-search-wrap">
            <div class="hsw-inner">
                <i class="hsw-close zmdi zmdi-arrow-left" data-ma-action="search-close"></i>
                <input type="text">
            </div>
        </div>
    </header>
</template>

<script>
module.exports = {
    data: function() {
        return {
            messages: 'messages',
            notifications: 'notifications',
            tasks: 'tasks',
            settings: 'settings'
        }
    },
    components: {
        messages: require('./common/messages.vue'),
        notifications: require('./common/notifications.vue'),
        tasks: require('./common/tasks.vue'),
        settings: require('./common/settings.vue')
    },
    ready: function() {
        //$('body').toggleClass('toggled sw-toggled');
    }
}
</script>
