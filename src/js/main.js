document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector("input[type=submit]");
    const feedback = document.querySelector("[data-target='feedback']");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault();

        const inputFieldValue = document.querySelector("[data-selector='input']").value;

        feedback.innerHTML = inputFieldValue;
    });
});