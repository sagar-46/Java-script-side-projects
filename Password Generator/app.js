function generate(){
    const length = document.getElementById("passwordLength").value;
    const lower = document.getElementById("lower").checked;
    const upper = document.getElementById("upper").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbols").checked;
    const msg = document.getElementById("msg");

    const lowerchar = "abcdefghijklmnopqrstuvwxyz";
    const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberchar = "0123456789";
    const symbolchar = "!@#$%^&*()_+{}:<>?[];',./\|'";
    let allowed = "";
    let password = "";

    allowed += lower ? lowerchar : "";
    allowed += upper ? upperchar : "";
    allowed += number ? numberchar : "";
    allowed += symbol ? symbolchar : "";

    for(let i = 0;i < length;i++){
        const rand = Math.floor(Math.random()*allowed.length);
        password += allowed[rand];
    }
    msg.textContent = `Password generated is ${password}`;
}
