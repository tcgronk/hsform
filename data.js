"use strict";

function hubspotForm(){
    $("#contactForm").submit(event=>{
        event.preventDefault();
        apiTest();
        $("#formResponse").removeClass("hidden").text("Form Submitted")

    })
    

}

function apiTest(){
    $.post( "https://forms.hubspot.com/collected-forms/submit/form",function(){
        alert("success")
    })
}

function createApp(){
    hubspotForm();
}

$(createApp);