"use strict";


function hubspotForm() {
  $(".input").change(function(){
    $("#formResponse").text("").addClass("hidden")});
  $("#contactForm").submit((event) => {
    event.preventDefault();

    addContact(
      event.target.firstname.value,
      event.target.lastname.value,
      event.target.email.value,
      event.target.phone.value,
      event.target.company.value,
    );
  });
}
function addContact(firstname,lastname, email, phone,  company) {
  return fetch("http://localhost:8000", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      phone,
      company,
    }),
  })
  .then((response) => {
    console.log(response)
    if (response.ok) {
      $("#formResponse").removeClass("hidden").text("Form Submitted");
    } else{
      $("#formResponse")
        .removeClass("hidden")
        .text("Error with submission. Please try again");
          }
  })
    .catch(error=>{
      $("#formResponse")
        .removeClass("hidden")
        .text("Error with form. Please try again")
    });
}

function resetForm() {
  $("#reset").click((event) => {
    event.preventDefault();
    $(".input").val("");
    $("#formResponse").text("").addClass("hidden");
    hubspotForm();
  });
}

function createApp() {
  hubspotForm();
  resetForm();
}

$(createApp);
