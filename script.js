//CONSTANTS
//DOM ELEMENTS
const tipInput = document.querySelector("#tip-input");
const total = document.querySelector("#total-amount");
const error = document.querySelector("#error")
const tipSection = document.querySelector("#tips-list");
const dayShiftSection = document.querySelector("#day-tips-list");
const nightShiftSection = document.querySelector("#night-tips-list");
//JAVASCRIPT VARIABLES
const dayShift = [];
const nightShift = [];
const shiftSection = new Date().getHours() < 15? dayShiftSection : nightShiftSection;
const array = new Date().getHours() > 14? nightShift: dayShift;
const hr = new Date().getHours() > 13? new Date().getHours() -12: new Date().getHours() == 0? 12: new Date().getHours();
const min = new Date().getMinutes() < 10? `0${new Date().getMinutes()}`: new Date().getMinutes(); 
const timePeriod = new Date().getHours() < 13 ? "AM" : "PM";
const tipsList = document.querySelector("#tips-list");

//VARIABLES
let tipValue = tipInput.value;

//LISTENERS
tipInput.addEventListener("input", ()=> {
    tipValue = tipInput.value;
    if(isNaN(parseFloat(tipValue))){
        tipValue = 0;
    }
})

//FUNCTIONS
function addTip(){
    //addTip VARIABLES
    let totalValue = parseFloat(total.innerHTML);
    let newTotal;
    
    if(isNaN(parseFloat(tipValue)) || isNaN(totalValue)){       
        error.innerText = "That is not a number!"
        return;
        }
       
        newTotal = parseFloat(tipValue) + totalValue;
        total.innerHTML = newTotal.toFixed(2); 
        array.push({tip:parseFloat((tipValue)), date:new Date(), time:`${hr}:${min}${timePeriod}`})
        array.map((arr) =>{
            const li = document.createElement("li");
            const text = document.createTextNode(`${arr.time} ${arr.tip}`);
            console.log(arr.time)
            li.appendChild(text);
            shiftSection.appendChild(li);
        })
           
}
