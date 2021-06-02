function addfile() {
    $("#request__photo").on("change", function() {
        if ($("#request__photo").get(0).files.length === 0) {
            $(".request__photo_label span").text("Прикріпіть фото");
        } else if ($("#request__photo").get(0).files.length === 1) {
            $(".request__photo_label span").text("Додано файлів: " + $("#request__photo").get(0).files.length);
            $(this).valid();
        } else if ($("#request__photo").get(0).files.length > 1) {
            $(".request__photo_label span").text("Завантажте не більше 1 файла");
        }
    });

    $("#request__photoone").on("change", function() {
        if ($("#request__photoone").get(0).files.length === 0) {
            $(".request__photoone_label span").text("Прикріпіть фото");
        } else if ($("#request__photoone").get(0).files.length === 4) {
            $(".request__photoone_label span").text("Додано файлів: " + $("#request__photoone").get(0).files.length);
            $(this).valid();
        } else if ($("#request__photoone").get(0).files.length > 4) {
            $(".request__photoone_label span").text("Завантажте не більше 4 файлів");
        } else {
            $(".request__photoone_label span").text("Додано файлів: " + $("#request__photoone").get(0).files.length + " із 4");
        }
    });

}

export default addfile;