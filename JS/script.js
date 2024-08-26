  function validateForm() {
    var x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("Email must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["lname"].value;
    if (x == "") {
      alert("A last name must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("A first name must be filled out");
      return false;
    }
  }