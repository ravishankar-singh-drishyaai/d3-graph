import React,{ useRef, useEffect, useState} from 'react'
import {select} from 'd3'

function Circle(){
    const [data, setData] = useState([20,25,35,45,60]);
    const svgRef = useRef();

    useEffect(() =>{
        const svg = select(svgRef.current);
        svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr("r", value => value)
        .attr("cx", value => value * 2)
        .attr("cy", value => value * 2)
        .attr("stroke", "red");

    },[data]);

    return (
        <React.Fragment>
            <svg ref={svgRef}></svg>
            <br />
            <button onClick={() =>setData(data.map(value =>value + 5))}>Increase the circle</button>
            <button onClick={() =>setData(data.map(value =>value - 5))}>Dec the circle</button>
            <button onClick={() =>setData(data.filter(value => value<35))}>Filter data</button>
        </React.Fragment>
    )
}

export default Circle;