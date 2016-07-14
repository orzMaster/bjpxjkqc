<style>



</style>

<template>

<li class="dropdown">
    <a data-toggle="dropdown" href="index.html"><i class="him-icon zmdi zmdi-more-vert"></i></a>
    <ul class="dropdown-menu dm-icon pull-right">
        <li class="skin-switch hidden-xs">
            <span class="ss-skin bgm-lightblue" data-ma-action="change-skin" data-ma-skin="lightblue"></span>
            <span class="ss-skin bgm-bluegray" data-ma-action="change-skin" data-ma-skin="bluegray"></span>
            <span class="ss-skin bgm-cyan" data-ma-action="change-skin" data-ma-skin="cyan"></span>
            <span class="ss-skin bgm-teal" data-ma-action="change-skin" data-ma-skin="teal"></span>
            <span class="ss-skin bgm-orange" data-ma-action="change-skin" data-ma-skin="orange"></span>
            <span class="ss-skin bgm-blue" data-ma-action="change-skin" data-sma-kin="blue"></span>
        </li>
        <li class="divider hidden-xs"></li>
        <li class="hidden-xs">
            <a data-ma-action="fullscreen" href="index.html"><i class="zmdi zmdi-fullscreen"></i> Toggle Fullscreen</a>
        </li>
        <li>
            <a data-ma-action="clear-localstorage" href="index.html"><i class="zmdi zmdi-delete"></i> Clear Local Storage</a>
        </li>
        <li>
            <a href="index.html"><i class="zmdi zmdi-face"></i> Privacy Settings</a>
        </li>
        <li>
            <a href="index.html"><i class="zmdi zmdi-settings"></i> Other Settings</a>
        </li>
    </ul>
</li>

</template>

<script>

module.exports = {
    data: function() {
        return {

        }
    },
    components: {

    },
    ready: function() {

    }
}

</script>
