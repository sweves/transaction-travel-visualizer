$( document ).ready(function() {

  //*******************************************************************
  //  CREATE MATRIX AND MAP
  //*******************************************************************

  d3.csv('data/trips.csv', function (error, data) {
    var mpr = chordMpr(data);

    mpr
      .addValuesToMap('origin')
      .setFilter(function (row, a, b) {
        return (row.origin === a.name && row.destination === b.name)
      })
      .setAccessor(function (recs, a, b) {
        if (!recs[0]) return 0;
        return +recs[0].count;
      });
    drawChords(mpr.getMatrix(), mpr.getMap());
  });


  //*******************************************************************
  //  DRAW THE CHORD DIAGRAM
  //*******************************************************************

  function drawChords (matrix, mmap) {
    var w = 980, h = 800, r1 = h / 2, r0 = r1 - 100;

    var fill = d3.scale.ordinal()
        .domain(d3.range(4))
        .range(colorArray());

    var chord = d3.layout.chord()
        .padding(.02)
        .sortSubgroups(d3.descending)
        .sortChords(d3.descending);

    var arc = d3.svg.arc()
        .innerRadius(r0)
        .outerRadius(r0 + 20);

    var svg = d3.select("#holder").append("svg:svg")
        .attr("width", w)
        .attr("height", h)
        .append("svg:g")
        .attr("id", "circle")
        .attr("transform", "translate(" + w / 2 + "," + h / 2 + ")");

        svg.append("circle")
            .attr("r", r0 + 20);

    var rdr = chordRdr(matrix, mmap);
    chord.matrix(matrix);

    var g = svg.selectAll("g.group")
        .data(chord.groups())
      .enter().append("svg:g")
        .attr("class", "group")
        .on("mouseover", mouseover)
        .on("mouseout", function (d) { 
          d3.select("#tooltip").style("visibility", "hidden") 
          d3.select("#placeholder")
                .style("visibility", "visible")
        });

    g.append("svg:path")
        //.style("stroke", "black")
        .style("fill", function(d) { return fill(d.index); })
        .attr("d", arc);

    g.append("svg:text")
        .each(function(d) { d.angle = (d.startAngle + d.endAngle) / 2; })
        .attr("dy", ".35em")
        .style("font-family", "Roboto, arial, sans-serif")
        .style("font-size", "10px")
        .style("vertical-align", "center")
        .attr("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
        .attr("transform", function(d) {
          return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
              + "translate(" + (r0 + 26) + ")"
              + (d.angle > Math.PI ? "rotate(180)" : "");
        })
        .text(function(d) { return rdr(d).gname; });

      var chordPaths = svg.selectAll("path.chord")
            .data(chord.chords())
            .enter().append("svg:path")
            .attr("class", "chord")
            .style("stroke", function(d) { return d3.rgb(fill(d.target.index)).darker(); })
            .style("fill", function(d) { return fill(d.target.index); })
            .attr("d", d3.svg.chord().radius(r0))
            .on("mouseover", function (d) {
              
              d3.select("#pathhover")
                .style("visibility", "visible")
                .html(chordTip(rdr(d)))
                .style("position", "absolute")
                .style("background-color", "#000")
                .style("opacity", "0.7")
                .style("color", "#FFF")
                .style("padding", "13px 16px 5px 16px")
                .style("top", function () { return (d3.event.pageY - 100)+"px"})
                .style("left", function () { return (d3.event.pageX - 200)+"px";})
            })
            .on("mouseout", function (d) {
            
              d3.select("#pathhover")
              .style("visibility", "hidden") });

      function chordTip (d) {
        var p = d3.format(".2%"), q = d3.format(",.3r")
        return "<p class='yo'>"
          + p(d.svalue/d.stotal) + " (" + q(d.svalue) + ") of all transactions in <br/>"
          + d.sname + " are from " + d.tname
          + (d.sname === d.tname ? "": ("</p><p class='hide'>"
          + p(d.tvalue/d.ttotal) + " (" + q(d.tvalue) + ")<br/>"
          + d.tname + " -> " + d.sname)) + "</p>"
      }

      function groupTip (d) {
        var p = d3.format(".1%"), q = d3.format(",.3r")
        return "<h1> "
            + d.gname + " </h1><p class='number'> " + q(d.gvalue) + " </p><p class='sub'>total transactions<br/></p><p class='number'>"
            + p(d.gvalue/d.mtotal) + " </p><p class='sub'>of Global Transactions (" + q(d.mtotal) + " overall)</p>"
      }

      function mouseover(d, i) {
        d3.select("#placeholder")
          .style("visibility", "hidden")
        d3.select("#tooltip")
          .style("visibility", "visible")
          .html(groupTip(rdr(d)))
          // .style("position", "fixed")
          // .style("right", "0")
          .style("height", "800")
          .style("margin-right", "50px")
          .style("position", "absolute")
          .style("left", "1100px")
          .style("width", "350px")

        chordPaths.classed("fade", function(p) {

          if(document.getElementById("switch-off").checked){
            return p.source.index != i;
          } else{
            return p.target.index != i;
          }
              
        });
      }
  }

  function rainbow(numOfSteps, step) {

    // This function generates vibrant, "evenly spaced" colours (i.e. no clustering). This is ideal for creating easily distinguishable vibrant markers in Google Maps and other apps.
    // Adam Cole, 2011-Sept-14
    // HSV to RBG adapted from: http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
    
    var r, g, b;
    var h = step / numOfSteps;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
}


    function  colorArray() {

      var colors =[];
      var numColors = 160;

    
      for (var i = 0; i < numColors; i++){
        var toBeAdded = rainbow(numColors, i);
        colors.push(toBeAdded);
      }

      // console.log(colors);
      return colors;

    }

});
