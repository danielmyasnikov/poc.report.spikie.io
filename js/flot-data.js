/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
// Real Time chart
var data = []
    , totalPoints = 300;

function getRandomData() {
    if (data.length > 0) data = data.slice(1);
    // Do a random walk
    while (data.length < totalPoints) {
        var prev = data.length > 0 ? data[data.length - 1] : 50
            , y = prev + Math.random() * 10 - 5;
        if (y < 0) {
            y = 0;
        }
        else if (y > 100) {
            y = 100;
        }
        data.push(y);
    }
    // Zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }
    return res;
}
// Set up the control widget
var updateInterval = 30;
$("#updateInterval").val(updateInterval).change(function () {
    var v = $(this).val();
    if (v && !isNaN(+v)) {
        updateInterval = +v;
        if (updateInterval < 1) {
            updateInterval = 1;
        }
        else if (updateInterval > 3000) {
            updateInterval = 3000;
        }
        $(this).val("" + updateInterval);
    }
});

//Flot Moving Line Chart
$(function () {
    var container = $("#flot-line-chart-moving");
    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.
    var maximum = container.outerWidth() / 2 || 300;
    //
    var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }
        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }
        return res;
    }
    //
    series = [{
        data: [
            [1, 100],
            [2,0],
            [3,0],
            [4,0],
            [5,0],
            [6,0],
            [7,0],
            [8,0],
            [9,0],
            [10, 10],
            [11,0],
            [12,0],
            [13,0],
            [14,0],
            [15,0],
            [16,0],
            [17,0],
            [18,0],
            [19,45],
            [20,0],
            [21,0],
            [22,0],
            [23,0],
            [24,0],
            [25,0],
            [26,0],
            [27,0],
            [28,0],
            [29,65],
            [30,70],
            [31,0],
            [32,0],
            [33,0],
            [34,0],
            [35,0],
            [36,0],
            [37,0],
            [38,0],
            [39,85],
            [40,70],
            [41,0],
            [42,0],
            [43,0],
            [44,0],
            [45,0],
            [46,0],
            [47,0],
            [48,55],
            [49,0],
            [50,25],
            [51,0],
            [52,0],
            [53,0],
            [54,0],
            [55,0],
            [56,0],
            [57,0],
            [58,5],
            [59,10],
            [60,70],
            [61,0],
            [62,0],
            [63,0],
            [64,0],
            [65,0],
            [66,0],
            [67,0],
            [68,0],
            [69,5],
            [70,10],
            [71,35],
            [72,70],
            [73,10],
            [74,0],
            [75,0],
            [76,0],
            [77,0],
            [78,0],
            [79,0],
            [80,70],
            [81,0],
            [82,0],
            [83,0],
            [84,0],
            [85,0],
            [86,0],
            [87,2],
            [88,10],
            [89,40],
            [90,70],
            [91,30],
            [92,25],
            [93,0],
            [94,0],
            [95,0],
            [96,0],
            [97,0],
            [98,86],
            [99,100],
            [100,70]

        ]
        , lines: {
            fill: true
        },
        bars: {
            lineWidth: 1
        }
    }];
    //
    var plot = $.plot(container, series, {
        colors: ["#00d860"]
        , grid: {
            borderWidth: 0
            , minBorderMargin: 20
            , labelMargin: 10
            , backgroundColor: {
                colors: ["#fff", "#fff"]
            }
            , margin: {
                top: 8
                , bottom: 20
                , left: 20
            }
            , markings: function (axes) {
                var markings = [];
                var xaxis = axes.xaxis;

                console.log(xaxis);

                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 1) {
                    markings.push({
                        xaxis: {
                            from: x
                            , to: x + xaxis.tickSize
                        }
                        , color: "#fff"
                    });
                }
                return markings;
            }
        }
        , xaxis: {
            tickFormatter: function () {
                return "";
            }
        }
        , yaxis: {
            min: 0
            , max: 110
        }
        , legend: {
            show: true
        }
    });
    // Update the random dataset at 25FPS for a smoothly-animating chart
    // setInterval(function updateRandom() {
    //     series[0].data = getRandomData();
    //     plot.setData(series);
    //     plot.draw();
    // }, 40);
});

