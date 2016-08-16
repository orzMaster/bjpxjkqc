<style>

</style>

<template>
    <component :is="profile"></component>
    <component :is="setting"></component>
    <footer id="footer">
        Copyright &copy; 2015 Material Admin
        <ul class="f-menu" style="display: none">
            <li><a href="/">Home</a></li>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Reports</a></li>
            <li><a href="/">Support</a></li>
            <li><a href="/">Contact</a></li>
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