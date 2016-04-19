//parse the csv

// var w = window.innerWidth;
// var h = window.innerHeight;

d3.csv('elevation.csv', function(data) {
    //console.log(data);
    
    var elevationData = _.groupBy(data, 'Names');

    _.each(elevationData, function(mountainData, peakName, peakPark, peakState) {

        var peakHeight = parseFloat(mountainData[0]["Elevation"]);
        var peakPark = mountainData[0]["Park"];
        var peakState = mountainData[0]["State"];

        var w = 110;
        var h = 400;
        var w_text = 50;

        console.log(peakHeight);
        console.log(peakName);
        console.log(peakPark);
        console.log(peakState);


        var svgContainer = d3.select('#dataviz').append('svg')
            .attr('width', w)
            .attr('height', h);

        // barHeight = d3.scale.linear().domain([0,20310]).range([0,700]);

        var bars = svgContainer.append('rect')
            .attr('x', 15)
            .attr('y', h - 70 - ((peakHeight)/80))
            .attr('width', 80)
            .attr('height', 0)
            .style('fill', '#E5E3E5')
            .on("mouseover", null);

        bars.transition()
            .duration(1000)
            .delay(100)
            .attr('height', ((peakHeight)/80));


        bars.on('mouseenter', mouseEnterBars)
            .on('mouseleave', mouseLeaveBars);

        var peakNames = svgContainer.append('text')
            .attr('x', w_text)
            .attr('y', h-50)
            .text(peakName)
            .style('text-anchor', 'middle')
            .style('font-weight','bold')
            .style('font-size','13px');

        var peakParks = svgContainer.append('text')
            .attr('x', w_text)
            .attr('y', h-30)
            .text(peakPark)
            .style('text-anchor', 'middle')
            .style('font-size','12px');

        var peakStates = svgContainer.append('text')
            .attr('x', w_text)
            .attr('y', h-15)
            .text(peakState)
            .style('text-anchor', 'middle')
            .style('font-size','12px');

        var peakHeights = svgContainer.append('text')
            .attr('x', w_text+3)
            .attr('y', h-75-((peakHeight)/80))
            .attr('fill-opacity',0)
            .text(peakHeight+ " feet")
            .style('text-anchor', 'middle')
            .style('font-size','13px');

        function mouseEnterBars() {
            peakHeights.attr('fill-opacity',100);
            bars.style('fill', '#B7F9EC');

        }
        
        function mouseLeaveBars() {
            peakHeights.attr('fill-opacity',0);
            bars.style('fill', '#E5E3E5');
            
        }


    });

            
    // });

  });