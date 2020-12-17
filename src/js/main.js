document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector("input[type=submit]"); // Submit button
    const feedback = document.querySelector("[data-target='feedback']"); // Feedback Section
    
    const convertToCelcius = (temperature) =>  (temperature * 5/9) + 32; // (0°C × 9/5) + 32 = 32°F        
    const convertToFahrenheit = (temperature) => (temperature - 32) * 5/9; // (32°F − 32) × 5/9 = 0°C
   
    
    submitButton.addEventListener("click", (event) => {
        event.preventDefault(); // Stop the form from submitting
        
        const input = Number(document.querySelector("[data-selector='input']").value); // Get the value of the input, make sure it's a number
        const isCelcius = document.querySelector("[data-selector='radio_celcius']").checked; // Check to see if the celcius radio button is checked

        if (isCelcius) {
            feedback.innerHTML = convertToCelcius(input);
        } else {
            feedback.innerHTML = convertToFahrenheit(input);
        }

    });
});

