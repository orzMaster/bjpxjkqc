<style>

.dropzone {
    min-height: 200px;
    border: 0px;
}

.dz-image {
    border: 1px solid #777777;
    border-radius: 10px;
}

</style>

<template>

<div class="block-header">
    <h2>{{ title }}<small>说明:</small></h2>

    <ul class="actions">
        <li>
            <a href="index.html">
                <i class="zmdi zmdi-trending-up"></i>
            </a>
        </li>
        <li>
            <a href="index.html">
                <i class="zmdi zmdi-check-all"></i>
            </a>
        </li>
        <li class="dropdown">
            <a href="index.html" data-toggle="dropdown">
                <i class="zmdi zmdi-more-vert"></i>
            </a>

            <ul class="dropdown-menu dropdown-menu-right">
                <li>
                    <a href="index.html">Refresh</a>
                </li>
                <li>
                    <a href="index.html">Manage Widgets</a>
                </li>
                <li>
                    <a href="index.html">Widgets Settings</a>
                </li>
            </ul>
        </li>
    </ul>
</div>

<div class="card">
    <div class="card-header">
        <h2>Sales Statistics <small>Vestibulum purus quam scelerisque, mollis nonummy metus</small></h2>

        <ul class="actions">
            <li>
                <a href="index.html">
                    <i class="zmdi zmdi-refresh-alt"></i>
                </a>
            </li>
            <li>
                <a href="index.html">
                    <i class="zmdi zmdi-download"></i>
                </a>
            </li>
            <li class="dropdown">
                <a href="index.html" data-toggle="dropdown">
                    <i class="zmdi zmdi-more-vert"></i>
                </a>

                <ul class="dropdown-menu dropdown-menu-right">
                    <li>
                        <a href="index.html">Change Date Range</a>
                    </li>
                    <li>
                        <a href="index.html">Change Graph Type</a>
                    </li>
                    <li>
                        <a href="index.html">Other Settings</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>

    <div class="card-body">
        <div class="dropzone"></div>
    </div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '记事本'
        }
    },
    methods: {
        post: function() {
            var self = this;
            var info = $('.wp-text').val()
            self.$http.post('api/notepad/info', {
                info: info
            }, function(data, status, request) {
                self.loadPostList();
            }).error(function(data, status, request) {

            })
        },
        formatDate: function(date) {
            return moment(date).format('YYYY-MM-DD HH:mm:ss')
        },
        loadPostList: function() {
            var self = this;
            self.$http.post('api/notepad/list', function(data, status, request) {
                self.$set('posts', data)
            }).error(function(data, status, request) {

            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this;
        //self.loadPostList();
        $(".dropzone").dropzone({
            url: "/api/upload",
            addRemoveLinks: true,
            maxFiles: 10,
            maxFilesize: 512,
            acceptedFiles: ".png,.jpg,.jpeg",
            dictDefaultMessage: "点击或拖拽图片到此区域",
            dictFallbackMessage: "Fallback。",
            dictInvalidInputType: "文件类型被拒绝。",
            dictFileTooBig: "文件大小过大。",
            dictCancelUpload: "X",
            dictRemoveLinks: "X",
            dictCancelUploadConfirmation: "取消上传。",
            dictRemoveFile: "删除图片",
            dictMaxFilesExceeded: "超过最大文件数量。",
            init: function() {
                this.on("success", function(file) {
                    console.log("File " + file.name + "uploaded");
                });
                this.on("removedfile", function(file) {
                    console.log("File " + file.name + "removed");
                });
            }
        });
    }
}

</script>
