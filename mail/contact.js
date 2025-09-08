// $(function () {

//     $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function ($form, event, errors) {
//         },
//         submitSuccess: function ($form, event) {
//             event.preventDefault();
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var subject = $("input#subject").val();
//             var message = $("textarea#message").val();

//             $this = $("#sendMessageButton");
//             $this.prop("disabled", true);

//             $.ajax({
//                 url: "hi.html",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     subject: subject,
//                     message: message
//                 },
//                 cache: false,
//                 success: function () {
//                     $('#success').html("<div class='alert alert-success'>");
//                     $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-success')
//                             .append("<strong>Your message has been sent. </strong>");
//                     $('#success > .alert-success')
//                             .append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function () {
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                             .append("</button>");
//                     $('#success > .alert-danger').append($("<strong>").text("Sorry " + name + ", it seems that our mail server is not responding. Please try again later!"));
//                     $('#success > .alert-danger').append('</div>');
//                     $('#contactForm').trigger("reset");
//                 },
//                 complete: function () {
//                     setTimeout(function () {
//                         $this.prop("disabled", false);
//                     }, 1000);
//                 }
//             });
//         },
//         filter: function () {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function (e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// $('#name').focus(function () {
//     $('#success').html('');
// });
document.addEventListener("DOMContentLoaded", function () {

    // Get the form element
    var form = document.getElementById("contactForm");

    // Add event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form
        if (validateForm()) {
            // If the form is valid, submit it
            submitForm();
        }
    });

    // Function to validate the form
    function validateForm() {
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        var isValid = true;

        // Validate name
        if (name === "") {
            isValid = false;
            displayError("name", "Please enter your name");
        }

        // Validate email
        if (email === "") {
            isValid = false;
            displayError("email", "Please enter your email");
        } else if (!isValidEmail(email)) {
            isValid = false;
            displayError("email", "Please enter a valid email address");
        }

        // Validate subject
        if (subject === "") {
            isValid = false;
            displayError("subject", "Please enter a subject");
        }

        // Validate message
        if (message === "") {
            isValid = false;
            displayError("message", "Please enter your message");
        }

        return isValid;
    }

    // Function to submit the form and redirect to index.html
    function submitForm() {
        // Redirect to index.html
        window.location.href = "https://guttulaomsai.github.io/thankyou/";
    }

    // Function to display error messages
    function displayError(field, message) {
        var helpBlock = document.querySelector("#" + field + " + .help-block");
        helpBlock.innerText = message;
    }

    // Function to validate email format
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
