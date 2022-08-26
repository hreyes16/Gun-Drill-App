let defaultDeflection = document.getElementById('deflection-input');
let defaultElevation = document.getElementById('elevation-input');
let handleSmallDataBtn = document.getElementById('generate-small-data');
let handleLargeDataBtn = document.getElementById('generate-large-data');
let resetData = document.getElementById('reset-btn');
let decrement = false;
function checkDataLimits(size) {

    if (defaultDeflection.value > 3200 && defaultElevation.value > 1100)
        decrement = true;

    if (defaultDeflection.value < 2800 && defaultElevation.value < 800)
        decrement = false;


    if (!decrement) {
        switch (size) {
            case "large": {
                defaultDeflection.value = (++defaultDeflection.value) + 400
                defaultElevation.value = (++defaultElevation.value) + 400;
            }
            case "small": {
                defaultDeflection.value = (++defaultDeflection.value) + (randomSmallDef());
                defaultElevation.value = (++defaultElevation.value) + (randomSmallElevation());
            }

        }
    }
    else if (decrement) {
        switch (size) {
            case "large": {
                defaultDeflection.value = (++defaultDeflection.value) - 400
                defaultElevation.value = (++defaultElevation.value) - 400;
            }
            case "small": {
                defaultDeflection.value = (--defaultDeflection.value) - (randomSmallDef());
                defaultElevation.value = (--defaultElevation.value) - (randomSmallElevation());
            }

        }


    }


    //GET TIME
    //GET CURRENT VALUES
    populateTable();
}
//
function populateTable() {
    //01
    let date = new Date();

    const actualTime = `${date.getHours()}:${String(date.getMinutes()).padStart(2, 0)}:${String(date.getSeconds()).padStart(2, 0)}`
    const currDeflection = defaultDeflection.value;
    const currElevation = defaultElevation.value;
    console.log(actualTime, currDeflection, currElevation)

    const table = document.getElementById('table');
    var newRow = document.createElement('tr');
    var timeColumn = document.createElement('td');
    var deflectionColumn = document.createElement('td')
    var elevationColumn = document.createElement('td')
    timeColumn.innerText = actualTime;
    deflectionColumn.innerText = currDeflection;
    elevationColumn.innerText = currElevation;

    // newRow.append(timeColumn, deflectionColumn, elevationColumn);
    newRow.appendChild(timeColumn);
    newRow.appendChild(deflectionColumn);
    newRow.appendChild(elevationColumn);
    table.appendChild(newRow);

}



 /*
TODO 



*/


function randomSmallDef(min, max) {
    min = Math.ceil(20);
    max = Math.ceil(40)
    return parseInt(Math.random() * (max - min) + min);
}

function randomSmallElevation(min, max) {
    min = Math.ceil(35);
    max = Math.ceil(40);
    return parseInt(Math.random() * (max - min) + min);
}



handleSmallDataBtn.addEventListener("click", (e) => {
    // defaultDeflection.value = (++defaultDeflection.value) + (randomSmallDef()); 
    // defaultElevation.value = (++defaultElevation.value) + (randomSmallElevation());
    checkDataLimits("small");

})
handleLargeDataBtn.addEventListener("click", (e) => {
    // defaultDeflection.value = (++defaultDeflection.value) + (randomSmallDef()); 
    // defaultElevation.value = (++defaultElevation.value) + (randomSmallElevation());
    checkDataLimits("large");

})

resetData.addEventListener('click', () => {
    defaultDeflection.value = 2800;
    defaultElevation.value = 0800;
})