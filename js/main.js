/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.

/* Custom JS validation exercise */

$(document).ready(function () {
    $('#order-form').submit(function () {
            var abort = false;
            $("div.error").remove();
            $(':input[required]').each(function () {
                if ($(this).val() === '') {
                    $(this).after('<div class="error">This is a required field</div>');
                    abort = true;
                    $(this).css({
                        "background-color": '#ffcccc'
                    });
                } else {
                    $(this).css({
                        "background-color": '#fff'
                    });
                }
            }); //for each required
            if (abort) {
                return false;
            } else {
                return true;
            }
        }) //on submit
}); // ready

$('input[placeholder]').blur(function () {
    // this doesn't work with select tags, but no worries bc will be caught on submit of HTML5 validation
    $("div.error").remove();
    var myTitle = $(this).attr('title');
    var isValid = $(this).val();
    var myPattern = new RegExp($(this).attr('pattern'));

    if ($(this).attr('required')) {
        if (!isValid) { // no value 
            $(this).after('<div class="error">' + myTitle + '</div>');
            $(this).css({
                "background-color": '#ffcccc'
            });
        } // is not valid 
        else {
            if (!myPattern.test(isValid)) { // pattern not a match
                $(this).after('<div class="error">' + myTitle + '</div>');
                $(this).css({
                    "background-color": '#ffcccc'
                });
                $(this).blur();

            } else { // pattern match
                $(this).remove('div.error');
                $(this).css({
                    "background-color": '#fff'
                });
            } // else: pattern matched
        } // is valid
    } // required attr
}); // onblur