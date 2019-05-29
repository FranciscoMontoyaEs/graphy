var data = [
    ['mx-3622', 0],
    ['mx-bc', 3315766],
    ['mx-bs', 712029],
    ['mx-so', 2850330],
    ['mx-cl', 711235],
    ['mx-na', 1181050],
    ['mx-cm', 899931],
    ['mx-qr', 1501562],
    ['mx-mx', 8918653],
    ['mx-mo', 1903811],
    ['mx-df', 16187608],
    ['mx-qt', 2038372],
    ['mx-tb', 2395272],
    ['mx-cs', 5217908],
    ['mx-nl', 5119504],
    ['mx-si', 2966321],
    ['mx-ch', 3556574],
    ['mx-ve', 8112505],
    ['mx-za', 1579209],
    ['mx-ag', 1312544],
    ['mx-ja', 7844830],
    ['mx-mi', 4584471],
    ['mx-oa', 3967889],
    ['mx-pu', 6168883],
    ['mx-gr', 3535251],
    ['mx-tl', 1272847],
    ['mx-tm', 3441698],
    ['mx-co', 2954915],
    ['mx-yu', 2097175],
    ['mx-dg', 1754754],
    ['mx-gj', 5853677],
    ['mx-sl', 2717820],
    ['mx-hg', 2858359]
]

Highcharts.mapChart('containerMap', {
    chart: {
        map: 'countries/mx/mx-all'
    },

    title: {
        text: 'Población de México en el año 2015.'
    },

    mapNavigation: {
        enabled: true,
        buttonOptions: {
            verticalAlign: 'bottom'
        }
    },

    colorAxis: {
        min: 0
    },

    series: [{
        data: data,
        name: 'Población: ',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
})