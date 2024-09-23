
// start validate function 
function validate(){
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var confirm = document.getElementById("confirm").value;

    var result = document.getElementById("result");

    result.setAttribute("class","text-center alert alert-danger");

    if (user=="" && email=="" && pass=="" && confirm==""){
        result.innerHTML = "Enter Data In Form";
        return false;
    }else if (user.length<5 || user.length>15){
        result.innerHTML="Enter 5-15 charcter In Name";
        return false;
    }else if (email.indexOf("@")==-1 || email.indexOf(".com")==-1){
        result.innerHTML="Enter Valid Email";
        return false;
    }else if (pass==""){
        result.innerHTML="Enter your Password";
        return false;
    }else if (pass.length<8){
        result.innerHTML="Weak Password";
        return false;
    }else if(pass.length>20){
        result.innerHTML="Enter Password less Than 20 ";
        return false;
    }else if (confirm==""){
        result.innerHTML="Enter Confirm";
        return false;
    }else if (confirm!=pass){
        result.innerHTML="Confirm Not Match";
        return false;
    }else {
        return true
    }
}
// end validate function 