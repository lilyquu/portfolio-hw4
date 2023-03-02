const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');

const alertDialog = document.getElementById('alertDialog');
const confirmDialog = document.getElementById('confirmDialog');
const promptDialog = document.getElementById('promptDialog');

const selectEl = confirmDialog.querySelector('select');
const out = document.getElementById('out');
const confirmBtnn = confirmDialog.querySelector('#OKBtn');

// "Show the dialog" button opens the <dialog> modally
alertBtn.addEventListener('click', () => {
    alertDialog.showModal();
});

confirmBtn.addEventListener('click', () => {
    confirmDialog.showModal();
});

// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener('change', (e) => {
    confirmBtnn.value = selectEl.value;
});

// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
confirmDialog.addEventListener('close', () => {
    out.value = `ReturnValue: ${confirmDialog.returnValue}.`;
});