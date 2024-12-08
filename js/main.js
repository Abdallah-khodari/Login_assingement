var personname = document.getElementById("namesign");
var email = document.getElementById("emailsign");
var password = document.getElementById("passwordsign");
var sign = document.getElementById("signup");
var arr = JSON.parse(localStorage.getItem("details")) || [];

function adddetails() {
  var isValidpassword = validpassword();
  var isValidemail = validemail();
  var isUsername = username();
  if (isValidemail && isValidpassword &&  isUsername) {

    var details = {
      name: personname.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    };

    var check = arr.some(function (item) {
      return item.email === details.email;
    });

    if (check) {
      Swal.fire({
        title: "Email Already Exists",
        text: "Please try with another email",
        icon: "error",
      });
      email.classList.add("is-invalid");
      email.classList.remove("is-valid");
    } else {
      arr.push(details);
      localStorage.setItem("details", JSON.stringify(arr));
      Swal.fire({
        title: "Success",
        text: "Your account has been created successfully",
        icon: "success",
      });

      personname.value = "";
      email.value = "";
      password.value = "";
    }
  } else {
    Swal.fire({
      title: "Error",
      html: "Invalid Email or Password<br>Password must contain at least eight characters<br>including at least one number<br>both lower and uppercase letters, and at least one special character (#, ?, !).",
      icon: "error",
    });
  }
}

function validemail() {
  var regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var test = email.value.trim();
  
  if (test === "" || !regex.test(test)) {
    email.classList.add("is-invalid");
    email.classList.remove("is-valid");
    return false;
  } else {
    email.classList.add("is-valid");
    email.classList.remove("is-invalid");
    return true;
  }
}

function validpassword() {
  var regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  var test = password.value.trim();
  console.log(test)
  if (password.value === "" || !regex.test(password.value)) {
    password.classList.add("is-invalid");
    password.classList.remove("is-valid");
    return false;
  } else {
    password.classList.add("is-valid");
    password.classList.remove("is-invalid");
    return true;
  }
}

function username() {
  if (personname.value.trim()!=="") {
    
    personname.classList.add("is-valid");
    personname.classList.remove("is-invalid");
    return true;
  } else {
    personname.classList.add("is-invalid");
    personname.classList.remove("is-valid");
    return false;
  }
}



if (sign) {
  sign.addEventListener("click", adddetails);
}

var loginemail = document.getElementById("email");
var loginpassword = document.getElementById("password");
var login = document.getElementById("login");

login.addEventListener("click", function () {
  var email = loginemail.value.trim();
  var password = loginpassword.value.trim();

  if (!email || !password) {
    Swal.fire({
      title: "Error",
      text: "Please fill in all fields",
      icon: "error",
    });
    return;
  }

  var arr = JSON.parse(localStorage.getItem("details")) || [];

  var user = arr.find(function (web) {
    return web.email === email && web.password === password;
  });

  if (user) {
    localStorage.setItem("fixedname", user.name);
    window.location.href = "welcome.html";
  } else {
    Swal.fire({
      title: "Error",
      text: "Invalid email or password",
      icon: "error",
    });
  }
});
