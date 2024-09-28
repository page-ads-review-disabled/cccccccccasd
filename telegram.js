  function validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    function EnableDisable(name) {
      //Reference the Button.
      var submit = document.getElementById("submit");

      //Verify the TextBox value.
      if (name.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        submit.disabled = false;
      } else {
        //Disable the TextBox when TextBox is empty.
        submit.disabled = true;
      }
      //Verify the TextBox value.
      if (phone.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        submit.disabled = false;
      } else {
        //Disable the TextBox when TextBox is empty.
        submit.disabled = true;
      }
      //Verify the TextBox value.
      if (email.value.trim() != "") {
        //Enable the TextBox when TextBox has value.
        submit.disabled = false;
      } else {
        //Disable the TextBox when TextBox is empty.
        submit.disabled = true;
      }
    };