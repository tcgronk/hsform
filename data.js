"use strict";

let valid=false;

function hubspotForm() {
  $("#contactForm").submit((event) => {
    event.preventDefault();

        addContact(
            event.target.firstname.value,
            event.target.email.value,
            event.target.phone.value
          );
    
  });
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
      if(response.ok===true){
    $("#formResponse").removeClass("hidden").text("Form Submitted");
    $("input").empty()
      }else {
        $("#formResponse")
        .removeClass("hidden")
        .text("Error with submission. Please try again")
      }
}).catch(
    $("#formResponse")
    .removeClass("hidden")
    .text("Error with submission. Please try again")
    
  )
}

function resetForm(){
  $("#reset").click((event) => {
    event.preventDefault();
    $(".input").val("");
    $("#formResponse").text('')
    .addClass("hidden")
    hubspotForm();
  });

}



function createApp() {
  hubspotForm();
  resetForm();
}

$(createApp);
