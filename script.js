//CLIENT INFO SECTION

const validateClient = document.querySelector('.validate-client');
const clientEmail0 = document.getElementById('email0');
const clientEmail1 = document.getElementById('email1');
const clientNumber0 = document.getElementById('number0');
const clientNumber1 = document.getElementById('number1');


validateClient.addEventListener('click', validateClientFunction);

function validateClientFunction() {
    let email0 = clientEmail0.value;
    let email1 = clientEmail1.value;
    let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailPattern.test(email0)) {
        clientEmail0.classList.remove('red');
    } else {
        clientEmail0.classList.add('red');
    };

    if (emailPattern.test(email1) || email1 === "") {
        clientEmail1.classList.remove('red');
    } else {
        clientEmail1.classList.add('red');
    };

    let number0 = clientNumber0.value; 
    let number1 = clientNumber1.value;
    let numberPattern = /^\+?[0-9]{1,4}-?[0-9]{3,4}-?[0-9]{4,}$/;
    if (numberPattern.test(number0)) {
        clientNumber0.classList.remove('red');
    } else {
        clientNumber0.classList.add('red')
    };
    if (numberPattern.test(number1) || number1 === "") {
        clientNumber1.classList.remove('red');
    } else {
        clientNumber1.classList.add('red')
    };

}

