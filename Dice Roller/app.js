function rollDice(){
    const num = document.getElementById("num").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    for(let i = 0; i < num;i++){
        const value = Math.floor(Math.random() *6)+1;
        values.push(value);
        images.push(`<img src="images/${value}.png">`);
    }
    diceResult.textContent = `dice:${values.join()}`;
    diceImages.innerHTML = images.join();
}
