import React,{ useRef, useEffect, useState} from 'react'
import {select,line,curveCardinal,axisBottom,axisLeft,scaleLinear,axisRight} from 'd3'

function Curvedline(){
    const [data, setData] = useState([20,55,35,45,60,75]);
    const svgRef = useRef();

    useEffect(() =>{
        const svg = select(svgRef.current);

        const xScale = scaleLinear()
            .domain([0,data.length-1])
            .range([0,300]);

        const yScale = scaleLinear()
            .domain([0,150])
            .range([150,0])

        const xAxis = axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(index => index+1)
        svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);
      
        const yAxis = axisLeft(yScale);
        svg
            .select(".y-axis")
            .style("transform", "translateX(0px)")
            .call(yAxis);
        
        const myLine = line()
            .x((value,index) =>xScale(index))
            .y(value => 150-value)
            .curve(curveCardinal);
        svg
            .selectAll(".line")
            .data([data])
            .join("path")
            .attr("class", "line")
            .attr("d",myLine)
            .attr("fill","none")
            .attr("stroke","blue")
    },[data]);

    return (
        <React.Fragment>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
            <br />
            <br />
            <button onClick={() =>setData(data.map(value =>value + 5))}>Increase the value</button>
            <button onClick={() =>setData(data.map(value =>value - 5))}>Dec the value</button>
            <button onClick={() =>setData(data.filter(value => value<35))}>Filter data</button>
        </React.Fragment>
    )
}

export default Curvedline;