function validation() {
    $.validator.addMethod("validateError", function() {
        if ($("#request__photoone").get(0).files.length === 4) {
            return true;
        } else {
            return false;
        }
    });

    $('.modal__form').validate({
        errorPlacement: function(error, element) {},
        rules: {
            'user_name': {
                required: true,
                minlength: 1,
                maxlength: 40

            },
            'user_phone': {
                required: true,
                minlength: 19,
                maxlength: 19
            }
        },
    });

    $('.request__form').validate({
        errorPlacement: function(error, element) {},
        rules: {
            'form_name': {
                required: true,
                minlength: 1,
                maxlength: 60

            },
            'form_phone': {
                required: true,
                minlength: 19,
                maxlength: 19
            },
            'form_email': {
                required: true,
                email: true
            },
            'form_vin': {
                required: true,
                minlength: 17,
                maxlength: 17
            },
            'form_plate': {
                required: true,
                minlength: 6
            },
            'form_trustedname': {
                required: true,
                minlength: 1,
                maxlength: 60
            },
            'form_trustedphone': {
                required: true,
                minlength: 19,
                maxlength: 19
            },
            'form_code': {
                required: true,
                minlength: 1
            },
            'form_choice': {
                required: true
            },
            'form_photoself[]': {
                required: true
            },
            'form_photoselfone[]': {
                required: true,
                validateError: true
            },
            'form_checkbox': {
                required: true
            }
        }
    });
}
export default validation;