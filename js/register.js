$(document).ready(function() {
$("#logIn").last().click(function() {
  $("#login").show(),
    $("#signup").hide();

});
  $("#signUp").click(function(){
    $("#signup").show(),
      $("#login").hide();
  });

});




function check(form) {
  if (form.userEmail.value == "bettymutai00@gmail.com" && form.pswrd.value == "hellothere") {
    window.open('index.html');
  } else {
    alert("Error Password or Email");
  }
}



function validate(myForm) {
  var div = document.getElementById("myName");
  div.style.color = "red";
  if (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  if (myForm.fullname.value.length == 0) {
    div.appendChild(document.createTextNode("Name cannot be blank"));
    myForm.fullname.focus();
    return false;
  }
  div = document.getElementById("myEmail");
  div.style.color = "red";
  if (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  regex = /(^\w+\@\w+\.\w+)/;
  match = regex.exec(myForm.emailaddress.value);
  if (!match) {
    div.appendChild(document.createTextNode("Invalid Email"));
    myForm.emailaddress.focus();
    return false;
  }
  div = document.getElementById("myPwd");
  div.style.color = "red";
  if (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  if (myForm.password.value.length <= 5) {
    div.appendChild(document.createTextNode("The password should be of at least size 6"));
    myForm.password.focus();
    return false;
  }

  var Contactslength = myForm.contactno.value.length;
  if (Contactslength < 10 || Contactslength > 10) {
    window.alert("Invalid Contact Number Entered");
    myForm.contactno.focus();
    return false;
  }

  div = document.getElementById("myRepwd");
  div.style.color = "red";
  if (div.hasChildNodes()) {
    div.removeChild(div.firstChild);
  }
  if (myForm.password.value != userForm.repassword.value) {
    div.appendChild(document.createTextNode("The two passwords don't match"));
    myForm.password.focus();
    return false;
  }
  return true;
}
