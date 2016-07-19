<style>

</style>

<template>
    <section id="main">
        <aside id="sidebar" class="sidebar c-overflow">
            <component :is="sidebar"></component>
        </aside>

        <section id="content">
            <div class="container">
                <router-view></router-view>
            </div>
        </section>
    </section>
</template>

<script>
module.exports = {
    data: function() {
        return {
            sidebar: 'sidebar'
        }
    },
    components: {
        sidebar: require('./common/sidebar.vue')
    },
    ready: function() {

    }
}
</script>
