"use strict";

function hubspotForm(){
    $("#contactForm").submit(event=>{
        event.preventDefault();
        addContact(event.target.firstname.value, event.target.email.value, event.target.phone.value)
        $("#formResponse").removeClass("hidden").text("Form Submitted")

    })
    

}

function addContact(firstname, email, phone){
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
        }).then((response)=>{
            console.log(response.json())
        })
}

function createApp(){
    hubspotForm();
}

$(createApp);