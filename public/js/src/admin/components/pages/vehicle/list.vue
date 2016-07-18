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
    </div>

    <table id="grid-command-community" class="table table-striped table-vmiddle">
        <thead>
            <tr>
                <th data-column-id="type" data-width="10%" data-formatter="type">分类</th>
                <th data-column-id="brand" data-width="10%" data-formatter="brand">品牌</th>
                <th data-column-id="title" data-width="30%" data-formatter="title">标题</th>
                <th data-column-id="remark" data-width="40%" data-formatter="remark">说明</th>
                <th data-column-id="commands" data-width="10%" data-align="center" data-header-align="center" data-formatter="commands" data-sortable="false">操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '车辆列表',
            brands: []
        }
    },
    methods: {
        loadBrands: function(brand, callback){
            this.$http.post('/api/brand/list', { }, function(data, status, request){
                this.$set('brands', data)
            })
        }
    },
    components: {

    },
    ready: function() {
        var self = this
        self.loadBrands()
        var grid = $("#grid-command-community").bootgrid({
            ajax: true,
            post: function() {
                return {

                };
            },
            url: '/api/vehicle/list',
            css: {
                icon: 'zmdi icon',
                iconColumns: 'zmdi-view-module',
                iconDown: 'zmdi-expand-more',
                iconRefresh: 'zmdi-refresh',
                iconUp: 'zmdi-expand-less'
            },
            labels: {
                all: "全部",
                infos: "显示 {{ctx.start}} 到 {{ctx.end}} 共 {{ctx.total}} 条数据",
                loading: "加载中...",
                noResults: "没有找到相关数据!",
                refresh: "刷新",
                search: "搜索"
            },
            templates: {
                actionButton: '<div class="{{css.dropDownMenu}}"><button class="btn btn-default" type="button" title="{{ctx.text}}">{{ctx.content}}</button></div>',
            },
            formatters: {
                'type': function(column, row) {
                    switch (row.type) {
                        case 'period':
                            return '期车'
                        case 'present':
                            return '现车'
                    }
                },
                'brand': function(column, row) {
                    for(var i in self.brands){
                        if(self.brands[i]._id == row.brand)
                            return self.brands[i].name
                    }
                },
                'commands': function(column, row) {
                    var str = ''
                    str += '<button type="button" class="btn btn-icon command-edit" data-row-id="' + row.name + '"><span class="zmdi zmdi-edit"></span></button> '
                    str += '<button type="button" class="btn btn-icon command-delete" data-row-id="' + row.name + '"><span class="zmdi zmdi-delete"></span></button>'
                    return str
                }
            }
        }).on("loaded.rs.jquery.bootgrid", function() {
            /* Executes after data is loaded and rendered */
            grid.find(".command-edit").on("click", function(e) {
                alert("You pressed edit on row: " + $(this).data("row-id"));
            }).end().find(".command-delete").on("click", function(e) {
                alert("You pressed delete on row: " + $(this).data("row-id"));
            });
        });
    }
}

</script>
