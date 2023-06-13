let storedData =  JSON.parse(localStorage.getItem('formDataArray')) || [];
function addData() {
    // Get form data
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var gender = document.getElementById("gender").value;
  
    // Validate form data
    if (firstName == "") {
      document.getElementById("stufname").innerHTML = "Please enter first name";
      return false;
    } else {
      document.getElementById("stufname").innerHTML = "";
    }
    if (lastName == "") {
      document.getElementById("stulname").innerHTML = "Please enter last name";
      return false;
    } else {
      document.getElementById("stulname").innerHTML = "";
    }
    if (email == "") {
      document.getElementById("stuemail").innerHTML = "Please enter email id";
      return false;
    } else {
      document.getElementById("stuemail").innerHTML = "";
    }
    if (password == "") {
      document.getElementById("stupassword").innerHTML = "Please enter password";
      return false;
    } else {
      document.getElementById("stupassword").innerHTML = "";
    }
    if (state == "-1") {
      document.getElementById("stustate").innerHTML = "Please select state";
      return false;
    } else {
      document.getElementById("stustate").innerHTML = "";
    }
    if (country == "-1") {
      document.getElementById("stucountry").innerHTML = "Please select country";
      return false;
    } else {
      document.getElementById("stucountry").innerHTML = "";
    }
    if (gender == "-1") {
      document.getElementById("stujender").innerHTML = "Please select gender";
      return false;
    } else {
      document.getElementById("stujender").innerHTML = "";
    }
  
    // Create object for form data
    var formData = {
      "First Name": firstName,
      "Last Name": lastName,
      "Email": email,
      "Password": password,
      "State": state,
      "Country": country,
      "Gender": gender,
    };
  console.log(formData);
  if (fname&&lname&&email&&password&&state&&country&&gender){
    storedData.push(formData);
    localStorage.setItem('formDataArray', JSON.stringify(storedData));
}
let getData = JSON.parse(localStorage.getItem('formDataArray'))
console.log(getData)

for (let i = 0; i < getData.length; i++) { //displays multiple announcements
   let text =
    "<td>" + getData[i].FirstName + "</td>"
    +"<td>" + getData[i].LastName + "</td>"
    +"<td>" + getData[i].Email+ "</td>"
    +"<td>" + getData[i].Password + "</td>"
    +"<td>" + getData[i].State + "</td>"
    +"<td>" + getData[i].Country + "</td>"
    +"<td>" + getData[i].Gender + "</td>"
   
document.getElementById('tableBody').innerHTML+=text;

}
}

  