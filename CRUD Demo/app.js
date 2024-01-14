const input = document.querySelector('input');
const lstCon = document.querySelector(".list-container");
function addTopic() {
    if (input.value === ''){
        alert('Please select a topic');
    }
    else {
        let li = document.createElement('li');
        li.innerText = input.value;
        lstCon.appendChild(li);
        let editBTn = document.createElement('button');
        editBTn.classList.add('edit-btn');
        editBTn.innerText = 'Edit';
        li.appendChild(editBTn);
        let deleteBTn = document.createElement('button');
        deleteBTn.innerText = 'Delete';
        li.appendChild(deleteBTn);
    }
    input.value = '';
}

lstCon.addEventListener('click' ,(e) => {
    if (e.target.className === 'edit-btn') {
      e.target.parentElement.remove();
    }

    console.log(e.target.className);
})