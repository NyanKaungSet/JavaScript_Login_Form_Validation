let username = document.getElementById("username");
let password = document.getElementById("password");
var attempt = 2;

document.addEventListener("keypress", e => {
    if(e.key === "Enter") {
        Login();
    }
})

function Login(){  
    let usernameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;

    if(usernameValue == "User1" && passwordValue == "1"){
        alert("Welcome " + usernameValue + ". Please wait for a moment");
        setTimeout(() => {
            window.location.href="mainpage.html";
        }, 3000);
    }
    else{
        attempt --;
        alert("Access Denied!!!"+" You have left "+attempt+" attempt;");
    }
    if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("button").disabled = true;
    } 
} 

function User(){
    let usernameValue = document.getElementById("username").value;

    if(usernameValue =="User1"){
        username.style.backgroundColor = "green";
        username.style.color = "white";
    }
    else{
        username.style.backgroundColor = "red";
        username.style.color = "white";
    }
}

function PW(){
    let passwordValue = document.getElementById("password").value;

    if(passwordValue =="1"){
        password.style.backgroundColor = "green";
        password.style.color = "white";
    }
    else{
        password.style.backgroundColor = "red";
        password.style.color = "white";
    }
}


$("input").bind("keydown", function(event) {
    if (event.which === 40) {
        event.stopPropagation();
        event.preventDefault();
        $(':input:eq(' + ($(':input').index(this) + 1) + ')').focus();
    }
    if (event.which === 38) {
        event.stopPropagation();
        event.preventDefault();
        $(':input:eq(' + ($(':input').index(this) - 1) + ')').focus();
    }
});