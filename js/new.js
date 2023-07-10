function formData() {
    var inputEmail3 = document.forms["userform"]["Email"];
    var inputPassword3 = document.forms["userform"]["Password"];
    if (inputEmail3.value == "") {
      window.alert("Mobile Number Or Email");
      inputEmail3.focus();
      return false;
    }
  
    if (inputPassword3.value == "") {
      window.alert("Password");
      inputPassword3.focus();
      return false;
    }
    return true;
  }