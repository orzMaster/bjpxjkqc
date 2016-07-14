<style>



</style>

<template>

<li class="dropdown hidden-xs">
    <a data-toggle="dropdown" href="index.html">
        <i class="him-icon zmdi zmdi-view-list-alt"></i>
        <i class="him-counts">{{ tasks.data.length }}</i>
    </a>
    <div class="dropdown-menu pull-right dropdown-menu-lg">
        <div class="list-group">
            <div class="lg-header">
                {{ tasks.title }}
            </div>
            <div class="lg-body">
                <div class="list-group-item" task_id="{{ task.task_id }}" v-for="task in tasks.data">
                    <div class="lgi-heading m-b-5">{{ task.task_title }}</div>
                    <div class="progress">
                        <div class="progress-bar {{ task.progress.type == '' ? '' : ('progress-bar-'+ task.progress.type) }}" role="progressbar" aria-valuenow="{{ task.progress.now }}" aria-valuemin="{{ task.progress.min }}" aria-valuemax="{{ task.progress.max }}" :style="{ width: task.progress.now + '%' }">
                            <span class="sr-only">{{ task.progress.now }}% Complete ({{ task.progress.type }})</span>
                        </div>
                    </div>
                </div>
            </div>

            <a class="view-more" href="index.html">View All</a>
        </div>
    </div>
</li>

</template>

<script>

module.exports = {
    data: function() {
        return {
            tasks: {
                title: 'Tasks',
                data: [{
                    task_id: 1,
                    task_title: 'HTML5 Validation Report',
                    progress: {
                        type: '',
                        now: 95,
                        min: 0,
                        max: 100
                    }
                }, {
                    task_id: 2,
                    task_title: 'Google Chrome Extension',
                    progress: {
                        type: 'success',
                        now: 80,
                        min: 0,
                        max: 100
                    }
                }, {
                    task_id: 3,
                    task_title: 'Social Intranet Projects',
                    progress: {
                        type: 'info',
                        now: 20,
                        min: 0,
                        max: 100
                    }
                }, {
                    task_id: 4,
                    task_title: 'Bootstrap Admin Template',
                    progress: {
                        type: 'warning',
                        now: 60,
                        min: 0,
                        max: 100
                    }
                }, {
                    task_id: 5,
                    task_title: 'Youtube Client App',
                    progress: {
                        type: 'danger',
                        now: 80,
                        min: 0,
                        max: 100
                    }
                }]
            }
        }
    },
    components: {

    },
    ready: function() {

    }
}

</script>
