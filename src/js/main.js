document.addEventListener('DOMContentLoaded', () => {

    const submitButton = document.querySelector("input[type=submit]");
    const feedback = document.querySelector("[data-target='feedback']");
    
    // 0°F − 32) × 5/9 = -17.78°C

    const convertToCelcius = (temperature) => {
        return (temperature - 32) * 5/9
    };
    const convertToFahrenheit = (temperature) => {
        return (temperature * 5/9) + 32
    };
   
    
    submitButton.addEventListener("click", (event) => {
        event.preventDefault();
        // Validate numbers
        // Run Conversion
        convertToCelcius(80);
        convertToFahrenheit(0);
        // Update dom
    });
});

