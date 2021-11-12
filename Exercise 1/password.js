function validate() {
    var password1 = document.getElementById("pw").value; //adding the value gives an actual value instead of an object i guess
    var password2 = document.getElementById("pw2").value;
    if (password1 != password2) {
        alert("The passwords entered do not match");
    }
    if (password1.length < 8) {
        alert("passwords are not at least 8 characters long");
    }
}