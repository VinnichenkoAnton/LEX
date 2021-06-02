function timeout() {
    var a = setTimeout(function() {
        $.fancybox.open({
            src: "#modal"
        });
    }, 20000);
    $("[data-src], .mainscreen__header .btn").on("click", function() {
        clearTimeout(a);
    });
}
export default timeout;