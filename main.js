function display()
{
  document.getElementById("displayarea").innerHTML = document.getElementById("name").value; 
  document.getElementById("name").value = "";
  document.getElementById("displayarea").innerHTML = document.getElementById("email").value; 
  document.getElementById("email").value = "";
  document.getElementById("displayarea").innerHTML = document.getElementById("check").value; 
 document.getElementById("check").value = "";
 document.getElementById("displayarea").innerHTML = document.getElementById("country").value; 
  document.getElementById("country").value = "";
  document.getElementById("displayarea").innerHTML = document.getElementById("timezone").value; 
  document.getElementById("timezone").value = "";
  document.getElementById("displayarea").innerHTML = document.getElementById("inquiry").value; 
 document.getElementById("inquiry").value = "";
}
var btn = document.getElementById("send");
btn.addEventListener("click", display);