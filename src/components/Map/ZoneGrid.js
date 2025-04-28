import { getCombinedData } from "../../utils/data";
import React, { useState } from "react";
import TimelineCard from "./TimelineCard";

// Utility function to get closing time based on zone
const getClosingTime = (zone) => {
  const closingTimes = {
    A: "7:00 PM",
    B: "7:30 PM",
    C: "8:00 PM",
    D: "8:30 PM",
    E: "9:00 PM",
    F: "9:30 PM",
    G: "10:00 PM",
    H: "12:00 AM",
  };

  return closingTimes[zone] || "Unknown Time";
};

// Utility function to group data by Zone
const groupByZone = (data) => {
  return data.reduce((zones, item) => {
    const { Zone } = item;
    if (!zones[Zone]) zones[Zone] = [];
    zones[Zone].push(item);
    return zones;
  }, {});
};

const ZoneGrid = () => {
  const combinedData = getCombinedData();
  const zones = groupByZone(combinedData);

  // State to track which sections are expanded
  const [expandedZones, setExpandedZones] = useState({});

  // Toggle the visibility of a section
  const toggleZone = (zone) => {
    setExpandedZones((prev) => ({
      ...prev,
      [zone]: !prev[zone], // Toggle the current zone's visibility
    }));
  };

  return (
    <div>
      {Object.keys(zones).sort().map((zone) => (
        <div key={zone} style={{ marginBottom: "40px" }}>
          {/* Zone Header with Closing Time */}
          <h2
            style={{ cursor: "pointer", color: "#007BFF" }} // Add pointer cursor and color for clickable header
            onClick={() => toggleZone(zone)}
          >
            {expandedZones[zone] ? "▼" : "▶"} Closing Time: {getClosingTime(zone)}
          </h2>
          {expandedZones[zone] && ( // Show content only if the section is expanded
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)", // 3 columns for the grid
                gap: "10px",
              }}
            >
              {zones[zone]
                .sort((a, b) => a.State.localeCompare(b.State))
                .map((state) => (
                  <TimelineCard
                    key={state.State}
                    stateName={state.State}
                    abortionOnBallot={state.AbortionOnBallot}
                    houseNotes={state.HouseNotes}
                    senateNotes={state.SenateNotes}
                    winner2020={state.WinnerTwenty}
                  />
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ZoneGrid;