function getRandomFlow() {
    data = [];
    maximum = 300;
    bottom = -100
    if (data.length) {
        data = data.slice(1);
    }
    while (data.length < maximum) {
        var previous = data.length ? data[data.length - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        data.push(y < bottom ? bottom : y > 100 ? 100 : y);
    }
    // zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }
    return res;
}

//Flot Line Chart
$(document).ready(function () {

    var offset = 0;
    plot();

    function plot() {
        var sin = [
            [1,0],
            [2,0],
            [3,0],
            [4,0],
            [5,0],
            [6,0],
            [7,0],
            [8,9],
            [9,23],
            [10,19.405133678617737],
            [11,7],
            [12,0],
            [13,0],
            [14,0],
            [15,0],
            [16,0],
            [17,0],
            [18,20],
            [19,26.260779629275078],
            [20,0],
            [21,0],
            [22,0],
            [23,0],
            [24,0],
            [25,0],
            [26,0],
            [27,0],
            [28,0],
            [29,6.770472259471349],
            [30,50],
            [31,52],
            [32,53],
            [33,98],
            [34,3],
            [35,1],
            [36,0],
            [37,0],
            [38,0],
            [39,4],
            [40,10.51033703066022],
            [41,10],
            [42,99],
            [43,0],
            [44,0],
            [45,0],
            [46,0],
            [47,0],
            [48,0],
            [49,0],
            [50,67.22576073372483],
            [51,0],
            [52,0],
            [53,0],
            [54,0],
            [55,0],
            [56,0],
            [57,0],
            [58,0],
            [59,-22],
            [60,-26.86444348458061],
            [61,-12],
            [62,-9],
            [63,0],
            [64,0],
            [65,0],
            [66,0],
            [67,0],
            [68,0],
            [69,1],
            [70,34.62979564667458],
            [71,99],
            [72,2],
            [73,1],
            [74,0],
            [75,0],
            [76,0],
            [77,0],
            [78,0],
            [79,4],
            [80,22.96237760177503],
            [81,7],
            [82,9],
            [83,0],
            [84,0],
            [85,0],
            [86,0],
            [87,0],
            [88,0],
            [89,-43],
            [90,-53.03733827697597],
            [91,-55],
            [92,-90],
            [93,-8],
            [94,0],
            [95,0],
            [96,0],
            [97,0],
            [98,0],
            [99,0],
            [100,17.527536453445414]

        ]

        var options = {
            series: {
                lines: {
                    show: true
                }
                , points: {
                    show: true
                }
            }
            , grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            }
            , yaxis: {
                min: -100
                , max: 100
            }
            , colors: ["#ff268e"]
            , grid: {
                color: "#AFAFAF"
                , hoverable: true
                , borderWidth: 0
                , backgroundColor: '#FFF'
            }
            , tooltip: true
            , tooltipOpts: {
                content: "'%s' of %x.1 is %y.4"
                , shifts: {
                    x: -60
                    , y: 25
                }
            }
        };
        var plotObj = $.plot($("#flot-line-chart"), [{
            data: sin
            , label: "Sentiments"
        , }], options);
    }
});

$(function () {
    var container = $("#flot-line-chart-moving-1-audience");
    // Determine how many data points to keep based on the placeholder's initial size;
    // this gives us a nice high-res plot while avoiding more than one point per pixel.
    var maximum = container.outerWidth() / 2 || 300;
    //
    var data = [];

    function getRandomData() {

        if (data.length) {
            data = data.slice(1);
        }
        while (data.length < maximum) {
            var previous = data.length ? data[data.length - 1] : 50;
            var y = previous + Math.random() * 10 - 5;
            data.push(y < 0 ? 0 : y > 100 ? 100 : y);
        }
        // zip the generated y values with the x values
        var res = [];
        for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]])
        }
        return res;
    }
    //
    series = [{
        data: [
            [1, 100],
            [2,0],
            [3,0],
            [4,0],
            [5,0],
            [6,0],
            [7,0],
            [8,0],
            [9,0],
            [10, 10],
            [11,0],
            [12,0],
            [13,0],
            [14,0],
            [15,0],
            [16,0],
            [17,0],
            [18,0],
            [19,45],
            [20,0],
            [21,0],
            [22,0],
            [23,0],
            [24,0],
            [25,0],
            [26,0],
            [27,0],
            [28,0],
            [29,65],
            [30,70],
            [31,0],
            [32,0],
            [33,0],
            [34,0],
            [35,0],
            [36,0],
            [37,0],
            [38,0],
            [39,85],
            [40,70],
            [41,0],
            [42,0],
            [43,0],
            [44,0],
            [45,0],
            [46,0],
            [47,0],
            [48,55],
            [49,0],
            [50,25],
            [51,0],
            [52,0],
            [53,0],
            [54,0],
            [55,0],
            [56,0],
            [57,0],
            [58,5],
            [59,10],
            [60,70],
            [61,0],
            [62,0],
            [63,0],
            [64,0],
            [65,0],
            [66,0],
            [67,0],
            [68,0],
            [69,5],
            [70,10],
            [71,35],
            [72,70],
            [73,10],
            [74,0],
            [75,0],
            [76,0],
            [77,0],
            [78,0],
            [79,0],
            [80,70],
            [81,0],
            [82,0],
            [83,0],
            [84,0],
            [85,0],
            [86,0],
            [87,2],
            [88,10],
            [89,40],
            [90,70],
            [91,30],
            [92,25],
            [93,0],
            [94,0],
            [95,0],
            [96,0],
            [97,0],
            [98,86],
            [99,100],
            [100,70]

        ]
        , lines: {
            fill: true
        },
        bars: {
            lineWidth: 1
        }
    }];
    //
    var plot = $.plot(container, series, {
        colors: ["#00d860"]
        , grid: {
            borderWidth: 0
            , minBorderMargin: 20
            , labelMargin: 10
            , backgroundColor: {
                colors: ["#fff", "#fff"]
            }
            , margin: {
                top: 8
                , bottom: 20
                , left: 20
            }
            , markings: function (axes) {
                var markings = [];
                var xaxis = axes.xaxis;

                console.log(xaxis);

                for (var x = Math.floor(xaxis.min); x < xaxis.max; x += xaxis.tickSize * 1) {
                    markings.push({
                        xaxis: {
                            from: x
                            , to: x + xaxis.tickSize
                        }
                        , color: "#fff"
                    });
                }
                return markings;
            }
        }
        , xaxis: {
            tickFormatter: function () {
                return "";
            }
        }
        , yaxis: {
            min: 0
            , max: 110
        }
        , legend: {
            show: true
        }
    });
    // Update the random dataset at 25FPS for a smoothly-animating chart
    // setInterval(function updateRandom() {
    //     series[0].data = getRandomData();
    //     plot.setData(series);
    //     plot.draw();
    // }, 40);
});

