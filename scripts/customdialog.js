const alertBtn = document.getElementById('alert');
const confirmBtn = document.getElementById('confirm');
const promptBtn = document.getElementById('prompt');

const alertDialog = document.getElementById('alertDialog');
const confirmDialog = document.getElementById('confirmDialog');
const promptDialog = document.getElementById('promptDialog');

// "Show the dialog" button opens the <dialog> modally
alertBtn.addEventListener('click', () => {
    alertDialog.showModal();
});


// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
alertDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${alertDialog.returnValue}.`;
});
