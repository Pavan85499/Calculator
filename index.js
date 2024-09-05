/* const display = document.getElementById("display")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value +="";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
} 
 */

function clearDisplay() {
    
    document.getElementById("display").innerText = "";
}

function appendToDisplay(value) {
    
    document.getElementById("display").innerText += value;
}

function calculateResult() {
    try {
        const display = document.getElementById("display");
        const result = eval(display.innerText);
        display.innerText = result;
    } catch (error) {
        display.innerText = "Error";
    }
}
