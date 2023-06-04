//CLIENT INFO SECTION

const confirmClient = document.querySelector('.confirm-client');
const clientEmail0 = document.getElementById('email0');
const clientEmail1 = document.getElementById('email1');
const clientNumber0 = document.getElementById('number0');
const clientNumber1 = document.getElementById('number1');
const clientRed = document.querySelector('.client-red');
const clientName1 = document.querySelector('.name1');


confirmClient.addEventListener('click', validateClientFunction);

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
        clientRed.style.visibility = 'hidden';

    } else {
        clientNumber1.classList.add('red')
        clientRed.style.visibility = 'visible';

    };

    if (!emailPattern.test(email0) || !numberPattern.test(number0)) {
        clientRed.style.visibility = 'visible';
    } else if (number1 !== "" && !numberPattern.test(number1)) {
        clientRed.style.visibility = 'visible';
    } else if (email1 !== "" && !emailPattern.test(email1)) {
        clientRed.style.visibility = 'visible';
    } else {
        clientRed.style.visibility = 'hidden';
    }

};

//ORDER INFO SECTION
const orderDate = document.getElementById('order-date');
const inspectionDate = document.getElementById('inspection-date');
const inspectionTime = document.getElementById('inspection-time');
const orderTaker = document.getElementById('order-taker');
const referral = document.getElementById('referral');
const attendance = document.getElementById('attendance');
const authorizedBy = document.getElementById('authorized');
const confirmOrder = document.querySelector('.confirm-order');
const orderRed = document.querySelector('.order-red')

confirmOrder.addEventListener('click', confirmOrderFunction);

function confirmOrderFunction() {

    if (orderDate.value === "") {
        orderDate.classList.add('red');
    } else {
        orderDate.classList.remove('red');
    };
    
    if (inspectionDate.value === "") {
        inspectionDate.classList.add('red');
    } else {
        inspectionDate.classList.remove('red');
    };

    if (inspectionTime.value === "") {
        inspectionTime.classList.add('red');
    } else {
        inspectionTime.classList.remove('red');
    };

    if (orderTaker.value === "") {
        orderTaker.classList.add('red');
    } else {
        orderTaker.classList.remove('red');
    };

    if (attendance.value === "") {
        attendance.classList.add('red');
    } else {
        attendance.classList.remove('red');
    };

    if (orderDate.value === ""
    || inspectionDate.value === ""
    || inspectionTime.value === ""
    || orderTaker.value === ""
    || attendance.value === "") {
    orderRed.style.visibility = "visible";
} else {
    orderRed.style.visibility = "hidden";
};
}

//BUYER'S AGENT SECTION

//SELLER'S AGENT SECTION

//PROPERTY INFO SECTION

//FEE SECTION

