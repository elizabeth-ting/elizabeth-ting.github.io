d3.json('https://elizabeth-ting.github.io/data/drinking-prevalence(3).json', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var data = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: unpack(rows, 'abbreviated name'),
          z: unpack(rows, 'percentage'), //value
          text: unpack(rows, 'abbreviated name'), //name
          zmin: 10,
          zmax: 25,
          colorscale: [
              [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
              [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
              [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: 'prevalence',
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
          title: 'Prevalence of Binge Drinking Among US Adults, 2015',
          geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)'
          }
      };

      Plotly.newPlot("prevalence", data, layout, {showLink: false});
});
