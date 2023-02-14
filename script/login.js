

const loginButton = document.getElementById('login-btn');



loginButton.addEventListener('click', function (event) {

    event.preventDefault();
    // get gmail and password 
    const gmail = document.getElementById('gmail');
    const gmailValue = gmail.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    const mygmail = 'hasiburuoda@gmail.com';
    const mypass = '1234';


    if (gmailValue === '' && passwordValue === '') {
        window.alert('please Enter Input First')
    } else if (mygmail === gmailValue && mypass === passwordValue) {
        window.location.href = './bankDashboard.html';
    }
    else {
        const check = document.getElementById('warning');
        check.innerText = "Incurrect Email or Password "
    }




})