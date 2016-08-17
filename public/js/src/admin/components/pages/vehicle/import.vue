<style>



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
        <h2>添加汽车文件<small>预览图片:415x275(colors.overall) 细节图片:1200x600(pictures.src)<br><a href="/static/upload/vehicles.json.zip">点击下载汽车文件模板</a></small></h2>
    </div>

    <div class="card-body card-padding" role="vehicle">
        <form>
            <div class="row">
                <div class="col-sm-6">
                    <label class="control-label">上传文件</label>
                    <input type="file" class="file" id="file" v-model="path">
                </div>
                <div class="col-sm-6">
                    <label class="control-label" v-show="vehicles" >从文件中读取{{ vehicles.length }}条数据</label>
                </div>
            </div>
            <br>
            <br>
            <button type="button" class="btn btn-info" @click="addVehicle">确认导入</button>
            <button type="reset" class="btn btn-link">取消</button>
        </form>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '导入车辆',
            path: '',
            vehicles: ''
        }
    },
    methods: {
        addVehicle: function() {
            var self = this
            self.$http.post('/api/vehicle/import', { path: self.vehicles.path }).then((response) => {
                swal({
                    title: "提示!",
                    text: "导入成功,请查看列表.",
                    type: "success",
                    confirmButtonText: "确认",
                    closeOnConfirm: true
                }, function() {
                    $('.fileinput-remove').click()
                });
            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this
        $('#file').fileinput({
            language: 'zh', //设置语言
            uploadUrl: '/api/upload/vehicle', //上传的地址
            allowedFileExtensions: ['json'], //接收的文件后缀
            showUpload: true, //是否显示上传按钮
            showCaption: true, //是否显示标题
            browseClass: "btn btn-primary", //按钮样式
            previewFileIcon: "<i class='glyphicon glyphicon-king'></i>",
        }).on("fileuploaded", function(event, data, previewId, index) {
            self.$set('vehicles', data.response);
        });
    }
}

</script>
