
// deposit handel adding
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // console.log(depositAmount);
    // get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal);
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    // set total amount as deposit-total 
    depositTotal.innerText = previousDepositTotal + depositAmount;
    // console.log(depositTotalText);
    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // set balance total 
    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    // clear Deposit input value 
    depositInput.value = '';
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