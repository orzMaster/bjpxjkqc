<style>



</style>

<template>

<div class="col-md-4 col-sm-6">
    <div id="site-visits" class="dw-item bgm-teal">
        <div class="dwi-header">
            <div class="p-30">
                <div class="dash-widget-visits"></div>
            </div>

            <div class="dwih-title">For the past 30 days</div>
        </div>

        <div class="list-group lg-even-white">
            <div class="list-group-item media sv-item">
                <div class="pull-right">
                    <div class="stats-bar"></div>
                </div>
                <div class="media-body">
                    <small>Page Views</small>
                    <h3>47,896,536</h3>
                </div>
            </div>

            <div class="list-group-item media sv-item">
                <div class="pull-right">
                    <div class="stats-bar-2"></div>
                </div>
                <div class="media-body">
                    <small>Site Visitors</small>
                    <h3>24,456,799</h3>
                </div>
            </div>

            <div class="list-group-item media sv-item">
                <div class="pull-right">
                    <div class="stats-line"></div>
                </div>
                <div class="media-body">
                    <small>Total Clicks</small>
                    <h3>13,965</h3>
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
        function sparklineLine(id, values, width, height, lineColor, fillColor, lineWidth, maxSpotColor, minSpotColor, spotColor, spotRadius, hSpotColor, hLineColor) {
            $('.' + id).sparkline(values, {
                type: 'line',
                width: width,
                height: height,
                lineColor: lineColor,
                fillColor: fillColor,
                lineWidth: lineWidth,
                maxSpotColor: maxSpotColor,
                minSpotColor: minSpotColor,
                spotColor: spotColor,
                spotRadius: spotRadius,
                highlightSpotColor: hSpotColor,
                highlightLineColor: hLineColor
            });
        }
        /* Dash Widget Line Chart */
        if ($('.dash-widget-visits')[0]) {
            sparklineLine('dash-widget-visits', [9, 4, 6, 5, 6, 4, 5, 7, 9, 3, 6, 5], '100%', '95px', 'rgba(255,255,255,0.7)', 'rgba(0,0,0,0)', 2, 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.4)', 5, 'rgba(255,255,255,0.4)', '#fff');
        }
    }
}

</script>
