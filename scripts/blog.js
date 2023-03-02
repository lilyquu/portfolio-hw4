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

    realtitle = document.getElementById('realtitle').nodeValue;
    realdate = document.getElementById('realdate').nodeValue;
    realsummary = document.getElementById('realsummary').nodeValue;
    
    let myPost = {
        title : titlein,
        date : datein,
        summary : summaryin
    }
    
    window.localStorage.setItem(`myPost${count}`, JSON.stringify(myPost));

    document.body.append(titlein);
    document.body.append(datein);
    document.body.append(summaryin);
    realtitle = titlein;
    realdate = datein;
    realsummary = summaryin;

    var temp = document.getElementsByTagName("template")[0];
    var clon = temp.content.cloneNode(true);
    document.body.appendChild(clon);
})
