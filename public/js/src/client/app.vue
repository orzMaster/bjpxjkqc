<style>

</style>

<template>
    <div class="main">
        <component :is="head"></component>
        <component :is="body"></component>
        <component :is="foot"></component>
    </div>
</template>

<script>

module.exports = {
    data: function() {
        return {
            head: 'head',
            body: 'body',
            foot: 'foot'
        }
    },
    components: {
        head: require('./components/head.vue'),
        body: require('./components/body.vue'),
        foot: require('./components/foot.vue')
    },
    ready: function() {

    }
}

</script>
