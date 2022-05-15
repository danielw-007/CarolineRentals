function validate(){
    let userName = document.getElementById("inputNama").value;
    let userEmail = document.getElementById("inputEmail").value;
    let gen = document.getElementsByName('gender');
    let userCity = document.getElementById("citySelect").value;
    let userAddress = document.getElementById("address").value;
    let substr = "Street";
    let substr2 = "street";
    let chk = "@";

    let validateEmail = userEmail.includes(chk);

    if(userName.length < 1){
        alert("Please Input Your Name!");
        return false;
    } else

    if(userEmail.length < 1 || validateEmail==false || userEmail.indexOf(chk)!=userEmail.lastIndexOf(chk)){
        alert("Please Input Your Email!");
        return false;
    } else

    if(!(gen[0].checked || gen[1].checked)){
        alert("Please Choose Your Gender!");
        return false;
    } else

    if(userCity.length < 1){
        alert("Please Choose A City!");
        return false;
    } else

    if(userAddress.includes(substr) || userAddress.includes(substr2) && userAddress.length > 0){
        return true;
    } else {
        alert("Please Specify Your Address Including the Word Street!")
        return false;
    }

}

document.getElementById("btnSubmit").onclick = function (){
    if(validate()){
        alert("Thank You for Register :)");
    }
}