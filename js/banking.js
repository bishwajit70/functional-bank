


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear Deposit input value 
    inputField.value = '';

    return amountValue;

}

function updateTotalField(totalFieldId, amount) {
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previousTotal = parseFloat(totalText);
    totalField.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }


}


// deposit handel adding
document.getElementById('deposit-btn').addEventListener('click', function () {
    /* 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); 
    */

    const depositAmount = getInputValue('deposit-input');
    updateTotalField('deposit-total', depositAmount);
    updateBalance(depositAmount, true);

    // get and updated current deposit total
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    // set total amount as deposit-total 
    depositTotal.innerText = previousDepositTotal + depositAmount; 
    */

    // update balance 
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // set balance total 
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */


});
// withdraw handel adding
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // console.log('Withdraw Button clicked')
    /*     
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); 
    */

    const withdrawAmount = getInputValue('withdraw-input')
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);

    // get and update withdraw total
    /*     
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // console.log(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 
    */



    // update Balance after withdraw
    /*  
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // set balance total 
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; 
    */


})