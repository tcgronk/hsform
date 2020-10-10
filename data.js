"use strict";

function hubspotForm(){
    $("#contactForm").submit(event=>{
        event.preventDefault();
        apiTest();
        $("#formResponse").removeClass("hidden").text("Form Submitted")

    })
    

}

function apiTest(){
    $.post( "https://js.hs-banner.com/8612571.js",function(){
        alert("success")
    })
}

function createApp(){
    hubspotForm();
}

$(createApp);