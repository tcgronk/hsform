"use strict";

function hubspotForm(){
    $("#contactForm").submit(event=>{
        event.preventDefault();
        document.getElementById("submitForm").onclick = function() {
            _hsq.push(["trackEvent", {
                id: "Clicked Submit Form"
            }]);
        };
        $("#formResponse").removeClass("hidden").text("Form Submitted")

    })
    

}

function createApp(){
    hubspotForm();
}

$(createApp);