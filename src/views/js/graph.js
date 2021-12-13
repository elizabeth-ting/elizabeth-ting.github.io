d3.json('https://elizabeth-ting.github.io/data/binge-drinking-rates-us(2).json', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: unpack(rows, 'name'),
          z: unpack(rows, 'percentage'), //value
          text: unpack(rows, 'name'), //name
          zmin: 6,
          zmax: 8.5,
          colorscale: [
              [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
              [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
              [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: 'drinks consumed',
              thickness: 20
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 2
              }
          }
      }];


      var layout = {
          title: 'Intensity of Binge Drinking Among US Adults, 2015',
          geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)'
          }
      };

      Plotly.newPlot("myDiv", data, layout, {showLink: false});
});
