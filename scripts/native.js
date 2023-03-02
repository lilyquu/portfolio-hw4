const alertbtn = document.getElementById('alert');
const confirmbtn = document.getElementById('confirm');
const promptbtn = document.getElementById("prompt");
const saferpromptbtn = document.getElementById("saferprompt");

alertbtn.addEventListener('click', function(){alert("alert")});

confirmbtn.addEventListener('click', function(){
    let text = "Confirm Here.";
    text = "The value returned by the confirm method is : " + confirm(text);
    document.getElementById("output").innerHTML = text;
});

promptbtn.addEventListener('click', ()=>{
    let pro = prompt("Please enter your prompt");
    if (pro == null){
        document.getElementById("output").innerHTML = "User didn't enter anything";
    }
    else {
        document.getElementById("output").innerHTML = pro;
    }
})