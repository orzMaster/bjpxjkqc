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

    <div class="card-body">
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            title: '添加车辆'
        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        var grid = $("#grid-command-community").bootgrid({
            ajax: true,
            post: function() {
                return {

                };
            },
            url: '/api/community/list',
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
            formatters: {
                'video': function(column, row) {
                    var str = ''
                    str += '<div style="width:100%">'
                    str += (typeof row.video === 'undefined') ? '0' : row.video
                    str += '</div>'
                    str += '<div style="width:100%">'
                    str += (typeof row.offset_video === 'undefined') ? '0' : row.offset_video
                    str += '</div>'
                    return str
                },
                'updated': function(column, row) {
                    return moment(row.updated * 1000).format('YYYY-MM-DD HH:mm:ss');
                },
                'link': function(column, row) {
                    return '<a href="' + row.url + '">' + row.title + '</a>';
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
