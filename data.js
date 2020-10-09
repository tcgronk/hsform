"use strict";

const hsApiKey="b5caaf7a-3349-4fcd-9c7c-de0776f99628"
const hsURL="https://app.hubspot.com/oauth/authorize?"

function hubspotForm(){
    $("#contactForm").submit(event=>{
        event.preventDefault();
        $("#formResponse").removeClass("hidden").text("Form Submitted")

    })
}

function createApp(){
    hubspotForm();
}

$(createApp);