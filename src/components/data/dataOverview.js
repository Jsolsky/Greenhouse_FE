import React from "react";

function DataOverview({ selectedPlant, selectedTimeframe }) {
    return (
      <div className="Dataoverview">
        <h2>{selectedPlant} Temperature Overview</h2>
        <p>Timeframe: {selectedTimeframe}</p>
        {/* Chart Component Placeholder */}
        <div className="chart">
          <p>Temperature Chart will be displayed here.</p>
        </div>
      </div>
    );
  }


export default DataOverview;