const button = document.getElementById("button");
const p = document.getElementById("p");
const heading = document.getElementById("heading");
let arr = ["halo", "iwan777", "iqbal", "siregar", "amartukam", "gacor", "zeus", "67", "slot", "win the prize"]
 


let shaking = 0.0;



button.onmousedown = () => {
    shaking = 0.25;
    p.innerText = arr[Math.floor(Math.random() * arr.length)]

    
    

}

let prevTimestamp = 0;
function frame (timestamp) {
    window.requestAnimationFrame(frame);
    const deltaTime = (timestamp - prevTimestamp)/1000
    prevTimestamp = timestamp

    if(shaking > 0) {
        const x = Math.random() * 2 - 1 + 50;
        const y = Math.random() * 2 - 1 + 50;
        button.style.left = `${x}%`;
        button.style.top = `${y}%`;
        shaking -= deltaTime
    }

}


window.requestAnimationFrame(frame);