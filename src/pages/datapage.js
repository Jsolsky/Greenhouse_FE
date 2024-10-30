import React, { useState } from 'react';
import DataOverview from '../components/data/dataOverview';
import DataSidebar from '../components/data/dataSidebar';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Datapage() {
  const location = useLocation();
  const navigate = useNavigate();
  const username = localStorage.getItem('username')
  const API_URL = process.env.REACT_APP_API_URL;
  const [loading, setLoading] = useState(true)
  const [greenHouseList, setGreenHouseList] = useState([])
  const [selectedGreenHouse, setSelectedGreenHouse] = useState('');
  const [timeData, setTimeData] = useState([]);
  const [selectedTimeframe, setSelectedTimeframe] = useState('7 Days');
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter');

  const fetchTimeData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/enviromentData/boxData?boxId=${queryParams.get('filter')}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Error getting boxes');
      }
      const data = await response.json();
      setTimeData(data);
    }
    catch (error) {
      console.error('Failed to fetch data:', error);
    }
    finally {
      setLoading(false); // Always set loading to false at the end
    }
  }

  const fetchGreenHouseList = async () => {
    try {
      const response = await fetch(`${API_URL}/boxes/user?username=${username}`); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Error getting boxes');
      }
      const data = await response.json();
      setGreenHouseList(data); // Update state with fetched data

    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    // Fetch data from API when component mounts
    fetchGreenHouseList();
    fetchTimeData();
  }, []);
  
  useEffect(() => {
    // Fetch data from API when component mounts
    fetchTimeData();
  }, [filter]);


  const handleGreenHouseChange = (event) => {
    setSelectedGreenHouse(event.target.value);
    navigate(`/data?filter=${event.target.value}`);
    fetchTimeData();
  };

  const handleTimeframeChange = (event) => {
    setSelectedTimeframe(event.target.value);
  };

  return (
    <div className="Dataapp">
      <div className="Datacontent">
        <DataSidebar
          greenHouseList={greenHouseList}
          selectedGreenHouse={selectedGreenHouse} 
          onGreenHouseChange={handleGreenHouseChange}
          selectedTimeframe={selectedTimeframe}
          onTimeframeChange={handleTimeframeChange}
        />
        <DataOverview loading={loading} timeData={timeData} selectedGreenHouse={selectedGreenHouse} selectedTimeframe={selectedTimeframe} />
      </div>
    </div>
  );
}

export default Datapage;

