


function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear Deposit input value 
    depositInput.value = '';
    
    return depositAmount;
    
}



// deposit handel adding
document.getElementById('deposit-btn').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */

    const depositAmount = getInputValue();

    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);

    // set total amount as deposit-total 
    depositTotal.innerText = previousDepositTotal + depositAmount;

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    // set balance total 
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


});
// withdraw handel adding
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // console.log('Withdraw Button clicked')
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmount);
    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText);
    // console.log(withdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    // update Balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // set balance total 
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    // clear withdraw input value
    withdrawTotal.value = '';
})