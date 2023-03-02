const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');

const alertDialog = document.getElementById('alertDialog');
const confirmDialog = document.getElementById('confirmDialog');
const promptDialog = document.getElementById('promptDialog');

const selectEl = confirmDialog.querySelector('select');
const outputBox = document.querySelector('output');
const inputBox = document.querySelector('input');

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

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
confirmDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${confirmDialog.returnValue}.`;
});

confirmDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${inputBox.Value}.`;
});