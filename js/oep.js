(function(e){var t={position:"bottom",height:"5px",col_1:"#159756",col_2:"#da4733",col_3:"#3b78e7",col_4:"#fdba2c",fadeIn:200,fadeOut:200};e.materialPreloader=function(n){var r=e.extend({},t,n);$template="<div id='materialPreloader' class='load-bar' style='height:"+r.height+";display:none;"+r.position+":0px'><div class='load-bar-container'><div class='load-bar-base base1' style='background:"+r.col_1+"'><div class='color red' style='background:"+r.col_2+"'></div><div class='color blue' style='background:"+r.col_3+"'></div><div class='color yellow' style='background:"+r.col_4+"'></div><div class='color green' style='background:"+r.col_1+"'></div></div></div> <div class='load-bar-container'><div class='load-bar-base base2' style='background:"+r.col_1+"'><div class='color red' style='background:"+r.col_2+"'></div><div class='color blue' style='background:"+r.col_3+"'></div><div class='color yellow' style='background:"+r.col_4+"'></div> <div class='color green' style='background:"+r.col_1+"'></div> </div> </div> </div>";e("body").prepend($template);this.on=function(){e("#materialPreloader").fadeIn(r.fadeIn)};this.off=function(){e("#materialPreloader").fadeOut(r.fadeOut)}}})(jQuery)
$(document).ready(function(){
    
    var preloader = new $.materialPreloader({
        position: 'top',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 200,
        fadeOut: 200
    });

    var $button = $("#button");

    // Values
    var $firstName =  $("#firstName");
    var $lastName =  $("#lastName");
    var $email =  $("#email");
    var $suggestion=  $("#suggestion");

    $button.click(function(e){
        console.log("Click!");

        var suggestion = {
            first_name: $firstName.val(),
            last_name: $lastName.val(),
            email: $email.val(),
            suggestion: $suggestion.val()
        }

        preloader.on();

        setTimeout(function(){
            console.log(suggestion);
            alert("datos recibidos...");
            preloader.off();
        }, 5000);
    });
});
console.log("hola")