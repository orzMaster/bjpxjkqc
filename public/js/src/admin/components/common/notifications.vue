<style>



</style>

<template>

<li class="dropdown">
    <a data-toggle="dropdown" href="index.html">
        <i class="him-icon zmdi zmdi-notifications"></i>
        <i class="him-counts">{{ notifications.data.length }}</i>
    </a>
    <div class="dropdown-menu dropdown-menu-lg pull-right">
        <div class="list-group him-notification">
            <div class="lg-header">
                {{ notifications.title }}
                <ul class="actions">
                    <li class="dropdown">
                        <a href="index.html" data-ma-action="clear-notification">
                            <i class="zmdi zmdi-check-all"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="lg-body">
                <a class="list-group-item media" href="index.html" v-for="notification in notifications.data">
                    <div class="pull-left">
                        <img class="lgi-img" :src="notification.picture" alt="">
                    </div>
                    <div class="media-body">
                        <div class="lgi-heading">{{ notification.title }}</div>
                        <small class="lgi-text">{{ notification.conent }}</small>
                    </div>
                </a>
            </div>
            <a class="view-more" href="index.html">View Previous</a>
        </div>
    </div>
</li>

</template>

<script>

module.exports = {
    data: function() {
        return {
            notifications: {
                title: 'Notification',
                data: [{
                    title: 'David Belle',
                    picture: '/static/images/admin/profile-pics/1.jpg',
                    conent: 'Cum sociis natoque penatibus et magnis dis parturient montes'
                }, {
                    title: 'Jonathan Morris',
                    picture: '/static/images/admin/profile-pics/2.jpg',
                    conent: 'Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel'
                }]
            }
        }
    },
    components: {

    },
    ready: function() {

    }
}

</script>
