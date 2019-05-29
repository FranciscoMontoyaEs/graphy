Highcharts.chart('containerChart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Comparación de la población de México entre 2010 y 2015'
    },
    xAxis: {
      categories: ["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"],
      crosshair: true
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Población (millones)'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.0f} mill</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Población 2010',
      data: [1184996, 3155070, 637026, 822441, 4796580, 3406465, 15175862, 2748391, 650555, 1632934, 5486372, 3388768, 2665018, 7350682, 8851080, 4351037, 1777227, 1084979, 4653458, 3801962, 5779829, 1827937, 1325578, 2585518, 2767761, 2662480, 2238603, 3268554, 1169936, 7643194, 1955577, 1490668]
    },
    {
      name: 'Población 2015',
      data: [1312544, 3315766, 712029, 899931, 5217908, 3556574, 16187608, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 8918653, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209]
    }]
  })