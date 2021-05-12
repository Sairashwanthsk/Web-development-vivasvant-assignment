
//Nav bar hover
var scroll1 = 0;
var navbar = document.querySelector('nav');
window.addEventListener("scroll", function(){
    var scroll2 = window.pageYOffset || document.documentElement.scroll2;
    if (scroll2 > scroll1){
        navbar.style.top="-50px";
    } else{
        navbar.style.top="0"
    }
    scroll1 = scroll2;
})


//Contact us form
function validation(){
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(firstname.length == 0){
        text = "Please Enter First name";
        error_message.innerHTML = text;
        return false;
    }
    if(lastname.length == 0){
        text = "Please Enter Last name";
        error_message.innerHTML = text;
        return false;
    }
    if(email.indexOf("@") == -1 || email.indexOf(".com") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone number";        
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 50){
        text = "Please Enter More Than 50 Characters";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    window.location.reload();
    return true;
}


