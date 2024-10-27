import React from "react";

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
  
export default DataSidebar