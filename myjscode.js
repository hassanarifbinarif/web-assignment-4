function calNameLength() {
    var nameCheck = document.getElementById("name").value;
  
    if(nameCheck.length <= 4) {
      document.getElementById('nameWarning').innerText = "Name should atleast be greater than 5 characters!";
      document.getElementById('name').style.borderColor = "red";
      return false;
    } else {
      document.getElementById('nameWarning').innerText = "";
      document.getElementById('name').style.borderColor = "black";
      return true;
    }
  }
  
  function calPassword() {
    var passwordCheck = document.getElementById('password');

    if(passwordCheck.value.length < 8) {
      password.style.borderColor = "red";
      document.getElementById('passwordWarning').innerText = "Password should atleast be greater than 8 characters!";
      return false;
    } else {
      document.getElementById('passwordWarning').innerText = "";
      password.style.borderColor = "black";
      return true;
    }
  }
  
  function confirmPassword() {
    var authenticatePassword = document.getElementById('confirm-password');
    var password = document.getElementById('password');

    if(authenticatePassword.value !== password.value) {
      document.getElementById('confirm-passwordWarning').innerText = "Passwords doesn't match!";
      confirm_password.style.borderColor = "red";
      return false;
    } else {
      document.getElementById('confirm-passwordWarning').innerText = "";
      confirm_password.style.borderColor = "black";
      return true;
    }
  }
  
  window.addEventListener('load', ()=> {
    document.getElementById('submit-form').addEventListener('click', submit);
  })
  
  function submit() {
    calNameLength();
    calPassword();
    confirmPassword();
    
    var email = document.getElementById('email');
  
    if(email.value.length == 0) {
      document.getElementById('emailWarning').innerText = "Email is required";
      email.style.borderColor = "red";
    } else {
      document.getElementById('emailWarning').innerText = "";
      email.style.borderColor = "black";
    }
  
    if(calNameLength() && calPassword() && confirmPassword()) {
      document.getElementById('submissionMessage').innerText = "Submitted";
      console.log("Return");
          
    } else return;
  }
  