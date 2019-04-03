var sending = false;
var contactUrl = 'https://tms0f3uw76.execute-api.us-east-1.amazonaws.com/prod/contact-me';

function sendEmail(name, email, message, cb) {
    console.log('sendEmail');
    var data = {
        name,
        email,
        message
    };

    $.ajax({
        url: contactUrl,
        dataType: 'text',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(data, textStatus, jqxhr) {
            console.log('ajax response', data);
            cb(true);
        },
        error: function(jqxhr, textStatus, errorThrown) {
            console.log('ajax errror', errorThrown);
            cb(false);
        }
    });
}

$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        var submitBtn = $('#email-submit');

        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        event.preventDefault();

        if (name && name.length > 0
            && email && email.length > 0
            && message && message.length > 0) {
                submitBtn.prop('disabled', true);
                sendEmail(name, email, message, (ok) => {
                    if (ok) alert('Your message has been sent, thanks!');
                    else alert('There was a problem sending your message, please try again in a few minutes.')
                    submitBtn.prop('disabled', false);
                });
            }
    });
});