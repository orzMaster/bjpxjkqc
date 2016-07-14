<style>



</style>

<template>

<div class="col-md-4 col-sm-6">
    <div class="dw-item bgm-lime">
        <div id="weather-widget"></div>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            enable: true
        }
    },
    ready: function() {
        /*
         * Weather Widget
         */
        if ($('#weather-widget')[0]) {
            $.simpleWeather({
                location: 'Beijing, China',
                woeid: '',
                unit: 'c',
                success: function(weather) {
                    var html = '<div class="weather-status">' + weather.temp + '&deg;' + weather.units.temp + '</div>';
                    html += '<ul class="weather-info"><li>' + weather.city + ', ' + weather.region + '</li>';
                    html += '<li class="currently">' + weather.currently + '</li></ul>';
                    html += '<div class="weather-icon wi-' + weather.code + '"></div>';
                    html += '<div class="dash-widget-footer"><div class="weather-list tomorrow">';
                    html += '<span class="weather-list-icon wi-' + weather.forecast[2].code + '"></span><span>' + weather.forecast[1].high + '/' + weather.forecast[1].low + '</span><span>' + weather.forecast[1].text + '</span>';
                    html += '</div>';
                    html += '<div class="weather-list after-tomorrow">';
                    html += '<span class="weather-list-icon wi-' + weather.forecast[2].code + '"></span><span>' + weather.forecast[2].high + '/' + weather.forecast[2].low + '</span><span>' + weather.forecast[2].text + '</span>';
                    html += '</div></div>';
                    $("#weather-widget").html(html);
                },
                error: function(error) {
                    $("#weather-widget").html('<p>' + error + '</p>');
                }
            });
        }
    }
}

</script>
