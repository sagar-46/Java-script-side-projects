const increase = document.getElementById("increaseBtn");
const decrease = document.getElementById("decreaseBtn");
const reset = document.getElementById("resetBtn");

const label = document.getElementById("counter");
let count = 0;

increase.onclick = function(){
    count++;
    label.textContent = count;
}
decrease.onclick = function(){
    count--;
    label.textContent = count;
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;
}