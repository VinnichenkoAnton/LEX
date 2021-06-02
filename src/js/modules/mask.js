function mask() {
    $(".modal__number, .request__number, .request__trustednumber").mask("+99 (999) 999-99-99", {
        translation: {
            9: {
                pattern: /[0-9]/
            }
        }
    });
    $(".modal__number, .request__number, .request__trustednumber").focusin(function() {
        0 === $(this).val().length && $(this).val("+38 (0");
    });
    $(".modal__number, .request__number, .request__trustednumber").focusout(function() {
        $(this).val().length < 7 && $(this).val("");
    });

}
export default mask;