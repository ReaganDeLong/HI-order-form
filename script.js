//CLIENT INFO SECTION

const confirmClient = document.querySelector('.confirm-client');
const clientName0 = document.getElementById('name0');
const clientEmail0 = document.getElementById('email0');
const clientEmail1 = document.getElementById('email1');
const clientNumber0 = document.getElementById('number0');
const clientNumber1 = document.getElementById('number1');
const clientRed = document.querySelector('.client-red');
const clientName1 = document.getElementById('name1');
const clientInfoDiv = document.querySelector('.client-info');


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
    let numberPattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (numberPattern.test(number0)) {
        clientNumber0.classList.remove('red');
    } else {
        clientNumber0.classList.add('red')
    };

    if (numberPattern.test(number1) 
    || number1 === "") {
        clientNumber1.classList.remove('red');
        clientRed.style.visibility = 'hidden';

    } else {
        clientNumber1.classList.add('red')
        clientRed.style.visibility = 'visible';

    };

    if (clientName0.value === "") {
        clientName0.classList.add('red');
    } else {
        clientName0.classList.remove('red');
    };

    if (!emailPattern.test(email0) 
    || !numberPattern.test(number0)
    || clientName0.value === "") {
        clientRed.style.visibility = 'visible';
    } else if (number1 !== "" && !numberPattern.test(number1)) {
        clientRed.style.visibility = 'visible';
    } else if (email1 !== "" && !emailPattern.test(email1)) {
        clientRed.style.visibility = 'visible';
    } else {
        clientRed.style.visibility = 'hidden';
    };

    if (clientRed.style.visibility === "hidden") {
        clientInfoDiv.classList.add('green');
    } else {
        clientInfoDiv.classList.remove('green');
    };
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
const today = new Date().toISOString().split('T')[0];
const orderDiv = document.querySelector('.order-info');

orderDate.setAttribute('min', today);
inspectionDate.setAttribute('min', today);

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

    if (otherSourceInput.style.display === 'inline-block'
    && otherSourceInput.value === "") {
        otherSourceInput.classList.add('red');
    };

    if (otherAuthorized.style.display === 'inline-block'
    && otherAuthorized.value === "") {
        otherAuthorized.classList.add('red');
    };

    if (orderRed.style.visibility === "hidden") {
        orderDiv.classList.add('green');
    } else {
        orderDiv.classList.remove('green');
    };

}

const otherSourceLabel = document.getElementById('other-source-label');
const otherSourceInput = document.getElementById('other-source');
const otherAuthorized = document.getElementById('other-authorized');
const otherAuthorizedLabel = document.getElementById('other-authorized-label');

function toggleAuth() {
    if (authorizedBy.value === "other") {
        otherAuthorized.style.display = "inline-block";
        otherAuthorizedLabel.style.display = "inline-block"
    } else {
        otherAuthorized.style.display = "none";
        otherAuthorizedLabel.style.display = "none";
    }
};

function toggleReferral() {
    if (referral.value === "other") {
        otherSourceInput.style.display = "inline-block";
        otherSourceLabel.style.display = "inline-block";
    } else {
        otherSourceInput.style.display = "none";
        otherSourceLabel.style.display = "none";
    }
};



authorizedBy.addEventListener('change', toggleAuth);
referral.addEventListener('change', toggleReferral)

//BUYER'S AGENT SECTION
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const numberPattern = /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

const phoneBA = document.getElementById('ba-phone');
const emailBA = document.getElementById('ba-email');
const confirmBA = document.querySelector('.confirm-ba');
const redBA = document.querySelector('.ba-red');
const buyerAgentDiv = document.querySelector('.buyer-agent');


confirmBA.addEventListener('click', confirmBAFunction);

