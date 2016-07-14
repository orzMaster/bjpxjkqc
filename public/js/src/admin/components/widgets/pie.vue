<style>



</style>

<template>

<div class="col-md-4 col-sm-6">
    <div id="pie-charts" class="dw-item bgm-cyan c-white">

        <div class="dw-item">
            <div class="dwi-header">
                <div class="dwih-title">Email Statistics</div>
            </div>

            <div class="clearfix"></div>

            <div class="text-center p-20 m-t-25">
                <div class="easy-pie main-pie" data-percent="75">
                    <div class="percent">45</div>
                    <div class="pie-title">Total Emails Sent</div>
                </div>
            </div>

            <div class="p-t-25 p-b-20 text-center">
                <div class="easy-pie sub-pie-1" data-percent="56">
                    <div class="percent">56</div>
                    <div class="pie-title">Bounce Rate</div>
                </div>
                <div class="easy-pie sub-pie-2" data-percent="84">
                    <div class="percent">84</div>
                    <div class="pie-title">Total Opened</div>
                </div>
                <div class="easy-pie sub-pie-2" data-percent="21">
                    <div class="percent">21</div>
                    <div class="pie-title">Total Ignored</div>
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

        }
    },
    methods: {

    },
    components: {

    },
    ready: function() {
        /*
         * Easy Pie Charts - Used in widgets
         */
        function easyPieChart(id, trackColor, scaleColor, barColor, lineWidth, lineCap, size) {
            $('.' + id).easyPieChart({
                trackColor: trackColor,
                scaleColor: scaleColor,
                barColor: barColor,
                lineWidth: lineWidth,
                lineCap: lineCap,
                size: size
            });
        }

        /* Main Pie Chart */
        if ($('.main-pie')[0]) {
            easyPieChart('main-pie', 'rgba(255,255,255,0.2)', 'rgba(255,255,255,0.5)', 'rgba(255,255,255,0.7)', 7, 'butt', 148);
        }

        /* Others */
        if ($('.sub-pie-1')[0]) {
            easyPieChart('sub-pie-1', '#eee', '#ccc', '#2196F3', 4, 'butt', 95);
        }

        if ($('.sub-pie-2')[0]) {
            easyPieChart('sub-pie-2', '#eee', '#ccc', '#FFC107', 4, 'butt', 95);
        }
    }
}

</script>
