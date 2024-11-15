document.addEventListener('DOMContentLoaded', function() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');
    const bmiImage = document.getElementById('bmi-status-img');
    const bmiExplanation = document.getElementById('bmi-explanation');

    function calculateBMI() {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value) / 100; // Convert cm to meters

        if (weight && height) {
            const bmi = weight / (height * height);
            bmiValue.textContent = bmi.toFixed(1);
            updateBMIStatus(bmi);
        } else {
            bmiValue.textContent = '--';
            bmiCategory.textContent = '';
            bmiExplanation.textContent = '';
            bmiImage.src = 'images/normal.png';
        }
    }

    function updateBMIStatus(bmi) {
        let category, explanation, imageSrc;

        if (bmi < 18.5) {
            category = 'Underweight';
            explanation = 'You are underweight. Consider consulting with a healthcare provider about a balanced diet plan to achieve a healthy weight.';
            imageSrc = 'images/underweight.png';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            category = 'Normal Weight';
            explanation = 'Congratulations! You are at a healthy weight. Maintain your healthy lifestyle with balanced diet and regular exercise.';
            imageSrc = 'images/normal.png';
        } else if (bmi >= 25 && bmi < 29.9) {
            category = 'Overweight';
            explanation = 'You are overweight. Consider increasing physical activity and making dietary adjustments to reach a healthy weight.';
            imageSrc = 'images/overweight.png';
        } else if (bmi >= 30 && bmi < 35) {
            category = 'Obese';
            explanation = 'You are in the obese category. It\'s recommended to consult with healthcare providers to develop a weight management plan.';
            imageSrc = 'images/obese.png';
        } else {
            category = 'Extremely Obese';
            explanation = 'You are in the extremely obese category. It\'s strongly recommended to seek professional medical advice for a comprehensive weight management program.';
            imageSrc = 'images/extremelyobese.png';
        }

        bmiCategory.textContent = category;
        bmiExplanation.textContent = explanation;
        bmiImage.src = imageSrc;
    }

    weightInput.addEventListener('input', calculateBMI);
    heightInput.addEventListener('input', calculateBMI);
}); 