<style>


</style>

<template>

<div class="rs-dialog" id="edit-dialog" role="brand">
    <div class="rs-dialog-box">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">信息</h4>
                </div>
                <div class="modal-body">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-account"></i></span>
                        <div class="col-sm-4">
                            <div class="fg-line">
                                <input type="text" class="form-control" placeholder="联系人" v-model="brand.name">
                            </div>
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-phone"></i></span>
                        <div class="col-sm-4">
                            <div class="fg-line">
                                <input type="text" class="form-control" placeholder="Phone Number" v-model="brand.url">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link save-model waves-effect" @click="updateBrand">保存</button>
                    <button type="button" class="btn btn-link close-model waves-effect">关闭</button>
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
            brand: {}
        }
    },
    methods: {
        updateBrand: function(e){
            this.$http.post('/api/brand/update', this.brand, function(data, status, request) {

            }).error(function(data, status, request) {

            })
        }
    },
    components: {

    },
    ready: function() {

    }
}

</script>
