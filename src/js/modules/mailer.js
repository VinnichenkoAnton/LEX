function mailer() {
    $('.modal__form').submit(function(e) {
        if ($(".modal__form").valid()) {
            e.preventDefault();
            $.ajax({
                type: "POST",
                url: "../mailer/form.php",
                data: $(this).serialize()
            }).done(function() {
                $(this).find(".user_name, .user_phone").val("");

                $('.modal__form').trigger('reset');
                $('.thanks').fadeIn('fast');
                $.fancybox.close();
                setTimeout(function() {
                    $(".thanks").fadeOut("slow");
                }, 2500);

            });
            return false;
        }
    });
    $('.request__form').submit(function(e) {
        if ($(".request__form").valid()) {
            e.preventDefault();
            var fd = new FormData(this);
            $.ajax({
                type: "POST",
                contentType: false,
                processData: false,
                url: "../mailer/formtwo.php",
                data: fd
            }).done(function() {
                $(this).find(".request__name, .request__number, .request__email, .request__vin, .request__plate, .request__trustedname, .request__trustednumber, .request__code, .request__choice, #request__photo, .request__photo_label, .request__checkbox").val("");

                $('.request__form').trigger('reset');
                $(".request__photo_label span").text("Прикріпіть фото");
                $(".request__photoone_label span").text("Прикріпіть фото");

                $('.thanks').fadeIn('fast');
                $.fancybox.close();
                setTimeout(function() {
                    $(".thanks").fadeOut("slow");
                    $(".request").fadeOut("slow");
                    $(".site__wrapper").fadeIn();
                }, 2000);

            });
            return false;
        }
    });
}
export default mailer;