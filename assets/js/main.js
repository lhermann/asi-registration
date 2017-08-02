---
# Main JS File
---

{% include_relative vendor/featherlight.min.js %}
{% include_relative vendor/jquery.validate.min.js %}
{% include_relative vendor/jquery.validate.messages_de.js %}
{% include_relative vendor/moment.min.js %}

/**
 * jQuery UI Date Picker
 */
// $( function() {
//     $( "#birthdate" ).datepicker({
//         changeMonth: true,
//         changeYear: true,
//         dateFormat: "dd.mm.yy"
//     });
// } );

/**
 * jQuery Form Validator
 */
// Dates are rendered different in different browsers
// $.validator.addMethod(
//     "germanDate",
//     function(value, element) {
//         // put your own logic here, this is just a (crappy) example
//         return value.match(/^\d\d?[\.\/]\d\d?[\.\/]\d\d\d\d$/);
//     },
//     "Bitte ein Datum im Format dd.mm.yyyy eingeben."
// );
$("#anmeldeformular").validate({
    rules: {
        PLZ: {
            required: true,
            digits: true,
            minlength: 5,
            maxlength: 5
        },
        Geburtsdatum: {
            date: false
        }
    },
    errorPlacement: function(error, element) {
        error.appendTo( element.closest("li") );
    },
    errorClass: "error"
});


/**
 * Email Obfuscator
 * @author: Lukas Hermann <lukas@codethink.de>
 *
 * Use with the following html-tag:
 * <noscript defuscate data-name="lukas" data-domain="codethink.de"><em>Diese E-Mail-Adresse ist durch JavaScript geschützt</em></noscript>
 */
var spam = $("[defuscate]"), lhs = spam.attr("data-name"), rhs = spam.attr("data-domain");
var nospam = "<a href=\"mailto" + ":" + lhs + "spamkill@" + rhs + "\" onclick=\"rep(this)\">" + lhs + "<span class=\"u-hidden\">spamkill</span>" + window.atob('QA==') + rhs + "</a>";
spam.replaceWith( nospam );
function rep(e) {
    e.href=e.href.replace(/spamkill/,'')
}


/**
 * Calculate Price
 */
var eventDate = moment("24.11.2017", "DD.MM.YYYY"),
    eventPrice = [
        {
            date: moment(eventDate).subtract(14, "years"),
            member: "Nein",
            price: 0.00
        },
        {
            date: moment(eventDate).subtract(14, "years"),
            member: "Ja",
            price: 0.00
        },
        {
            date: moment(0),
            member: "Nein",
            price: 99.00
        },
        {
            date: moment(0),
            member: "Ja",
            price: 89.00
        }
    ];

$( "#anmeldeformular" ).change(function() {
    birthdate = $(this).find("#birthdate").val() || 1;
    birthdate = moment(birthdate).isValid() ? moment(birthdate) : moment(birthdate, "DD.MM.YYYY");
    member = $(this).find("input[name=ASI-Mitglied]:checked").val();
    eventPrice.some( function(item, key) {
        if( birthdate.isAfter( item.date ) && member == item.member ) {
            setEventPrice(item.price);
            return true;
        }
    });
});

function setEventPrice(price) {
    price = price.toFixed(2).replace(".", ",");
    $("#priceDisplay").text(price);
    $("#priceInput").val(price);
}

