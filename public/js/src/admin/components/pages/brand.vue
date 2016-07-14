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
            <form method="post" action="/api/brand/add">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="fileinput fileinput-new" data-provides="fileinput">
                            <div class="fileinput-preview thumbnail" data-trigger="fileinput"></div>
                            <div>
                                <span class="btn btn-info btn-file">
                                    <span class="fileinput-new">选择图片</span>
                                <span class="fileinput-exists">上传</span>
                                <input type="file" name="..." v-model="brand.file">
                                </span>
                                <a href="form-components.html#" class="btn btn-danger fileinput-exists" data-dismiss="fileinput">删除</a>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group fg-float">
                            <div class="fg-line">
                                <input type="name" class="form-control">
                                <label class="fg-label">品牌名称</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group fg-float">
                            <div class="fg-line">
                                <input type="url" class="form-control">
                                <label class="fg-label">品牌网址</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-info">添加</button>
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
                            <a href="widgets.html">刷新</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div class="pl-body card-padding">
            <div class="col-xs-3" v-for="brand in brands">
                <a href="widgets.html" id="brand_{{brand.id}}">
                    <img :src="brand.src" alt="">
                </a>
            </div>
        </div>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '品牌管理',
            brand: {},
            brands: [{
                id: '01',
                src: '/static/images/admin/headers/square/1.png'
            },{
                id: '01',
                src: '/static/images/admin/headers/square/2.png'
            },{
                id: '01',
                src: '/static/images/admin/headers/square/3.png'
            },{
                id: '01',
                src: '/static/images/admin/headers/square/4.png'
            }]
        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {

    }
}

</script>
