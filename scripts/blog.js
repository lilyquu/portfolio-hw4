const createBtn = document.getElementById('createbtn');
const createDialog = document.getElementById('createDialog');

const selectEl = createDialog.querySelector('input');
const outputBox = document.querySelector('output');
const inputBox = document.querySelector('input');

const btncancel = document.getElementById('btncancel');
const btncreate = document.getElementById('btncreate');
const btnedit = document.getElementById('btnedit');
const btndelete = document.getElementById('btndelete');

let realtitle = document.getElementById('realtitle');
let realdate = document.getElementById('realdate');
let realsummary = document.getElementById('realsummary');

let input = document.querySelector('input');
let titlein = input[0];
let datein = input[1];
let summaryin = input[2];
let count = 0;

createBtn.addEventListener('click', () => {
    createDialog.showModal();
});

btncreate.addEventListener('click', () => {
    count = count + 1;
    input = document.querySelector('input');
    titlein = document.getElementById('titleinput');
    datein = document.getElementById('dateinput');
    summaryin = document.getElementById('summaryinput');

    realtitle = document.getElementById('realtitle');
    realdate = document.getElementById('realdate');
    realsummary = document.getElementById('realsummary');
    
    let myPost = {
        title : titlein,
        date : datein,
        summary : summaryin
    }
    
    window.localStorage.setItem(`myPost${count}`, JSON.stringify(myPost));

    var titlee = document.createTextNode(realtitle);
    var datee = document.createTextNode(realdate);
    var summaryy = document.createTextNode(realsummary);
    document.body.appendChild(titlee);
    document.body.appendChild(datee);
    document.body.appendChild(summaryy)

    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
})
