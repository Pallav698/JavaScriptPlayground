const input = document.querySelector('input');
const buttons = document.querySelectorAll('button');

let string = "";
buttons.forEach( button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerText === '='){
            string  = eval(string);
            input.value = string;
        }
        else if(e.target.innerText === 'AC'){
            string = '';
            input.value = string;
        }
        else if(e.target.innerText === 'DEL'){
            string = string.slice(0, -1);
            input.value = string;
        }
        else{
            string += e.target.innerText;
            input.value = string;
        }
    })
})



