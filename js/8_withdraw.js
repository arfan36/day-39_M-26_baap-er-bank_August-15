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

// step-1: 
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2:
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawFieldString = withDrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawFieldString);

    // step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    // step-7:
    withDrawField.value = '';
});