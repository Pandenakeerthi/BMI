// document.getElementById('bmiForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const weight = parseFloat(document.getElementById('weight').value);
//     const height = parseFloat(document.getElementById('height').value);
    
//     if (weight > 0 && height > 0) {
//         const bmi = weight / (height * height);
//         const result = document.getElementById('result');
//         result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
//     } else {
//         alert('Please enter valid weight and height values.');
//     }
// });

document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('result');

    if (weight > 0 && height > 0) {
        const bmi = weight / (height * height);
        let category = '';

        // Determine BMI category
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 24.9) {
            category = 'Normal weight';
        } else if (bmi < 29.9) {
            category = 'Overweight';
        } else {
            category = 'Obesity';
        }
        

        result.textContent = `Your BMI is: ${bmi.toFixed(2)} (${category})`;
    } else {
        alert('Please enter valid weight and height values.');
    }
});
