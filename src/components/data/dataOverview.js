import React from "react";
import Chart from './chart';

function DataOverview({ selectedPlant, selectedTimeframe }) {
    return (
      <div className="Dataoverview">
        <h2>{selectedPlant} Temperature Overview</h2>
        <p>Timeframe: {selectedTimeframe}</p>
        {/* Chart Component Placeholder */}
        <div className="chart">
          <Chart/>
        </div>
      </div>
    );
  }


export default DataOverview;