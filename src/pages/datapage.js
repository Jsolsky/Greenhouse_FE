import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function Datapage() {
  const [selectedPlant, setSelectedPlant] = useState('Thyme');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7 Days');

  const handlePlantChange = (event) => {
    setSelectedPlant(event.target.value);
  };

  const handleTimeframeChange = (event) => {
    setSelectedTimeframe(event.target.value);
  };

  return (
    <div className="Dataapp">
      <div className="Datacontent">
        <DataSidebar 
          selectedPlant={selectedPlant} 
          onPlantChange={handlePlantChange}
          selectedTimeframe={selectedTimeframe}
          onTimeframeChange={handleTimeframeChange}
        />
        <DataOverview selectedPlant={selectedPlant} selectedTimeframe={selectedTimeframe} />
      </div>
    </div>
  );
}

function DataSidebar({ selectedPlant, onPlantChange, selectedTimeframe, onTimeframeChange }) {
  return (
    <div className="Datasidebar">
      <h3>{selectedPlant}</h3>
      <label>
        Plant:
        <select value={selectedPlant} onChange={onPlantChange}>
          <option value="Thyme">Thyme</option>
          <option value="Mint">Mint</option>
          <option value="Basil">Basil</option>
        </select>
      </label>

      <div className="Datatimeframe-options">
        <label>
          <input
            type="checkbox"
            value="Today"
            checked={selectedTimeframe === 'Today'}
            onChange={onTimeframeChange}
          />
          Today
        </label>
        <label>
          <input
            type="checkbox"
            value="7 Days"
            checked={selectedTimeframe === '7 Days'}
            onChange={onTimeframeChange}
          />
          7 Days
        </label>
        <label>
          <input
            type="checkbox"
            value="1 Month"
            checked={selectedTimeframe === '1 Month'}
            onChange={onTimeframeChange}
          />
          1 Month
        </label>
      </div>
    </div>
  );
}

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

export default Datapage;

