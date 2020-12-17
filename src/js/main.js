document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector("input[type=submit]");
    const feedback = document.querySelector("[data-target='feedback']");
    
    // 0°F − 32) × 5/9 = -17.78°C

    // const convertToCelcius = (temperature) =>  (temperature - 32) * 5/9;
    const convertToFahrenheit = (temperature) => { 
         return (temperature * 5/9) + 32;
    };
   
    
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        const input = document.querySelector("[data-selector='input']").value;
        
        // Validate numbers
        // Run Conversion
        convertToFahrenheit(input);

        // Update dom
        feedback.innerHTML = convertToFahrenheit(input);
    });
});

