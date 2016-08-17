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
            <h2>添加品牌<small>品牌格式:98x98</small></h2>
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
                <a href="" rel="rs-dialog" data-target="edit-dialog" data-id="{{brand._id}}" data-name="{{brand.name}}" data-url="{{brand.url}}">
                    <img :src="brand.src">
                </a>
            </div>
        </div>
    </div>
</div>
<edit></edit>

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
                this.$http.post('/api/brand/add', this.brand).then((response) => {
                    $(".dropzone").removeAllFiles();
                    this.$set('brand', null)
                    this.loadBrands();
                })
            }
        },
        loadBrands: function() {
            var self = this
            self.$http.post('/api/brand/list', {}).then((response) => {
                self.$set('brands', response.data)
                self.$nextTick(function() {
                    $("a[rel='rs-dialog']").each(function() {
                        var trigger = $(this);
                        var brand = {
                            id: trigger.data("id"),
                            name: trigger.data("name"),
                            url: trigger.data("url")
                        };
                        var rs_dialog = $('#' + trigger.data('target'));
                        var rs_box = rs_dialog.find('.rs-dialog-box');
                        var rs_save = rs_dialog.find('.save-model');
                        var rs_close = rs_dialog.find('.close-model');
                        var rs_overlay = $('.rs-overlay');
                        if (!rs_dialog.length) return true;

                        trigger.click(function() {
                            self.$children[0].$data.brand = brand
                            var w1 = $(window).width();
                            $('html').addClass('dialog-open');
                            var w2 = $(window).width();
                            c = w2 - w1 + parseFloat($('body').css('padding-right'));
                            if (c > 0) $('body').css('padding-right', c + 'px');

                            rs_overlay.fadeIn('fast');
                            rs_dialog.show('fast', function() {
                                rs_dialog.addClass('in');
                            });
                            return false;
                        });

                        rs_save.click(function(e) {
                            rs_dialog.removeClass('in').delay(150).queue(function() {
                                rs_dialog.hide().dequeue();
                                rs_overlay.fadeOut('slow');
                                $('html').removeClass('dialog-open');
                                $('body').css('padding-right', '');
                            });
                            return false;
                        });

                        rs_close.click(function(e) {
                            rs_dialog.removeClass('in').delay(150).queue(function() {
                                rs_dialog.hide().dequeue();
                                rs_overlay.fadeOut('slow');
                                $('html').removeClass('dialog-open');
                                $('body').css('padding-right', '');
                            });
                            return false;
                        });

                        rs_box.click(function(e) {
                            e.stopPropagation();
                        });
                    });
                })
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
