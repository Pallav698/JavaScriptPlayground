let btn = document.getElementById('btn');
let bulb = document.getElementById('img');

btn.addEventListener('click', handleClick);

function handleClick() {
    if(btn.innerText === 'Turn On'){
        btn.innerText = 'Turn Off';
        bulb.src = 'Resources/Off.jpg';
    }
    else{
        btn.innerText = 'Turn On';
        bulb.src = "Resources/On.avif";
    }
    console.log("dsfkjasdfjka");
}

