<style>



</style>

<template>

<div class="rs-dialog" id="edit-dialog" role="item">
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
                                <input type="text" class="form-control" placeholder="联系人" v-model="item.contact">
                            </div>
                        </div>
                    </div>


                    <br/>
                    <br/>

                    <div class="input-group">
                        <div class="col-sm-12">
                            <label class="radio radio-inline m-r-20">
                                <input type="radio" name="inlineRadioOptions" value="option1" checked="{{ item.status == 'reserve' : 'checked' ? '' }}">
                                <i class="input-helper"></i> 预约中
                            </label>

                            <label class="radio radio-inline m-r-20">
                                <input type="radio" name="inlineRadioOptions" value="option2" checked="{{ item.status == 'drive' : 'checked' ? '' }}">
                                <i class="input-helper"></i> 试驾中
                            </label>

                            <label class="radio radio-inline m-r-20">
                                <input type="radio" name="inlineRadioOptions" value="option3" checked="{{ item.status == 'done' : 'checked' ? '' }}">
                                <i class="input-helper"></i> 已完成
                            </label>
                        </div>
                    </div>

                    <br/>
                    <br/>

                    <div class="input-group">
                        <span class="input-group-addon"><i class="zmdi zmdi-phone"></i></span>
                        <div class="col-sm-4">
                            <div class="fg-line">
                                <input type="text" class="form-control" placeholder="Phone Number" v-model="item.phone">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-link save-model waves-effect">保存</button>
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
            item: {}
        }
    },
    components: {

    },
    ready: function() {

    }
}

</script>
