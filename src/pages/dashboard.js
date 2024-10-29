import React, { useState } from 'react';
import { useEffect } from 'react';

function Dashboard() {


  const API_URL = process.env.REACT_APP_API_URL;
  const username = localStorage.getItem("username");
  const [greenHouseNames, setGreenHouseNames] = useState([])

  console.log(`${API_URL}/boxes/user?username=${username}`);
  console.log(greenHouseNames);

  useEffect(() => {
    // Fetch data from API when component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/boxes/user?username=${username}`); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Error getting boxes');
        }
        const data = await response.json();
        setGreenHouseNames(data); // Update state with fetched data
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  const greenHouseNameList = greenHouseNames.map((greenHouseNames,i) => 
        <ol>
          <button className = 'App-homepage-button' key ={'GH_'+i}>{greenHouseNames["boxName"]}</button>
        </ol>
   )

  return (
    <div classNAme ="App">
      <div className ="App-homepage">
        <h2 className = "App-body-h2">Hi {username}! </h2>
        <div style ={{marginTop: '0%'}}>
          <p style={{ display: 'inline-block', paddingBottom:'5px', paddingRight: '10px', margin: '0%'}} className ="App-body-text">This is how your greenhouses are going!</p>
          <button style={{ display: 'inline-block', fontSize: "10px", borderRadius: "10px"}}>?</button>
        </div>
      </div>
      <div style={{marginLeft:'22%', width: '56%', height:'50vh', overflowY:'scroll'}}> 
        {greenHouseNameList}
      </div>
    </div>
  );
}

export default Dashboard;