function confirmBAFunction() {
    if (numberPattern.test(phoneBA.value)) {
        phoneBA.classList.remove('red');
    } else {
        phoneBA.classList.add('red')
    };

    if (emailPattern.test(emailBA.value)) {
        emailBA.classList.remove('red');
    } else {
        emailBA.classList.add('red');
    };

    if (!emailPattern.test(emailBA.value) 
    || !numberPattern.test(phoneBA.value)) {
        redBA.style.visibility = 'visible';
    } else {
        redBA.style.visibility = 'hidden';
    };

    if (redBA.style.visibility === "hidden") {
        buyerAgentDiv.classList.add('green');
    } else {
        buyerAgentDiv.classList.remove('green');
    };
};

//SELLER'S AGENT SECTION
const phoneSA = document.getElementById('sa-phone');
const emailSA = document.getElementById('sa-email');
const confirmSA = document.querySelector('.confirm-sa');
const redSA = document.querySelector('.sa-red');
const sellersAgentDiv = document.querySelector('.selling-agent');

confirmSA.addEventListener('click', confirmSAFunction);

function confirmSAFunction() {
    if (numberPattern.test(phoneSA.value)) {
        phoneSA.classList.remove('red');
    } else {
        phoneSA.classList.add('red')
    };

    if (emailPattern.test(emailSA.value)) {
        emailSA.classList.remove('red');
    } else {
        emailSA.classList.add('red');
    };

    if (!emailPattern.test(emailSA.value) 
    || !numberPattern.test(phoneSA.value)) {
        redSA.style.visibility = 'visible';
    } else {
        redSA.style.visibility = 'hidden';
    };

    if (redSA.style.visibility === "hidden") {
        sellersAgentDiv.classList.add('green');
    } else {
        sellersAgentDiv.classList.remove('green');
    };
};

//PROPERTY INFO SECTION
const address = document.getElementById('address');
const city = document.getElementById('city');
const zip = document.getElementById('zip');
const subdivision = document.getElementById('subdivision');
const access = document.getElementById('access');
const yearBuilt = document.getElementById('age');
const footage = document.getElementById('home-footage');
const beds = document.getElementById('bedrooms');
const baths = document.getElementById('bathrooms');
const hvac = document.getElementById('hvac');
const kitchens = document.getElementById('kitchens');
const price = document.getElementById('price');
const crawl = document.getElementById('crawlspace');
const radon = document.getElementById('radon');
const otherAreas = document.getElementById('other-areas');
const additionalFee = document.getElementById('add-fee');
const confirmProperty = document.querySelector('.confirm-property');
const propertyRed = document.querySelector('.property-red');
const lockboxCode = document.getElementById('lockbox-code');
const describeOther = document.getElementById('describe-other');
const propertyInfoDiv = document.querySelector('.property-info');

confirmProperty.addEventListener('click', confirmPropertyFunction);

zip.addEventListener('input', restrictToNumbers);
yearBuilt.addEventListener('input', restrictToNumbers);
price.addEventListener('input', restrictToNumbers);
price.addEventListener('input', function() {
    let value = price.value;
    value = value.replace(/,/g, '');
    value = addCommas(value);
    price.value = value;
});
footage.addEventListener('input', restrictToNumbers);
footage.addEventListener('input', function() {
    let value = footage.value;
    value = value.replace(/,/g, '');
    value = addCommas(value);
    footage.value = value;
});

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function restrictToNumbers() {
    const zipVal = zip.value;
    const zipNumeric = zipVal.replace(/[^0-9]/g, '');
    zip.value = zipNumeric;

    const yearBuiltVal = yearBuilt.value;
    const yearBuiltNumeric = yearBuiltVal.replace(/[^0-9]/g, '');
    yearBuilt.value = yearBuiltNumeric;

    const priceVal = price.value;
    const priceNumeric = priceVal.replace(/[^0-9]/g, '');
    price.value = priceNumeric;

    const footageVal = footage.value;
    const footageNumeric = footageVal.replace(/[^0-9]/g, '');
    footage.value = footageNumeric;
};


