
// all functions 
function sumOfDeposit(prev, current) {

    if (prev.value.trim() === '') {
        warning1.innerText = 'Empty Input Field '
        return prev.value, current.innerText;
    } else {
        const finalDeposit = parseFloat(prev.value) + parseFloat(current.innerText);
        return finalDeposit;
    }


}

function withDraw(prev, current) {
    if (prev.value.trim() === '') {
        warning2.innerText = 'Empty Input Field '
        return prev.value, current.innerText;
    } else {
        const finalOutput = parseFloat(current.innerText) - parseFloat(prev.value);
        return finalOutput;
    }

}





const warning1 = document.getElementById('warning1');
const warning2 = document.getElementById('warning2');
const depositBtn = document.getElementById('deposit-btn');
const depositInput = document.getElementById('deposit-input')
const depositOutput = document.getElementById('deposit-output');
const totalBalance = document.getElementById('totalBalance');
const withDrawBtn = document.getElementById('withdrawBtn');
const withDrawInput = document.getElementById('withDrawInput');
const withdrawOutput = document.getElementById('withdrawOutput');

depositBtn.addEventListener('click', function () {

    const depositFinal = sumOfDeposit(depositInput, depositOutput);
    depositOutput.innerText = depositFinal;
    const balanceFinal = sumOfDeposit(depositInput, totalBalance);
    depositInput.value = '';
    totalBalance.innerText = balanceFinal;

})

withDrawBtn.addEventListener('click', function () {
    const withdrawFinal = withDraw(withDrawInput, withdrawOutput);
    const balanceFinal = withDraw(withDrawInput, totalBalance);
    withDrawInput.value = '';

    if (balanceFinal < 0) {
        window.alert('you have no enough balance on your account !!!')
    } else {

        withdrawOutput.innerText = Math.abs(withdrawFinal);
        totalBalance.innerText = balanceFinal;
    }



})
