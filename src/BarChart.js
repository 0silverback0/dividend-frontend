import React, { useEffect } from 'react';
import * as d3 from 'd3';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

function BarChart({ data }) {
  useEffect(() => {
    if (data.length > 0) {
      const svg = d3.select('#bar-chart');

      const margin = { top: 20, right: 20, bottom: 60, left: 40 };
      const width = window.innerWidth - margin.left - margin.right; // Make chart responsive
      const height = Math.min(400, window.innerHeight / 2) - margin.top - margin.bottom; // Limit height on smaller screens

      svg.selectAll('*').remove();

      const x = d3
        .scaleBand()
        .domain([...data.map((d) => new Date(d.date).getFullYear().toString()), new Date().getFullYear().toString()]) // Include the current year
        .range([0, width])
        .padding(0.1);

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => parseFloat(d.dividend))])
        .nice()
        .range([height, 0]);

      const g = svg
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      g.selectAll('.bar')
        .data(data)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', (d) => x(new Date(d.date).getFullYear().toString()))
        .attr('y', (d) => y(parseFloat(d.dividend)))
        .attr('width', x.bandwidth())
        .attr('height', (d) => height - y(parseFloat(d.dividend)));

      const xAxis = d3
        .axisBottom(x)
        .tickValues(
          x.domain().filter((d, i) => i % 5 === 0) // Show labels for every 5 years
        );

      g.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis)
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-0.5em')
        .attr('dy', '0.15em')
        .attr('transform', 'rotate(-45)');

      g.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(y).tickFormat(d3.format('.2f')))
        .append('text')
        .attr('fill', '#000')
        .attr('transform', 'rotate(-90)')
        .attr('y', -margin.left)
        .attr('dy', '0.71em')
        .attr('text-anchor', 'end')
        .text('Dividend Amount ($)');

      svg
        .append('text')
        .attr('x', width + margin.left)
        .attr('y', height + margin.top + 40)
        .attr('text-anchor', 'end')
        .style('font-size', '18px');
    }
  }, [data]);

  return (
    <Paper elevation={3} style={{ width: '100%', padding: '3px' }}>
      <Typography variant="h6" gutterBottom>
        Dividend Chart
      </Typography>
      <svg id="bar-chart" width="100%" height={400}></svg>
    </Paper>
  );
}

export default BarChart;
