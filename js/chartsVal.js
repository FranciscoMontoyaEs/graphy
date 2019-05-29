var trace1 = 
    {
    x: ["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"],
    y: [1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209],
    fill: 'tozeroy',
    type: 'scatter',
    name:"2015",
    marker: {
    color: 'rgb(220, 118, 51)'
    }
    };
    var trace2 = {
    x: ["AGS", "BC", "BCS", "CAM", "CHIA", "CHI", "CDMX", "COA", "COL", "DGO", "GTO", "GRO", "HGO", "JAL", "EDOMEX", "MICH", "MOR", "NAY", "NL", "OAX", "PUE", "QRO", "QR", "SLP", "SIN", "SON", "TAB", "TAM", "TLAX", "VER", "YUC", "ZAC"],
    y: [1184996, 3155070, 637026, 822441, 4796580, 3406465, 8851080, 2748391, 650555, 1632934, 5486372, 3388768, 2665018, 7350682, 15175862, 4351037, 1777227, 1084979, 4653458, 3801962, 5779829, 1827937, 1325578, 2585518, 2767761, 2662480, 2238603, 3268554, 1169936, 7643194, 1955577, 1490668],
    fill: 'tonexty',
    type: 'scatter',
    name:"2010",
     marker: {
    color: 'rgb(72, 201, 176)'
    }
    };

    var data = [trace1,trace2];
	var layout = {
  	title: 'Población en México'
  	};
    Plotly.newPlot('myDiv', data, layout);

    var trace3 = {
        x: [1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209],
        y: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"],
        name: 'Población 2015',
        orientation: 'h',
        marker: {
        color: 'rgb(215, 189, 226)',
        width: 10
        },
        type: 'bar'
        };
  
       var trace4 = {
       x: [1312544, 3315766, 712029, 899931, 5217908, 3556574, 8918653, 2954915, 711235, 1754754, 5853677, 3535251, 2858359, 7844830, 16187608, 4584471, 1903811, 1181050, 5119504, 3967889, 6168883, 2038372, 1501562, 2717820, 2966321, 2850330, 2395272, 3441698, 1272847, 8112505, 2097175, 1579209],
       y: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Ciudad de México", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"],
       name: 'Población 2010',
       orientation: 'h',
       type: 'bar',
       marker: {
      color: 'rgb(38, 198, 218)',
      width:  10
      }
      };
  
  var data = [trace3, trace4];
  
  var layout = {
    title: 'Población en México',
    barmode: 'stack'
  };
  
  Plotly.newPlot('myDiv2', data, layout);