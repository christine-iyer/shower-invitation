import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';

export default function USMap() {
  const [geoData, setGeoData] = useState(null);
  const [stateSelections, setStateSelections] = useState({
    Alabama: 'white',
    Alaska: 'white',
    Arizona: 'white',
    Arkansas: 'white',
    California: 'white',
    Colorado: 'white',
    Connecticut: 'white',
    Delaware: 'white',
    "District of Columbia": 'white',
    Florida: 'white',
    Georgia: 'white',
    Hawaii: 'white',
    Idaho: 'white',
    Illinois: 'white',
    Indiana: 'white',
    Iowa: 'white',
    Kansas: 'white',
    Kentucky: 'white',
    Louisiana: 'white',
    Maine: 'white',
    Maryland: 'white',
    Massachusetts: 'white',
    Michigan: 'white',
    Minnesota: 'white',
    Mississippi: 'white',
    Missouri: 'white',
    Montana: 'white',
    Nebraska: 'white',
    Nevada: 'white',
    "New Hampshire": 'white',
    "New Jersey": 'white',
    "New Mexico": 'white',
    "New York": 'white',
    "North Carolina": 'white',
    "North Dakota": 'white',
    Ohio: 'white',
    Oklahoma: 'white',
    Oregon: 'white',
    Pennsylvania: 'white',
    "Rhode Island": 'white',
    "South Carolina": 'white',
    "South Dakota": 'white',
    Tennessee: 'white',
    Texas: 'white',
    Utah: 'white',
    Vermont: 'white',
    Virginia: 'white',
    Washington: 'white',
    "West Virginia": 'white',
    Wisconsin: 'white',
    Wyoming: 'white'
  });

  useEffect(() => {
    d3.json("/us-states.geojson").then(data => {
      setGeoData(data);
    }).catch(error => {
      console.error("Error loading geojson data:", error);
    });
  }, []);

  // Adjusted projection for larger map and better centering
  const projection = d3.geoAlbersUsa().scale(1200).translate([500, 300]); // Increased scale and adjusted translation
  const pathGenerator = d3.geoPath().projection(projection);

  const handleStateSelection = (stateName, selection) => {
    setStateSelections(prevState => ({
      ...prevState,
      [stateName]: selection,
    }));
  };

  return (
    <div className='today' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
      <svg width={1000} height={600} style={{ background: "#f9f9f9", borderRadius: "8px" }}>
        {/* Render each state */}
        {geoData && geoData.features.map((feature) => {
          const stateName = feature.properties.NAME;
          const fillColor = stateSelections[stateName] || "#e0e0e0"; // Default light gray
          const centroid = projection(d3.geoCentroid(feature)); // Get the centroid position

          return (
            <g key={stateName}>
              <path
                d={pathGenerator(feature)}
                fill={fillColor}
                stroke="rgba(0, 0, 0, 0.2)" // Softer stroke
                strokeWidth={0.5} // Thinner stroke
                onClick={() => handleStateSelection(stateName, "#a6c8f4")} // Soft blue on click
                onDoubleClick={() => handleStateSelection(stateName, "#f4a6a6")} // Soft red on double-click
                onContextMenu={(e) => {
                  e.preventDefault(); // Prevents the default right-click menu
                  handleStateSelection(stateName, "#e0e0e0"); // Reset to light gray
                }}
                style={{ transition: "fill 0.3s ease, stroke 0.3s ease" }} // Smooth transitions
              />
              {/* Render state name label only if centroid is valid */}
              {centroid && (
                <text
                  x={centroid[0]}
                  y={centroid[1]}
                  textAnchor="middle"
                  fontSize="6" // Slightly larger font size to improve readability
                  fill="#555" // Softer dark gray for text
                  style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold" }} // Softer font style
                >
                  {stateName}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}