const heightInput = document.querySelector('#height')
const WeightInput = document.querySelector('#weight')
const Submit = document.querySelector("#submit")
const Result = document.querySelector('#result')

Submit.addEventListener('click',()=>{
    const height = parseFloat(heightInput.value)
    const Weight = parseFloat(WeightInput.value)
    if(isNaN(height)  || isNaN(Weight) || height <= 0 || Weight <=0){
        Result.textContent = 'Please Enter the valid number';
        return
    }
    const heightInmeter = height / 100;
    const BMi = (Weight/ (heightInmeter *heightInmeter)).toFixed(2)
    let category;
    if (BMi < 18.5) {
        category = 'Underweight';
    } else if (BMi >= 18.5 && BMi <= 24.9) {
        category = 'Normal Weight';
    } else if (BMi >= 25 && BMi <= 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }
    Result.innerHTML = `Your BMI is ${BMi},which is in the ${category}`
})