(function(define) {
    define(function(require) {

        return function(highcharts,msgNode,consumerNode,workerNode) {
          return {

            createGauges : function() {

                this.msgChart = new highcharts.Highcharts.Chart({

                    chart: {
                        renderTo: msgNode,
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },

                    title: {
                        text: 'Messages'
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },

                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 100,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',

                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: '# msgs'
                        },
                        plotBands: [{
                            from: 0,
                            to: 10,
                            color: '#55BF3B' // green
                        }, {
                            from: 10,
                            to: 30,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 30,
                            to: 100,
                            color: '#DF5353' // red
                        }]
                    },

                    series: [{
                        name: '# msgs',
                        data: [0],
                    }]

                });
            
                this.consumerChart = new highcharts.Highcharts.Chart({

                    chart: {
                        renderTo: consumerNode,
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },

                    title: {
                        text: 'Consumers'
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },

                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 10,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',

                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: '# consumers'
                        },
                        plotBands: [{
                            from: 0,
                            to: 5,
                            color: '#55BF3B' // green
                        }, {
                            from: 5,
                            to: 8,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 8,
                            to: 10,
                            color: '#DF5353' // red
                        }]
                    },

                    series: [{
                        name: '# consumers',
                        data: [0],
                    }]

                });

                this.workerChart = new highcharts.Highcharts.Chart({

                    chart: {
                        renderTo: workerNode,
                        type: 'gauge',
                        plotBackgroundColor: null,
                        plotBackgroundImage: null,
                        plotBorderWidth: 0,
                        plotShadow: false
                    },

                    title: {
                        text: 'Workers'
                    },

                    pane: {
                        startAngle: -120,
                        endAngle: 120,
                        background: [{
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#FFF'],
                                    [1, '#333']
                                ]
                            },
                            borderWidth: 0,
                            outerRadius: '109%'
                        }, {
                            backgroundColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, '#333'],
                                    [1, '#FFF']
                                ]
                            },
                            borderWidth: 1,
                            outerRadius: '107%'
                        }, {
                            // default background
                        }, {
                            backgroundColor: '#DDD',
                            borderWidth: 0,
                            outerRadius: '105%',
                            innerRadius: '103%'
                        }]
                    },

                    // the value axis
                    yAxis: {
                        min: 0,
                        max: 10,

                        minorTickInterval: 'auto',
                        minorTickWidth: 1,
                        minorTickLength: 10,
                        minorTickPosition: 'inside',
                        minorTickColor: '#666',

                        tickPixelInterval: 30,
                        tickWidth: 2,
                        tickPosition: 'inside',
                        tickLength: 10,
                        tickColor: '#666',
                        labels: {
                            step: 2,
                            rotation: 'auto'
                        },
                        title: {
                            text: '# processes'
                        },
                        plotBands: [{
                            from: 0,
                            to: 5,
                            color: '#55BF3B' // green
                        }, {
                            from: 5,
                            to: 8,
                            color: '#DDDF0D' // yellow
                        }, {
                            from: 8,
                            to: 10,
                            color: '#DF5353' // red
                        }]
                    },

                    series: [{
                        name: '# processes',
                        data: [0],
                    }]

                }); // end of worker-processes chart
            } // end of create gauges function
        }; // end of returned object
    }; // end of module function
  });
}(
typeof define === 'function' && define.amd ? define : function(factory) {
    module.exports = factory(require);
}));
