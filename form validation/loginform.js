var v_name=/^[A-Za-z0-9]{3,20}$/;
var v_email=/^[/w.-%+]+@[/w.-]+\.[a-zA-z]{2,3}$/;
var v_username=/^[\w]{1,15}$/;
var v_password=/^[\w][!@#$%^&*()_]{8,2}$/;
 
function validate(form){
    var name = form.name.value;
    var email = form.email.value;
    var username = form.username.value;
    var password = form.password.value;
    var errors = [];
     
     if (!v_name.test(name)) 
     {
      errors[errors.length] = "You valid Name .";
     }

     if (!v_email.test(email)) 
     {
      errors[errors.length] = "You must enter a valid email address";
     }

     if (!v_username.test(username))
     {
      errors[errors.length] = "You valid UserName no special char ";
     }

     if (!v_password.test(password)) 
     {
      errors[errors.length] = "You must enter a valid Password ";
     }

     if (errors.length > 0) 
     {
      reportErrors(errors);
      return false;
     }
      return true;
    }
    function reportErrors(errors)
    {
     var msg = "Please Enter Valide Data...\n";
     for (var i = 0; i<errors.length; i++) {
     var numError = i + 1;
      msg += "\n" + numError + ". " + errors[i];
    }
     alert(msg);
    }