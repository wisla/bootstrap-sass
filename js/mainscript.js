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
                    required: "Pole \"Name\" powinno by� wype�nione",
                    minlength: "�le wype�ni�e� pole - minimalnie 5 znak�w"
                },
                "contactform-email": {
                    required: "Pole \"Email\" powinno by� wype�nione",
                    email: "Podaj poprawny adres mailowy"
                },
                "contactform-subject": {
                    required: "Pole \"Subject\" powinno by� wype�nione",
                    minlength: "�le wype�ni�e� pole - minimalnie 5 znak�w"
                },
                "contactform-message": {
                    required: "Prosz� wpisa� wiadomo��",
                    minlength: "Zbyt kr�tka tre�� wiadomo�ci"
                },
                "contactform-condition": {
                    required: "Musisz zaakceptowa� warunki"
                }
            }
        });

    });

})(jQuery);