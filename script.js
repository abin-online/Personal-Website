function validateForm(){
var form = document.getElementById("form");
var email = document.getElementById("email").value;
var fname = document.getElementById("fname").value;
var sname = document.getElementById("sname").value;
var tel = document.getElementById("tel").value;
var text = document.getElementById("text");
var ftext = document.getElementById("ftext");
var stext = document.getElementById("stext");
var ptext = document.getElementById("ptext");

/* validation for email */

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (email.match(pattern)){
form.classList.add("valid");
form.classList.remove("invalid");
text.innerHTML = "Valid Email";
text.style.color ="#00ff00";

}
else{
form.classList.remove("valid");
form.classList.add("invalid");
text.innerHTML = "Invalid Email";
text.style.color ="#ff0000";
}

if(email == ""){
form.classList.remove("valid");
form.classList.add("invalid");
text.innerHTML = "";
text.style.color ="#ff0000";
}


/* validation for first name */


var fpattern = /^[a-zA-Z]{3,20}$/;
if (fname.match(fpattern)){
  form.classList.add("valid");
  form.classList.remove("invalid");
  ftext.innerHTML = "Valid Name";
  ftext.style.color ="#00ff00";
  
  }
  else{
  form.classList.remove("valid");
  form.classList.add("invalid");
  ftext.innerHTML = "Invalid Name";
  ftext.style.color ="#ff0000";
  }
  
  if(fname == ""){
  form.classList.remove("valid");
  form.classList.add("invalid");
  ftext.innerHTML = "";
  ftext.style.color ="#ff0000";
  }

  /* validation for second name */


var spattern = /^[a-zA-Z]{3,20}$/;
if (sname.match(spattern)){
  form.classList.add("valid");
  form.classList.remove("invalid");
  stext.innerHTML = "Valid Name";
  stext.style.color ="#00ff00";
  
  }
  else{
  form.classList.remove("valid");
  form.classList.add("invalid");
  stext.innerHTML = "Invalid Name";
  stext.style.color ="#ff0000";
  }
  
  if(sname == ""){
  form.classList.remove("valid");
  form.classList.add("invalid");
  stext.innerHTML = "";
  stext.style.color ="#ff0000";
  }

    /* validation for phone no: */


var ppattern = /^[0-9]{4,13}$/;
if (tel.match(ppattern)){
  form.classList.add("valid");
  form.classList.remove("invalid");
  ptext.innerHTML = "Valid Name";
  ptext.style.color ="#00ff00";
  
  }
  else{
  form.classList.remove("valid");
  form.classList.add("invalid");
  ptext.innerHTML = "Invalid Name";
  ptext.style.color ="#ff0000";
  }
  
  if(tel == ""){
  form.classList.remove("valid");
  form.classList.add("invalid");
  ptext.innerHTML = "";
  ptext.style.color ="#ff0000";
  }
}