function validateForm()
{
  passwordLength =document.getElementById("password").value.length
  opassword =document.getElementById("password").value
  email = document.getElementById("email").value
  cpassword = document.getElementById("confirm-password").value
  
  if(passwordLength<5|| passwordLength>10)
    alert("Password must be 5-10 characters.")
  if(opassword != cpassword)
    alert("The password and confirmation password do not match.")
  if(email.includes('@'&&'.')==false)
    alert("Email is not valid.")
  
}
