"use strict";

let valid=false;

function hubspotForm() {
  $("#contactForm").submit((event) => {
    event.preventDefault();
    console.log("Validating")
    validate(event);
    console.log(`Form data is valid: ${valid}`)
    if(valid===true){
        addContact(
            event.target.firstname.value,
            event.target.email.value,
            event.target.phone.value
          );
    }
    
  });
}
function validate(event) {
  if (event.target.phone.value.length < 10) {
      console.log("under 10")
      valid=false
    $("#formResponse")
      .removeClass("hidden")
      .text("Form not submitted, please see phone number for errors");
  } else {
      valid=true   
  }
}
function addContact(firstname, email, phone) {
  return fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      email,
      phone,
    }),
  }).then((response) => {
    $("#formResponse").removeClass("hidden").text("Form Submitted");
}).catch(
    $("#formResponse")
    .removeClass("hidden")
    .text("Form not submitted, please check for errors")
  )
}

function createApp() {
  hubspotForm();
}

$(createApp);
