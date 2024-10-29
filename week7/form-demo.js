// form-demo.js
function validateForm(event) {
    // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
    const fullName = document.getElementById("full-name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const paymentMethod = document.getElementById("select-payment-type").value;
    const creditCardNumber = document.getElementById("credit-card-number").value;
    const paypalUsername = document.getElementById("paypal-username").value;

    // track errors 
    // boolian to track if form is valid
    let isValid = true;
    // empty array to store error messages for any validation issues we encounter
    const errors = [];
  
    // if statement to check if fullName is bob or not
    // if fullName is not bob, 
    if (fullName !== "Bob") {
        // then set isValid to false (because it's not Bob)
        isValid = false;
        // print error message to console that fullName is not Bob
        errors.push("You are not Bob!");
    }
    // // if we ran into any problems above valid will be false.
    // if (!fullName || !email || !address ) {
    //     alert("Please fill out all required fields");
    //     //stop the form from being submitted
    //     event.preventDefault();
    //     // show the errors
    //     showErrors(errors);
    //     // return false to let the browser know the form was not submitted.
    //     return false;
    // }

    // make sure IF credit card method is selected and credit card number is 1234123412341234
    if (paymentMethod === "credit-card" && creditCardNumber !== "1234123412341234") {
        // if those two conditions are false
        isValid = false;
        //print error message 
        errors.push("Please enter valid credit card number");
    }
    // if (paymentMethod === "credit-card" && !/^\d{16}$/.test(creditCardNumber)) {
    //     alert("Please enter a valid credit card number");
    //     event.preventDefault();
    //     return false;
    // }

    // make sure IF paypal method is selected and correct userName is entered
    if (paymentMethod === "paypal" && !paypalUsername ) {
        //if either of those conditions are false
        isValid = false;
        //print error message
        errors.push("Invalid paypal username");
    }
    // if (paymentMethod === "paypal" && !paypalUsername) {
    //     alert("Please enter a valid paypal username");
    //     event.preventDefault();
    //     return false;
    // }

    // if there are errors, prevent sumbission
    if (!isValid) {
        // stop form from submitting
        event.preventDefault();
        // then show the errors
        showErrors(errors);
        // and return false to browser so it knows form isn't sumbitted
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("checkout-form");
    form.addEventListener("submit", validateForm);
    
    togglePaymentDetails();
});
    
function togglePaymentDetails() {
    
    // get a reference to the form. We can access all the named form inputs through the form element.
    const selectPaymentType = document.getElementById("select-payment-type");
    // we will also need the creditCardContainer and paypalUsernameContainer
    const creditCardContainer = document.getElementById("credit-card-number-container");
    const paypalContainer = document.getElementById("paypal-username-container");

    //add event listener to toggle visiblity of payment
    selectPaymentType.addEventListener("change", function() {
        const paymentMethodType = this.value;

        // Hide payment containers by adding the '.hide' class to each of them
        if (paymentMethodType === "credit-card") {
            creditCardContainer.classList.remove("hide");
            paypalContainer.classList.add("hide");
        } else if (paymentMethodType === "paypal") {
            creditCardContainer.classList.add("hide");
            paypalContainer.classList.remove("hide");
        } else {
            creditCardContainer.classList.add("hide");
            paypalContainer.classList.add("hide");
        }
    });
}

// helper function to display our errors.
function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorEl.innerHTML = html.join("");
}

//Stretch
// IF FALSE: PREVENTS FORM FROM SUBMITTING:
//add event listener to the form that will call validateForm on submit button
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("checkout-form");

    //add event listener to call validateForm when submit is hit
    form.addEventListener("submit", validateForm);
        if (!validateForm()) {
            //prevent form from submitting
            Event.preventDefault();
        }
        //initialize payment method toggle function
    togglePaymentDetails();
});