function validate(){

    let userEmail = document.getElementById("inputEmail").value;
    let userPassword = document.getElementById("inputPassword").value;

    if(userEmail.length<1){
        alert("Please Input Email!");
        return false;
    }
    if(userPassword.length<1){
        alert("Please Input Password!");
        return false;
    }
    return true;
}

document.getElementById("btnSubmit").onclick = function (){
    if(validate()){
        alert("Thank You for Login :)");
    }
}