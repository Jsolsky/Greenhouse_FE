import React from "react";
import { useState } from "react";

function DataSidebar({ greenHouseList, selectedGreenHouse, onGreenHouseChange, selectedTimeframe, onTimeframeChange }) {    
  return (
      <div className="Datasidebar">
        <h3>BoxId: {selectedGreenHouse}</h3>
        <label>
          Plant:
          <select defaultValue="" onChange={onGreenHouseChange}>
            <option disabled>
              Select an option...
            </option>
            {greenHouseList.map((item, index) => {
              return <option key={index} value={item["boxId"]}>{item["boxName"]}</option>
            })}
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