from=document.querySelector("#select-1");
to=document.querySelector(".select-2");
inputTemp=document.querySelector(".input-from");
outputTemp=document.querySelector(".input-to");
button=document.querySelector("button");
let temp;
from.value="Choose";
to.value="Choose"; 
let temperatureName=["Farenheit","Celsius","Kelvin"]
let Temperature=[3];
let arr=[3];
let j;
let input=inputTemp;

function output(j){
 button.addEventListener("click",()=>{
     if(j==0) {   
        if (Number.isInteger(Temperature[j])) {
                outputTemp.value=`${Temperature[j]} F`;
            } 
            else {
                outputTemp.value=`${Temperature[j].toPrecision(5)} F`; 
            }
        }
    if(j==1) { 
        if (Number.isInteger(Temperature[j])) {
                outputTemp.value=`${Temperature[j]} \u00B0C` ;
            } 
            else {
                outputTemp.value=`${Temperature[j].toPrecision(5)} \u00B0C`; 
            }  
        }
        if(j==2) {   
                if (Number.isInteger(Temperature[j])) {
                        outputTemp.value=`${Temperature[j]} K`;
                    } 
                    else {
                        outputTemp.value=`${Temperature[j].toPrecision(5)} K`; 
                    }
                }
         });
}


to.addEventListener("change",()=>{
        if(to.value===temperatureName[0]) {
                  j=0
          }
        else if(to.value===temperatureName[1]) {
                j=1
          }
         else if(to.value===temperatureName[2]){
                 j=2
         }
         console.log(j);
         output(j);

})
function calculation(input) {
   Temperature[0] =(input * 9 / 5) + 32;
   Temperature[1]=(input);
   Temperature[2]=(input+ 273.15);
   for(let i=0;i<3;i++){
    console.log(Temperature[i]);
    
}
return;
}

button.addEventListener("click",()=>{
  
  console.log(inputTemp);
  if(isNaN(inputTemp.value)){
        alert("Kindly Enter a Number");
        inputTemp.focus();
  }
 else if(from.value===temperatureName[0]) {
        
            temp=(parseFloat(inputTemp.value)- 32) * 5 / 9;
            console.log(temp);
           }
         else if(from.value===temperatureName[1]) {
            temp=parseFloat(inputTemp.value);
           }
          else if(from.value===temperatureName[2]){
            temp=parseFloat(inputTemp.value)-273.15;
          
          }
         
          calculation(temp);
    
  });
 