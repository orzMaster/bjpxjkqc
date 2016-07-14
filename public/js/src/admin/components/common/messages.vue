<style>



</style>

<template>

<li class="dropdown">
    <a data-toggle="dropdown" href="index.html">
        <i class="him-icon zmdi zmdi-email"></i>
        <i class="him-counts">{{ messages.data.length }}</i>
    </a>
    <div class="dropdown-menu dropdown-menu-lg pull-right">
        <div class="list-group">
            <div class="lg-header">
                {{ messages.title }}
            </div>
            <div class="lg-body">
                <a class="list-group-item media" href="index.html" v-for="message in messages.data">
                    <div class="pull-left">
                        <img class="lgi-img" :src="message.picture" alt="">
                    </div>
                    <div class="media-body">
                        <div class="lgi-heading">{{ message.title }}</div>
                        <small class="lgi-text">{{ message.conent }}</small>
                    </div>
                </a>
            </div>
            <a class="view-more" href="index.html">View All</a>
        </div>
    </div>
</li>

</template>

<script>

module.exports = {
    data: function() {
        return {
            messages: {
                title: 'Messages',
                data: [{
                    title: 'David Belle',
                    picture: '/static/images/admin/profile-pics/1.jpg',
                    conent: 'Cum sociis natoque penatibus et magnis dis parturient montes'
                }, {
                    title: 'Jonathan Morris',
                    picture: '/static/images/admin/profile-pics/2.jpg',
                    conent: 'Nunc quis diam diamurabitur at dolor elementum, dictum turpis vel'
                }, {
                    title: 'Fredric Mitchell Jr.',
                    picture: '/static/images/admin/profile-pics/3.jpg',
                    conent: 'Phasellus a ante et est ornare accumsan at vel magnauis blandit turpis at augue ultricies'
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
