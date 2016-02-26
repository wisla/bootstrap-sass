(function ($) {

    // When the document is ready
    $(document).ready(function () {

        //validation rules
        $("#contactform").validate({
            focusInvalid: false,
            onkeyup: false,
            onfocusout: false,
            errorElement: "div",
            errorPlacement: function (error, element) {
                error.appendTo("div#errors");
            },
            rules: {
                "contactform-fullname": {
                    required: true,
                    minlength: 5
                },
                "contactform-email": {
                    required: true,
                    email: true
                },
                "contactform-subject": {
                    required: true,
                    minlength: 5
                },
                "contactform-message": {
                    required: true,
                    minlength: 15
                },
                "contactform-condition": {
                    required: true
                }
            },
            messages: {
                "contactform-fullname": {
                    required: "Pole \"Name\" powinno byÊ wype≥nione",
                    minlength: "èle wype≥ni≥eú pole - minimalnie 5 znakÛw"
                },
                "contactform-email": {
                    required: "Pole \"Email\" powinno byÊ wype≥nione",
                    email: "Podaj poprawny adres mailowy"
                },
                "contactform-subject": {
                    required: "Pole \"Subject\" powinno byÊ wype≥nione",
                    minlength: "èle wype≥ni≥eú pole - minimalnie 5 znakÛw"
                },
                "contactform-message": {
                    required: "ProszÍ wpisaÊ wiadomoúÊ",
                    minlength: "Zbyt krÛtka treúÊ wiadomoúci"
                },
                "contactform-condition": {
                    required: "Musisz zaakceptowaÊ warunki"
                }
            }
        });

    });

})(jQuery);