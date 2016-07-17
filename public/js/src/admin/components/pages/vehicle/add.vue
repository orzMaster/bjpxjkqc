<style>

.vehicle_dropzone {
    min-height: 364px;
    max-width: 485px;
    border: 1px solid #777777;
}

.vehicle_dropzone .dz-preview .dz-image {
    border: 1px solid #777777;
    border-radius: 5px;
    width: 410px;
    height: 270px;
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
            <h2>添加汽车<small>Pellentesque ac lectus sed elit dictum vehicula</small></h2>
        </div>

        <div class="card-body card-padding" role="vehicle">
            <form>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="vehicle_dropzone"></div>
                    </div>
                    <input type="text" name="path" v-model="vehicle.path" hidden="hidden">
                </div>
                <br>
                <br>
                <div class="row">
                    <div class="col-sm-3">
                        <div class="form-group fg-float">
                            <div class="fg-line">
                                <input type="name" name="name" v-model="vehicle.name" class="form-control">
                                <label class="fg-label">品牌名称</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group fg-float">
                            <div class="fg-line">
                                <input type="url" name="url" v-model="vehicle.url" class="form-control">
                                <label class="fg-label">品牌网址</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-info" @click="addVehicle">添加</button>
                <button type="reset" class="btn btn-link">取消</button>
            </form>
        </div>
    </div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '添加车辆',
            vehicle: {}
        }
    },
    methods: {
        addVehicle: function() {}
    },
    components: {

    },
    ready: function() {
        $(".vehicle_dropzone").dropzone({
            url: "/api/upload/vehicle",
            addRemoveLinks: true,
            maxFiles: 1,
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
                    self.$set('vehicle.src', json.src)
                })
            }
        });
    }
}

</script>