function getRandomFlow() {
    data = [];
    maximum = 300;
    bottom = -100
    if (data.length) {
        data = data.slice(1);
    }
    while (data.length < maximum) {
        var previous = data.length ? data[data.length - 1] : 50;
        var y = previous + Math.random() * 10 - 5;
        data.push(y < bottom ? bottom : y > 100 ? 100 : y);
    }
    // zip the generated y values with the x values
    var res = [];
    for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
    }
    return res;
}

//Flot Line Chart
$(document).ready(function () {

    var offset = 0;
    plot();

    function plot() {
        var sin = [
            [1,0],
            [2,0],
            [3,0],
            [4,0],
            [5,0],
            [6,0],
            [7,0],
            [8,9],
            [9,23],
            [10,19.405133678617737],
            [11,7],
            [12,0],
            [13,0],
            [14,0],
            [15,0],
            [16,0],
            [17,0],
            [18,20],
            [19,26.260779629275078],
            [20,0],
            [21,0],
            [22,0],
            [23,0],
            [24,0],
            [25,0],
            [26,0],
            [27,0],
            [28,0],
            [29,6.770472259471349],
            [30,50],
            [31,52],
            [32,53],
            [33,98],
            [34,3],
            [35,1],
            [36,0],
            [37,0],
            [38,0],
            [39,4],
            [40,10.51033703066022],
            [41,10],
            [42,99],
            [43,0],
            [44,0],
            [45,0],
            [46,0],
            [47,0],
            [48,0],
            [49,0],
            [50,67.22576073372483],
            [51,0],
            [52,0],
            [53,0],
            [54,0],
            [55,0],
            [56,0],
            [57,0],
            [58,0],
            [59,-22],
            [60,-26.86444348458061],
            [61,-12],
            [62,-9],
            [63,0],
            [64,0],
            [65,0],
            [66,0],
            [67,0],
            [68,0],
            [69,1],
            [70,34.62979564667458],
            [71,99],
            [72,2],
            [73,1],
            [74,0],
            [75,0],
            [76,0],
            [77,0],
            [78,0],
            [79,4],
            [80,22.96237760177503],
            [81,7],
            [82,9],
            [83,0],
            [84,0],
            [85,0],
            [86,0],
            [87,0],
            [88,0],
            [89,-43],
            [90,-53.03733827697597],
            [91,-55],
            [92,-90],
            [93,-8],
            [94,0],
            [95,0],
            [96,0],
            [97,0],
            [98,0],
            [99,0],
            [100,17.527536453445414]

        ]

        var options = {
            series: {
                lines: {
                    show: true
                }
                , points: {
                    show: true
                }
            }
            , grid: {
                hoverable: true //IMPORTANT! this is needed for tooltip to work
            }
            , yaxis: {
                min: -100
                , max: 100
            }
            , colors: ["#ff268e"]
            , grid: {
                color: "#AFAFAF"
                , hoverable: true
                , borderWidth: 0
                , backgroundColor: '#FFF'
            }
            , tooltip: true
            , tooltipOpts: {
                content: "'%s' of %x.1 is %y.4"
                , shifts: {
                    x: -60
                    , y: 25
                }
            }
        };
        var plotObj = $.plot($("#flot-line-chart-1-audience"), [{
            data: sin
            , label: "Sentiments"
        , }], options);
    }
});

setTimeout(function() {
    $('#flot-line-chart').find('canvas')[0].style.left = '25px';
    $('#flot-line-chart').find('canvas')[0].style.width = '785px';
    $($('.flot-text')[1])[0].style.left = '20px';

}, 3000);
