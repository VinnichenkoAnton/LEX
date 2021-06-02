function btnchange() {
    $(".btn").each(function(e) {
        $(this).on("click", function() {
            $(".modal__btn").text($(".btn").eq(e).text());
        });
    });
}

export default btnchange;