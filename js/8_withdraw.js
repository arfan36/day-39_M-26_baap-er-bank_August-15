/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
    i. also make sure to convert the input to a number by using parseFloat
3. Get previous withDraw total

4. calculate total withdraw amount
    i. set total withdraw amount

5. get the previous balance total
6. calculate new balance total
    i. set the new balance total


7. clear the input field
 */

// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:get the withdraw amount from the withdraw input field
    // i. also make sure to convert the input to a number by using parseFloat
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawFieldString = withDrawField.value;
    const newWithdrawAmount = parseFloat(newWithDrawFieldString);

    
    // step-7: clear the input field
    withDrawField.value = '';
    
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3:Get previous withDraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5:get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('baap er bank e eto taka nai');
        return;
    }

    // step-4:calculate total withdraw amount
    // i. set total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6:calculate new balance total
    // i. set the new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

});