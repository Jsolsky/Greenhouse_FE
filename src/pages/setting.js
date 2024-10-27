import React from 'react';

function gettingMinMax(Category){
    var tempMin = 0
    var tempMax = 0
    var humidMin = 0
    var humidMax = 0
    var lightMin = 0
    var lightMax = 0
    if (Category === 0){
        tempMin = 18
        tempMax = 24
        humidMin = 65
        humidMax = 70
        lightMin = 300
        lightMax = 600
    } else if (Category === 1){
        tempMin = 21
        tempMax = 27
        humidMin = 40
        humidMax = 50
        lightMin = 600
        lightMax = 1000
    } else if (Category === 2){
        tempMin = 27
        tempMax = 31
        humidMin = 45
        humidMax = 55
        lightMin = 600
        lightMax = 1000
    } else if (Category === 3){
        tempMin = 21
        tempMax = 32
        humidMin = 40
        humidMax = 50
        lightMin = 500
        lightMax = 2000
    } else if (Category === 4){
        tempMin = 7
        tempMax = 24
        humidMin = 60
        humidMax = 90
        lightMin = 300
        lightMax = 600

    } else if (Category === 5){
        tempMin = 0
        tempMax = 0
        humidMin = 0
        humidMax = 0
        lightMin = 0
        lightMax = 0
    }

    return [tempMin, tempMax, humidMin, humidMax, lightMin, lightMax];
}


function Setting() {
    /*Setting all the defaults -> will be stored in the database and drawn from there*/
    const greenHouseNames = ['Coriander', 'Thyme', 'Chilli', 'Peonies', 'Test 1', 'Test 2'];
    const plantCategoryAvailable = ['Herb', 'Flower', 'Fruit', 'Succulent', 'Vegetable', 'Other']
    const greenHouseCategory = ['Herb', 'Herb', 'Fruit', 'Flower', 'Succulent', 'Other']

    /*Getting list of green houses present */
    const ghNameList = greenHouseNames.map((greenHouseNames,i) => 
        <option key ={'GH_'+i}>{greenHouseNames}</option>
    )

    /*Getting list of categories available present */
    const plantAvail = plantCategoryAvailable.map((plantCategoryAvailable,i) => 
        <option className = 'min-max' key ={'CatAv'+i}>{plantCategoryAvailable}</option>
     )
     /*When first get to page, auto load onto first GH, but after the user makes a selection all the aspect change*/
     const [ghName, setValue] = React.useState(greenHouseNames[0]);
     const handleChangeName = (event) => {
       setValue(event.target.value);
     };

    const handleChangeCat = (event) => {
        const value = event.target.value;
        setValue(event.target.value);
        greenHouseCategory[index] = event.target.value;
    };
      
  
     /* Getting min and max's for the plant depending on Category & Min/Max's*/
     var index = greenHouseNames.indexOf(ghName)
     const [tempMin, tempMax, humidMin, humidMax, lightMin, lightMax] = gettingMinMax(plantCategoryAvailable.indexOf(greenHouseCategory[index]))

    return (
        <div>
            <div>
                <select  className = 'drop-down-menu' value ={ghName} onChange={handleChangeName}>
                    {ghNameList}
                </select>
            </div>

            <div>
                <h1 className ='heading-h1-setting'>Overview:</h1>
            </div>

            <div className='setting-2-column' >
                <p padding ='0'>
                    <label>
                        Name: <input className = 'min-max' name ="myInput" defaultValue={ghName}/>
                    </label>
                </p>
                <p>
                    <text >Plant Category: </text>

                    <select  className = 'min-max' value ={greenHouseCategory[index]} onChange = {handleChangeCat}>
                        {plantAvail}
                    </select>


                </p>
            </div>

            <div>
                <h1 className ='heading-h1-setting'>Ideal Growing Conditions:</h1>
            </div>

            <div class='setting-3-column'>
                <div>
                    <h2 className = 'heading-h2-setting'>Temperature</h2>
                    <p>
                        <text>Min:</text>
                        <text className='min-max'>{tempMin}</text>
                    </p>
                    <p>
                        <text >Min:</text>
                        <text className='min-max'>{tempMax}</text>
                    </p>
                </div>
                <div>
                    <h2 className = 'heading-h2-setting'>Humidity</h2>
                    <p>
                        <text>Min:</text>
                        <text className='min-max'>{humidMin}</text>
                    </p>
                    <p>
                        <text>Min:</text>
                        <text className='min-max'>{humidMax}</text>
                    </p>
                </div>
                <div>
                    <h2 className = 'heading-h2-setting'>Light Intensity</h2>
                    <p>
                        <text>Min:</text>
                        <text className='min-max'>{lightMin}</text>
                    </p>
                    <p>
                        <text>Min:</text>
                        <text className='min-max'>{lightMax}</text>
                    </p>
                </div>
            </div>
            <div>
                <button className ='drop-down-menu'>Save</button>
            </div>
        </div>
    );
  }
  
  export default Setting;