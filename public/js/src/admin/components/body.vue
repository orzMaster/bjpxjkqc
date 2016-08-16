<style>

</style>

<template>
    <section id="main">
        <component :is="sidebar"></component>

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
