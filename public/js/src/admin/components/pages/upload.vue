<style>

.upload_dropzone {
    min-height: 200px;
    border: 1px solid #777777;
}

.upload_dropzone .dz-preview .dz-image {
    border: 1px solid #777777;
    border-radius: 5px;
    width: 100px;
    height: 100px;
}

.brand-icon {
    border: 1px solid transparent;
}

.brand-icon:hover {
    border: 1px solid #777777;
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
                    <a href="index.html">刷新</a>
                </li>
            </ul>
        </li>
    </ul>
</div>

<div class="col-sm-4">
    <!-- Picture List -->
    <div class="card">
        <div class="card-header">
            <h2>上传<small></small></h2>
            <ul class="actions">
                <li class="dropdown action-show">
                    <a href="widgets.html" data-toggle="dropdown">
                        <i class="zmdi zmdi-more-vert"></i>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                            <a href="">刷新</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="pl-body card-padding">
            <div class="upload_dropzone"></div>
        </div>
    </div>
</div>

<div class="col-sm-8">
    <!-- Picture List -->
    <div class="card">
        <div class="card-header">
            <h2>文件列表<small></small></h2>
            <ul class="actions">
                <li class="dropdown action-show">
                    <a href="widgets.html" data-toggle="dropdown">
                        <i class="zmdi zmdi-more-vert"></i>
                    </a>

                    <ul class="dropdown-menu dropdown-menu-right">
                        <li>
                            <a href="">刷新</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="card-body">
            <div class="row">
                <div class="col-sm-12" v-for="file in files">
                    <div class="form-group fg-float">
                        <div class="fg-line">
                            <input type="name" name="name" v-model="file.path" class="form-control">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '上传文件',
            files: []
        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        var self = this
        Dropzone.autoDiscover = false
        $(".upload_dropzone").dropzone({
            url: "/api/upload/file",
            addRemoveLinks: true,
            maxFiles: 10,
            maxFilesize: 512,
            acceptedFiles: ".png,.jpg,.jpeg",
            dictDefaultMessage: "点击或拖拽图片到此区域",
            dictFallbackMessage: "Fallback。",
            dictInvalidInputType: "文件类型被拒绝。",
            dictFileTooBig: "文件大小过大。",
            dictCancelUpload: "取消上传",
            dictRemoveLinks: "删除图片",
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
                this.on("complete", function(data) {
                    var json = JSON.parse(data.xhr.responseText)
                    var files = self.files
                    files.push({
                        path: json.src
                    })
                    self.$set('files', files)
                })
            }
        });
    }
}

</script>
