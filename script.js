const principal = document.getElementById('principal');
const interestRate = document.getElementById('interest-rate');
const time = document.getElementById('time');
const timeMonth = document.getElementById('time-months');
const compoundFrequency = document.getElementById('compound-frequency');
const finalAmount = document.getElementById('final-amount');
var finalAmountValue = 0;
//Botones
const calculateButton = document.getElementById('calculate');
const clearButton = document.getElementById('clear');
const testButton = document.getElementById('test'); 

function printValues(){
    console.log('Principal:', principal.value);
    console.log('Interest Rate:', interestRate.value);
    console.log('Time:', time.value);
    console.log('Compound Frequency:', compoundFrequency.value);
}

time.addEventListener('input', function() {
    console.log('Cambiando años, reseteando meses');
    timeMonth.value = 0;
    compoundFrequency.removeAttribute('disabled', 'false');
});

timeMonth.addEventListener('input', function() {
    console.log('Cambiando meses, reseteando años');
    time.value = '';
    compoundFrequency.value = 365; 
    compoundFrequency.setAttribute('disabled', 'true');
});

function calculateCompoundInterest(){
    let principalValue = parseFloat(principal.value);
    let interestRateValue = parseFloat(interestRate.value);
    let timeValue = parseFloat(time.value);
    let timeMonthValue = parseFloat(timeMonth.value);
    let compoundFrequencyValue = parseFloat(compoundFrequency.value);

    let timeTocalculate;
    timeTocalculate = time.value == '' ? timeMonth.value : time.value; 

    let finalAmountValue = principalValue * Math.pow((1 + (interestRateValue / (compoundFrequencyValue * 100))), (compoundFrequencyValue * timeTocalculate));

    console.log("Monto final de interés compuesto: " + finalAmountValue);

    return finalAmountValue.toFixed(2);
}

testButton.addEventListener('click', function() {
    console.log('Test button clicked');
    printValues();
    calculateCompoundInterest();
});

calculateButton.addEventListener('click', function() {
    finalAmount.value = calculateCompoundInterest();
});

clearButton.addEventListener('click', function() {
    principal.value = '';
    interestRate.value = '';
    time.value = '';
    timeMonth.value = 0;
    compoundFrequency.value = 365;
    finalAmount.value = '';
});

