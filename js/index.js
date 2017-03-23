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
    var $tpl =  $("#message-tpl");
    var $message =  $("#message");

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

            // alert("datos recibidos...");
            preloader.off();
            var source = $tpl.html();
            var template = Handlebars.compile(source);
            var html = template(suggestion);

            $message.append(html);
            // console.log(html);

            setTimeout(function(){
                $message.hide();
            }, 2000);

        }, 1000);
    });
});