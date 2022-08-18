// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;

    // step-3: get the current deposit total
    // for non-input(element other than input, textarea)
    const depositTotalElemnt = document.getElementById('deposit-total');
    const dipositTotal = depositTotalElemnt.innerText;
    depositTotalElemnt.innerText = depositAmount;
});