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
    </div>
    <div class="card-body table-responsive">
        <table id="grid-command-community" class="table table-striped table-vmiddle">
            <thead>
                <tr>
                    <th data-column-id="contact" data-width="15%">客户姓名</th>
                    <th data-column-id="phone" data-width="15%">手机号</th>
                    <th data-column-id="status" data-width="20%" data-formatter="status">状态</th>
                    <th data-column-id="reserveDatetime" data-width="15%">预约时间</th>
                    <th data-column-id="createDatetime" data-width="15%" data-align="center" data-header-align="center" data-order="desc">创建时间</th>
                    <th data-column-id="commands" data-width="10%" data-align="center" data-header-align="center" data-formatter="commands" data-sortable="false">操作</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    </div>
    <edit></edit>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '预约列表'
        }
    },
    methods: {

    },
    components: {
        edit: require('./edit.vue')
    },
    ready: function() {
        var grid = $("#grid-command-community").bootgrid({
            ajax: true,
            post: function() {
                return {

                };
            },
            url: '/api/reserve/list',
            css: {
                icon: 'zmdi icon',
                iconColumns: 'zmdi-view-module',
                iconDown: 'zmdi-sort-amount-desc',
                iconRefresh: 'zmdi-refresh',
                iconUp: 'zmdi-sort-amount-asc'
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
                'status': function(column, row) {
                    switch (row.status) {
                        case 'reserve':
                            return '预约中'
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
