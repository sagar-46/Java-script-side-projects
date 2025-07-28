const min = 1;
const max = 100;
const ans = Math.ceil(Math.random() * 100);
let attempt = 0;
let value;

const msg = document.getElementById("msg");

function play(){
        value = document.getElementById("value").value;
        value = Number(value);
        if(isNaN(value)){
            msg.textContent = "Please enter a valid number"
            
        }else if(value < min || value > max){
            msg.textContent = "Please enter number between 1 and 100"
        }else{
            attempt++;
            if(value < ans){
                msg.textContent = "Too low ! Try again"
            }else if (value > ans){
                msg.textContent = "Too high ! Try again"
            }else{
                msg.textContent = `Coorect answer , The answer took ${attempt} attempts`
                
            }
        }
    }
