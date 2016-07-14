<style>



</style>

<template>

<ul class="tab-nav tn-justified" role="tablist">
    <li role="presentation" class="active"><a href="index.html#friends" aria-controls="friends" role="tab" data-toggle="tab">Friends</a></li>
    <li role="presentation"><a href="index.html#online" aria-controls="online" role="tab" data-toggle="tab">Online Now</a></li>
</ul>

<div class="chat-search">
    <div class="fg-line">
        <input type="text" class="form-control" placeholder="查找">
        <i class="zmdi zmdi-search"></i>
    </div>
</div>

<div class="tab-content">
    <div role="tabpanel" class="tab-pane fade active in" id="friends">
        <div class="list-group">
            <a class="list-group-item media" href="index.html">
                <div class="pull-left p-relative">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/2.jpg" alt="">
                    <i class="chat-status-busy"></i>
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Jonathan Morris</div>
                    <small class="lgi-text">Available</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/1.jpg" alt="">
                </div>
                <div class="media-body">
                    <div class="lgi-heading">David Belle</div>
                    <small class="lgi-text">Last seen 3 hours ago</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left p-relative">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/3.jpg" alt="">
                    <i class="chat-status-online"></i>
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Fredric Mitchell Jr.</div>
                    <small class="lgi-text">Availble</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left p-relative">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/4.jpg" alt="">
                    <i class="chat-status-online"></i>
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Glenn Jecobs</div>
                    <small class="lgi-text">Availble</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/5.jpg" alt="">
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Bill Phillips</div>
                    <small class="lgi-text">Last seen 3 days ago</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/6.jpg" alt="">
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Wendy Mitchell</div>
                    <small class="lgi-text">Last seen 2 minutes ago</small>
                </div>
            </a>
        </div>
    </div>
    <div role="tabpanel" class="tab-pane fade" id="online">
        <div class="list-group">
            <a class="list-group-item media" href="index.html">
                <div class="pull-left p-relative">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/2.jpg" alt="">
                    <i class="chat-status-busy"></i>
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Jonathan Morris</div>
                    <small class="lgi-text">Available</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/1.jpg" alt="">
                </div>
                <div class="media-body">
                    <div class="lgi-heading">David Belle</div>
                    <small class="lgi-text">Last seen 3 hours ago</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left p-relative">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/3.jpg" alt="">
                    <i class="chat-status-online"></i>
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Fredric Mitchell Jr.</div>
                    <small class="lgi-text">Availble</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left p-relative">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/4.jpg" alt="">
                    <i class="chat-status-online"></i>
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Glenn Jecobs</div>
                    <small class="lgi-text">Availble</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/5.jpg" alt="">
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Bill Phillips</div>
                    <small class="lgi-text">Last seen 3 days ago</small>
                </div>
            </a>

            <a class="list-group-item media" href="index.html">
                <div class="pull-left">
                    <img class="lgi-img" src="/static/images/admin/profile-pics/6.jpg" alt="">
                </div>
                <div class="media-body">
                    <div class="lgi-heading">Wendy Mitchell</div>
                    <small class="lgi-text">Last seen 2 minutes ago</small>
                </div>
            </a>
        </div>
    </div>
</div>

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
