const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');

const alertDialog = document.getElementById('alertDialog');
const confirmDialog = document.getElementById('confirmDialog');
const promptDialog = document.getElementById('promptDialog');

const inp = document.querySelector('input');
const out = document.querySelector('output');
const okBtn = confirmDialog.querySelector('#OKBtn');
const outputBox = document.querySelector('output');

// "Show the dialog" button opens the <dialog> modally
alertBtn.addEventListener('click', () => {
    alertDialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    confirmDialog.showModal();
});

promptBtn.addEventListener('click', () => {
    promptDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button


// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
confirmDialog.addEventListener('close', () => {
    out.value = `ReturnValue: ${confirmDialog.returnValue}.`;
});