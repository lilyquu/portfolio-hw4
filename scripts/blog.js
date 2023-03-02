const createBtn = document.getElementById('createbtn');
const createDialog = document.getElementById('promptDialog');

const selectEl = createDialog.querySelector('input');
const outputBox = document.querySelector('output');
const inputBox = document.querySelector('input');

const btncancel = document.getElementById('btncancel');
const btncreate = document.getElementById('btncreate');

const input = document.querySelector('input');
const title = input[0];
const date = input[1];
const summary = input[2];

createBtn.addEventListener('click', () => {
    createDialog.showModal();
});