document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector("input[type=submit]");
    
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const inputFieldValue = document.querySelector("[data-selector='input']").value;
        const feedback = document.querySelector("[data-target='feedback']");

        feedback.innerHTML = inputFieldValue;
    });
});