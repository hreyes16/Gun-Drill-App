let defaultDeflection = document.getElementById('deflection-input');
let defaultElevation = document.getElementById('elevation-input');
let handleSmallDataBtn = document.getElementById('generate-small-data');
let handleLargeDataBtn = document.getElementById('generate-large-data');
let resetData = document.getElementById('reset-btn');

function checkDataLimits(){
    let decrement = false;

    if( defaultDeflection.value > 3200 && defaultElevation.value > 1100)
    decrement = true;
    
    if(defaultDeflection.value < 2800 && defaultElevation.value < 800 )
    decrement = false;
  
  
    if(!decrement){
        defaultDeflection.value = (++defaultDeflection.value) + (randomSmallDef()); 
        defaultElevation.value = (++defaultElevation.value) + (randomSmallElevation());
    }
    else if(decrement){

        defaultDeflection.value = (--defaultDeflection.value) - (randomSmallDef()); 
        defaultElevation.value = (--defaultElevation.value) - (randomSmallElevation());
        
    }
}




function randomSmallDef(min, max){
    min = Math.ceil(20);
    max = Math.ceil(40)
    return parseInt(Math.random()*(max-min) + min);
}

function randomSmallElevation(min, max){
    min = Math.ceil(35);
    max = Math.ceil(40);
    return parseInt(Math.random()*(max-min) + min);
}



handleSmallDataBtn.addEventListener("click", (e) =>{
    // defaultDeflection.value = (++defaultDeflection.value) + (randomSmallDef()); 
    // defaultElevation.value = (++defaultElevation.value) + (randomSmallElevation());
    checkDataLimits();
 
})

resetData.addEventListener('click', () =>{
    defaultDeflection.value = 2800;
    defaultElevation.value = 0800;
})