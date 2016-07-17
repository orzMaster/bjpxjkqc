<style>

.dropzone {
    min-height: 200px;
    max-width: 175px;
    border: 1px solid #777777;
}

.dropzone .dz-preview .dz-image {
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

<div class="col-sm-6">
    <div class="card">
        <div class="card-header">
            <h2>添加品牌<small>Pellentesque ac lectus sed elit dictum vehicula</small></h2>
        </div>

        <div class="card-body card-padding" role="brand">
            <form>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="dropzone"></div>
                    </div>
                    <input type="text" name="path" v-model="brand.path" hidden="hidden">
                </div>
                <br>
                <br>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group fg-float">
                            <div class="fg-line">
                                <input type="name" name="name" v-model="brand.name" class="form-control">
                                <label class="fg-label">品牌名称</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group fg-float">
                            <div class="fg-line">
                                <input type="url" name="url" v-model="brand.url" class="form-control">
                                <label class="fg-label">品牌网址</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-info" @click="addBrand">添加</button>
                <button type="reset" class="btn btn-link">取消</button>
            </form>
        </div>
    </div>
</div>

<div class="col-sm-6">
    <!-- Picture List -->
    <div class="card picture-list">
        <div class="card-header">
            <h2>品牌列表<small>Cras congue nec lorem eget posuere</small></h2>
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
            <div class="col-xs-3 brand-icon" v-for="brand in brands">
                <a href="" id="{{brand._id}}">
                    <img :src="brand.src" alt="">
                </a>
            </div>
        </div>
    </div>
    <edit></edit>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '品牌管理',
            brand: {},
            brands: []
        }
    },
    methods: {
        addBrand: function() {
            if (this.brand) {
                this.$http.post('/api/brand/add', this.brand, function(data, status, request) {
                    this.$set('brand', null)
                    this.loadBrands();
                }).error(function(data, status, request) {

                })
            }
        },
        loadBrands: function() {
            this.$http.post('/api/brand/list', function(data, status, request) {
                this.$set('brands', data)
            }).error(function(data, status, request) {

            })
        }
    },
    components: {
        edit: require('./edit.vue')
    },
    ready: function() {
        var self = this
        self.loadBrands();
        Dropzone.autoDiscover = false
        $(".dropzone").dropzone({
            url: "/api/upload/brand",
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
                    self.$set('brand.src', json.src)
                })
            }
        });
    }
}

</script>