function confirmPropertyFunction() {
    if (address.value === "") {
        address.classList.add('red');
    } else {
        address.classList.remove('red');
    };
    if (city.value === "") {
        city.classList.add('red');
    } else {
        city.classList.remove('red');
    };
    if (zip.value === "") {
        zip.classList.add('red');
    } else {
        zip.classList.remove('red');
    };
    if (yearBuilt.value === "") {
        yearBuilt.classList.add('red');
    } else {
        yearBuilt.classList.remove('red');
    };
    if (footage.value === "") {
        footage.classList.add('red');
    } else {
        footage.classList.remove('red');
    };
    if (beds.value === "0") {
        beds.classList.add('red');
    } else {
        beds.classList.remove('red');
    };
    if (baths.value === "0") {
        baths.classList.add('red');
    } else {
        baths.classList.remove('red');
    };
    if (hvac.value === "0") {
        hvac.classList.add('red');
    } else {
        hvac.classList.remove('red');
    };
    if (kitchens.value === "0") {
        kitchens.classList.add('red');
    } else {
        kitchens.classList.remove('red');
    };

    if (access.value === "other" && describeOther.value == "") {
        propertyRed.style.visibility = "visible";
        describeOther.classList.add('red');
    } else {
        propertyRed.style.visibility = "hidden";
        describeOther.classList.remove('red');
    };

    if (address.value === ""
    || city.value === ""
    || zip.value === ""
    || yearBuilt.value === ""
    || footage.value === ""
    || beds.value === "0"
    || baths.value === "0"
    || hvac.value === "0"
    || kitchens.value === "0") {
        propertyRed.style.visibility = "visible";
    } else {
        propertyRed.style.visibility = "hidden";
    };

    if (propertyRed.style.visibility === "hidden") {
        propertyInfoDiv.classList.add('green');
    } else {
        propertyInfoDiv.classList.remove('green');
    };
};

access.addEventListener('input', accessFunction);

function accessFunction() {
    if (access.value === "lockbox") {
        lockboxCode.style.display = "inline-block";
    } else {
        lockboxCode.style.display = "none";
    };

    if (access.value === "other") {
        describeOther.style.display = "inline-block";
    } else { 
        describeOther.style.display = "none";
    };
};


//FEE SECTION
const inspectionFeeFinal = document.querySelector('.inspection-fee');
const radonFeeFinal = document.querySelector('.radon-fee');
const additionalFeeFinal = document.querySelector('.additional-fee');
const totalFeeFinal = document.querySelector('.total-fee');

confirmProperty.addEventListener('click', calculateTotal);

function calculateTotal() {
    let inspectionFee = 350;
    let crawlspaceFee = 0;
    let radonFee = 0;
    let addFee = 0;
    let totalFee = 0;
    let withoutComma = footage.value.replace(",", "");

    if (footage.value < 1500) {
        inspectionFee += (withoutComma * 0.035);
    } else {
        inspectionFee += (withoutComma * 0.05);
    };
    inspectionFeeFinal.innerHTML = "$" + inspectionFee;

    if (radon.value === "yes") {
        radonFee = 200;
    } else {
        radonFee = 0;
    };

    if (crawl.value === 'yes') {
        crawlspaceFee = 50;
    } else {
        crawlspaceFee = 0;
    };

    if (additionalFee.value === "") {
        addFee = 0;
    } else {
        addFee = additionalFee.value;
    };
    
    radonFeeFinal.innerHTML = "$" + radonFee;

    additionalFeeFinal.innerHTML = '$' + addFee;

    let a = ((inspectionFee + parseFloat(radonFee) + parseFloat(addFee) + parseFloat(crawlspaceFee)) / 5);
    totalFee = (Math.floor(a) * 5);

    totalFeeFinal.innerHTML = '$' + totalFee;
};

const override = document.querySelector('.override');
const overrideDiv = document.querySelector('.override-div')
override.addEventListener('click', displayFunction);

function displayFunction() {
    overrideDiv.style.visibility = "visible";
};


