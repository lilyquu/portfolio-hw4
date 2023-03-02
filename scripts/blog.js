const createBtn = document.getElementById('createbtn');
const createDialog = document.getElementById('createDialog');

const selectEl = createDialog.querySelector('input');
const outputBox = document.querySelector('output');
const inputBox = document.querySelector('input');

const btncancel = document.getElementById('btncancel');
const btncreate = document.getElementById('btncreate');

let input = document.querySelector('input');
let titlein = input[0];
let datein = input[1];
let summaryin = input[2];
let count = 0;

createBtn.addEventListener('click', () => {
    createDialog.showModal();
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
});

btncreate.addEventListener('click', () => {
    count = count + 1;
    input = document.querySelector('input');
    titlein = input[0];
    datein = input[1];
    summaryin = input[2];
    
    let myPost = {
        title : titlein,
        date : datein,
        summary : summaryin
    }
    
    window.localStorage.setItem(`myPost${count}`, JSON.stringify(myPost));
    
    window.localStorage.getItem('myPost1');
    
    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
})
