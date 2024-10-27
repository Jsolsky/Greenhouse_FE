import React from 'react';


function Dashboard() {

  const userDetails = 'Bob_Marley';
  const greenHouseNames = ['Coriander', 'Thyme', 'Chilli', 'Peonies', 'Test 1', 'Test 2'];
  const ghNameList = greenHouseNames.map((greenHouseNames,i) => 
        <ol>
          <button className = 'App-homepage-button' key ={'GH_'+i}>{greenHouseNames}</button>
        </ol>
   )

  return (
    <div classNAme ="App">
      <div className ="App-homepage">
        <h2 className = "App-body-h2">Hi {userDetails}! </h2>
        <div style ={{marginTop: '0%'}}>
          <p style={{ display: 'inline-block', paddingBottom:'5px', paddingRight: '10px', margin: '0%'}} className ="App-body-text">This is how your greenhouses are going!</p>
          <button style={{ display: 'inline-block', fontSize: "10px", borderRadius: "10px"}}>?</button>
        </div>
      </div>
      <div style={{marginLeft:'22%', width: '56%', height:'50vh', overflowY:'scroll'}}> 
        {ghNameList}
      </div>
    </div>
  );
}

export default Dashboard;