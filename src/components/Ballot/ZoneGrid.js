import { getCombinedData } from "../../utils/data";
import React from "react";
import TimelineCard from "../Ballot/TimelineCard";

// Utility function to get closing time based on zone
const getClosingTime = (zone) => {
  const closingTimes = {
    A: "7:00 PM",
    B: "7:30 PM",
    C: "8:00 PM",
    D: "8:30 PM",
    E: "9:00 PM",
    F: "10:00 PM",
    G: "11:00",
    H: "12:00 AM"
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

  return (
    <div>
      {Object.keys(zones).sort().map((zone) => (
        <div key={zone} style={{ marginBottom: "40px" }}>
          {/* Zone Header with Closing Time */}
          <h2>
            Closing Time: {getClosingTime(zone)}
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", // 3 columns for the grid
            gap: "10px",
          }}>
            {zones[zone].sort((a, b) => a.State.localeCompare(b.State)).map((state) => (
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
        </div>
      ))}
    </div>
  );
};

export default ZoneGrid;