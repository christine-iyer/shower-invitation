import * as d3 from "d3";
import { useEffect, useRef, useState } from "react";
import DataPicker from "./DataPicker";
const Random = () => {

  const ref = useRef();
  const csvUrls = [
    "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/lies.csv",
    "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/data.csv",
    "https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/newdata.csv"
  ];

  const [selectedYears, setSelectedYears] = useState([2020, 2021, 2022, 2023, 2024]);
  const [data, setData] = useState(null);
  const [selectedCsv, setSelectedCsv] = useState(csvUrls[0]); // Default to the last CSV

  const fetchData = (csvUrl) => {
    d3.csv(csvUrl)
      .then(function (csvData) {
        // Function to calculate week number
        function getWeekNumber(date) {
          const startDate = new Date(date.getFullYear(), 0, 1);
          const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
          return Math.ceil((days + startDate.getDay() + 1) / 7);
        }

        // Format variables
        const formattedData = csvData.map(function (d) {
          let parsedDate = d3.timeParse("%Y-%m-%d")(d.date);
          return {
            date: parsedDate,
            value: +d.value, // Convert value to number
            year: parsedDate.getFullYear(),
            month: parsedDate.getMonth() + 1, // Month number (0-11),
            week: getWeekNumber(parsedDate) // Calculate week number
          };
        });

        // Set data state
        setData(formattedData);
      })
      .catch(function (error) {
        console.error('Error loading or processing data:', error);
      });
  };

  useEffect(() => {
    fetchData(selectedCsv);
  }, [selectedCsv]);

 
 
 
 
 
 
 
 
 
 
  // useEffect(() => {
  //   // Read the data
  //   d3.csv("https://raw.githubusercontent.com/christine-iyer/d3-practice/main/src/data/lies.csv")
  //     .then(function (csvData) {
  //       // Function to calculate week number
  //       function getWeekNumber(date) {
  //         const startDate = new Date(date.getFullYear(), 0, 1);
  //         const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
  //         return Math.ceil((days + startDate.getDay() + 1) / 7);
  //       }

  //       // Format variables
  //       const formattedData = csvData.map(function (d) {
  //         let parsedDate = d3.timeParse("%Y-%m-%d")(d.date);
  //         return {
  //           date: parsedDate,
  //           value: +d.value, // Convert value to number
  //           year: parsedDate.getFullYear(),
  //           month: parsedDate.getMonth() + 1, // Month number (0-11),
  //           week: getWeekNumber(parsedDate) // Calculate week number
  //         };
  //       });

  //       // Set data state
  //       setData(formattedData);
  //     })
  //     .catch(function (error) {
  //       console.error('Error loading or processing data:', error);
  //     });
  // }, []);

  useEffect(() => {
    if (!data) return;

    var margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 660 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // Append the svg object to the body of the page
    var svg = d3.select(ref.current)
      .select("svg")
      .select("g");

    if (svg.empty()) {
      svg = d3.select(ref.current)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    }

    svg.selectAll("*").remove();

    // Create a tooltip div that is hidden by default
    var tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0)
      .style("position", "absolute")
      .style("background", "#f9f9f9")
      .style("border", "1px solid #d3d3d3")
      .style("padding", "5px")
      .style("border-radius", "5px")
      .style("pointer-events", "none");

    // Define color scale for years
    var color = d3.scaleOrdinal()
      .domain([2020, 2021, 2022, 2023, 2024])
      .range(["rgb(203,203,70)", "rgb(103,103,154)", "rgb(132,45,103)", "rgb(233, 64,147)", "rgb(234,97,42)"]);

    // Define x-axis scale (0 to 52 weeks)
    var x = d3.scaleTime()
      .domain([0, 52]) // Week numbers from 0 to 52
      .range([0, width]);

    // Define y-axis scale
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function (d) { return d.value; })])
      .range([height, 0]);
    // Add shaded area between weeks 40 and 44


