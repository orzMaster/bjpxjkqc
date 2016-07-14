<style>

</style>

<template>
    <component :is="profile"></component>
    <component :is="setting"></component>
    <footer id="footer">
        Copyright &copy; 2015 Material Admin

        <ul class="f-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="index.html">Dashboard</a></li>
            <li><a href="index.html">Reports</a></li>
            <li><a href="index.html">Support</a></li>
            <li><a href="index.html">Contact</a></li>
        </ul>
    </footer>
</template>

<script>
module.exports = {
    data: function() {
        return {
            profile: 'profile',
            setting: 'setting'
        }
    },
    components: {
        profile: require('./dialog/profile.vue'),
        setting: require('./dialog/setting.vue')
    },
    ready: function() {

    }
}
</script>