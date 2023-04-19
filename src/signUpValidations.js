function validate() {
  var username = document.getElementById('username').value;
  var name = document.getElementById('name').value;
  var lastname = document.getElementById('lastname').value;
  var password = document.getElementById( 'password' ).value;
  var confirmpassword = document.getElementById( 'confirmpassword' ).value;
  var dateofbirth = document.getElementById('dateofbirth').value;
  //console.log(allFieldsFilled(username , name , lastname , password , confirmpassword , dateofbirth));
  //console.log(passwordValidation(password , confirmpassword));
  //console.log(containsSpaceUsername(username));
  //console.log(containsPasswordCorrectFormat(password));
  // console.log(dateFormat(dateofbirth));

  if ( allFieldsFilled( username, name, lastname, password, confirmpassword, dateofbirth ) === false )
  {
    alert( 'Please fill all the data' );
  } else if ( passwordValidation( password, confirmpassword ) === false )
  {
    alert( 'password and confirm password should match' );
  } else if ( containsSpaceUsername( username ) === true )
  {
    alert( 'Username cannot have space' );
  } else if ( containsPasswordCorrectFormat( password ) === false )
  {
    alert( 'password should have minumum 6 characters and have no space' );
  } else if ( dateFormat(dateofbirth) === false )
  {
    alert( 'Enter the date in correct format' );
  } else {
    document.form1.action  = 'values.php'; 
  }

}
function allFieldsFilled(username , name , lastname , password , confirmpassword , dateofbirth){
  if(username===''){
    return false;
  }else if(name===''){
    return false; 
  }else if(lastname===''){
    return false; 
  }else if(password===''){
     return false; 
    }else if(confirmpassword===''){
      return false; 
    }else if(dateofbirth===''){
      return false; 
    }else{
      return true;
    }
}

function passwordValidation(password , confirmpassword){
  if(password===confirmpassword){
    return true; 
  }else{
    return false; 
  }
}

function containsSpaceUsername(username){
  const regex = /\s/g;
  if(regex.test(username)){
    return true; 
  }else{
    return false; 
  }
}
function containsPasswordCorrectFormat(password){
  const regex = /\s/g;
  if(password.length < 6 || regex.test(password)){
    return false; 
  }
  else{
    return true; 
  }
}

function dateFormat(dateofbirth){
  const regex = /^\d{4}[-]\d{2}[-]\d{2}$/;
  if(regex.test(dateofbirth)){
    return true; 
  }else{
    return false;
  }
}

validate(); 