// Jan
svg.append("rect")
.attr("x", x(0))
.attr("width", x(4) - x(0))
.attr("y", 0)
.attr("height", height)
.attr("fill", "green")
.attr("opacity", 0.1);
// Feb
svg.append("rect")
.attr("x", x(4))
.attr("width", x(8) - x(4))
.attr("y", 0)
.attr("height", height)
.attr("fill", "yellow")
.attr("opacity", 0.1);
// March
svg.append("rect")
.attr("x", x(8))
.attr("width", x(12) - x(8))
.attr("y", 0)
.attr("height", height)
.attr("fill", "green")
.attr("opacity", 0.1);
// April
svg.append("rect")
.attr("x", x(12))
.attr("width", x(16) - x(12))
.attr("y", 0)
.attr("height", height)
.attr("fill", "yellow")
.attr("opacity", 0.1);
// May
svg.append("rect")
.attr("x", x(16))
.attr("width", x(20) - x(16))
.attr("y", 0)
.attr("height", height)
.attr("fill", "green")
.attr("opacity", 0.1);
// June
svg.append("rect")
.attr("x", x(20))
.attr("width", x(24) - x(20))
.attr("y", 0)
.attr("height", height)
.attr("fill", "yellow")
.attr("opacity", 0.1);
// July
svg.append("rect")
.attr("x", x(24))
.attr("width", x(28) - x(24))
.attr("y", 0)
.attr("height", height)
.attr("fill", "green")
.attr("opacity", 0.1);

svg.append('text')
.attr("x", x(26))
.attr("y", height/2)
.attr("text-anchor", "middle") // Center the text horizontally
      .attr("dy", ".35em") // Adjust vertical alignment
      .attr("font-size", "14px") // Font size
      .attr("fill", "black") // Font color
      .text("Now"); 

