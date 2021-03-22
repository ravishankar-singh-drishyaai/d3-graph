import React, { useEffect, useRef } from 'react';
import data from './data.json';
import {select,color,scaleOrdinal,schemeCategory10} from 'd3';


function Force() {
    const links = data.links.map(d=> Object.create(d));
    const nodes = data.nodes.map(d => Object.create(d));
    const svgRef = useRef();
    const svg = select(svgRef.current);
    const color = scaleOrdinal(schemeCategory10)
    

    const link = svg.append("g")
                    .attr("stroke", "#999")
                    .attr("stroke-opacity", 0.6)
                    .selectAll("line")
                    .data(links)
                    .join("line")
                    .attr("stroke-width", d => Math.sqrt(d.value));
    const node = svg.append("g")
                    .attr("stroke", "#fff")
                    .attr("stroke-width", 1.5)
                    .selectAll("circle")
                    .data(nodes)
                    .join("circle")
                    .attr("r", 5)
                    .attr("fill", color)
                    .call(drag(simulation));
    return (
        <div>
            <svg ref={svgRef}>
                
            </svg>
        </div>
    )

}

export default Force;