// July
svg.append("rect")
.attr("x", x(28))
.attr("width", x(32) - x(28))
.attr("y", 0)
.attr("height", height)
.attr("fill", "yellow")
.attr("opacity", 0.1);
// Aug
svg.append("rect")
.attr("x", x(32))
.attr("width", x(36) - x(32))
.attr("y", 0)
.attr("height", height)
.attr("fill", "green")
.attr("opacity", 0.1);
// Sept
svg.append("rect")
.attr("x", x(36))
.attr("width", x(40) - x(36))
.attr("y", 0)
.attr("height", height)
.attr("fill", "yellow")
.attr("opacity", 0.1);
// October 
    svg.append("rect")
      .attr("x", x(40))
      .attr("width", x(44) - x(40))
      .attr("y", 0)
      .attr("height", height)
      .attr("fill", "green")
      .attr("opacity", 0.1)
      ;

    // November
    svg.append("rect")
      .attr("x", x(44))
      .attr("width", x(48) - x(44))
      .attr("y", 0)
      .attr("height", height)
      .attr("fill", "yellow")
      .attr("opacity", 0.1);
    
      svg.append("text")
      .attr("x", x(42)) // Position the text at the center of the shaded area
      .attr("y", height /2) // Vertically centered
      .attr("text-anchor", "middle") // Center the text horizontally
      .attr("dy", ".35em") // Adjust vertical alignment
      .attr("font-size", "14px") // Font size
      .attr("fill", "black") // Font color
      .text("Voting"); 
      
    // December
    svg.append("rect")
      .attr("x", x(48))
      .attr("width", x(52) - x(48))
      .attr("y", 0)
      .attr("height", height)
      .attr("fill", "green")
      .attr("opacity", 0.1);

    // Add x-axis
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(6).tickFormat(d3.format("d")))
      .selectAll("text")
      .attr("transform", "rotate(-45)")
      .style("text-anchor", "end")
      .attr("dx", "-0.8em")
      .attr("dy", "0.15em");

    // Add y-axis
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line with color encoding by year
    var line = d3.line()
      .curve(d3.curveBasis) // Apply smoothing curve
      .x(function (d) {
        return x(d.week);
      })
      .y(function (d) {
        return y(d.value);
      });

    var years = d3.groups(data, d => d.year); // Group data by year

    // Update the chart
    function updateChart(selectedYears) {
      svg.selectAll(".line").remove();
      svg.selectAll(".circle").remove();

      years.forEach(function (yearData) {
        if (selectedYears.includes(yearData[0])) {
          svg.append("path")
            .datum(yearData[1])
            .attr("class", "line")
            .attr("fill", "none")
            .attr("stroke", color(yearData[0])) // Color by year
            .attr("stroke-width", 1.5)
            .attr("d", line);

          // Add circles for each data point
          svg.selectAll("circle-" + yearData[0])
            .data(yearData[1])
            .enter()
            .append("circle")
            .attr("class", "circle")
            .attr("cx", function (d) {
              return x(d.week);
            })
            .attr("cy", function (d) { return y(d.value); })
            .attr("r", 0)
            .attr("fill", color(yearData[0]))
            .on("mouseover", function (event, d) {
              tooltip.transition()
                .duration(200)
                .style("opacity", .9);
              tooltip.html("<br/>Week Number: " + d.week + "<br/>Date " + d.month + "/" + d.year)
                .style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
            })
            .on("mousemove", function (event) {
              tooltip.style("left", (event.pageX + 5) + "px")
                .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", function (d) {
              tooltip.transition()
                .duration(500)
                .style("opacity", 0);
            });
        }
      });
    }

    // Initial chart update
    updateChart(selectedYears);

    // Add legend
    // var legend = svg.selectAll(".legend")
    //   .data(color.domain())
    //   .enter().append("g")
    //   .attr("class", "legend")
    //   .attr("transform", function (d, i) {
    //     return "translate(0," + i * 20 + ")";
    //   });

    // legend.append("rect")
    //   .attr("x", width - 18)
    //   .attr("width", 18)
    //   .attr("height", 18)
    //   .style("fill", color);

    // legend.append("text")
    //   .attr("x", width - 24)
    //   .attr("y", 9)
    //   .attr("dy", ".35em")
    //   .style("text-anchor", "end")
    //   .text(function (d) { return d; });

  }, [data, selectedYears]);

  const handleYearChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedYears(prevSelectedYears =>
      prevSelectedYears.includes(value)
        ? prevSelectedYears.filter(year => year !== value)
        : [...prevSelectedYears, value]
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <DataPicker/>
      <div style={{ marginBottom: '20px' }}>
        <label
          style={{
            backgroundColor: "rgb(203,203,70)",
            padding: '5px',
            margin: '0 5px'
          }}>
          <input
            type="checkbox"
            style={{ opacity: .4 }}
            value="2020"
            checked={selectedYears.includes(2020)}
            onChange={handleYearChange} />
          2020
        </label>

        <label
          style={{
            backgroundColor: "rgb(103,103,154)",
            padding: '5px',
            margin: '0 5px'
          }}>
          <input
            type="checkbox"
            style={{ opacity: .4 }}
            value="2021"
            checked={selectedYears.includes(2021)}
            onChange={handleYearChange} />
          2021
        </label>

        <label style={{
          backgroundColor: "rgb(132,45,103)",
          padding: '5px',
          margin: '0 5px'
        }}>
          <input
            type="checkbox"
            style={{ opacity: 0.4 }}
            value="2022"
            checked={selectedYears.includes(2022)}
            onChange={handleYearChange} />
          2022
        </label>
        <label style={{
          backgroundColor: "rgb(233, 64,147)",
          padding: '5px',
          margin: '0 5px'
        }}>
          <input
            type="checkbox"
            style={{ opacity: 0.4 }}
            value="2023"
            checked={selectedYears.includes(2023)}
            onChange={handleYearChange} />
          2023
        </label>
        <label style={{
          backgroundColor: "rgb(234,97,42)",
          padding: '5px',
          margin: '0 5px'
        }}>
          <input
            type="checkbox" value="2024" style={{ opacity: 0.4 }}
            checked={selectedYears.includes(2024)}
            onChange={handleYearChange} />
          2024
        </label>
      </div>
      <svg width={660} height={400} id="my_dataviz" ref={ref} />
    </div>
  );
};

export default Random;
