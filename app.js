function ramOptionChange(ram){
    if(ram == 'eightGbRam'){
        document.getElementById('ramPrice').innerText = 0;
        totalPrice();
    }

    else{
        document.getElementById('ramPrice').innerText = 180;
        totalPrice();
    }
}

function ssdOptionChange(ssd){
    if(ssd == 'twoFiveSixSsd'){
        document.getElementById('ssdPrice').innerText = 0;
        totalPrice();
    }
    else if(ssd == 'fiveOneTwoSsd'){
        document.getElementById('ssdPrice').innerText = 100;
        totalPrice();
    }
    else{
        document.getElementById('ssdPrice').innerText = 180;
        totalPrice();
    }
}

function deliveryOptionChange(delivery){
    if(delivery == 'free'){
        document.getElementById('deliveryPrice').innerText = 0;
        totalPrice();
    }

    else{
        document.getElementById('deliveryPrice').innerText = 20;
        totalPrice();
    }
}

function totalPrice(){
    const basePrice = parseInt(document.getElementById('basePrice').innerText);
    const ramPrice = parseInt(document.getElementById('ramPrice').innerText);
    const ssdPrice = parseInt(document.getElementById('ssdPrice').innerText);
    const deliveryPrice = parseInt(document.getElementById('deliveryPrice').innerText);
    const totalPrice = basePrice + ramPrice + ssdPrice + deliveryPrice;
    document.getElementById('subTotal').innerText = totalPrice;
    document.getElementById('bonusTotal').innerText = totalPrice;  
}

function applyPromo(){
    const promo = document.getElementById('promoInput').value;
    document.getElementById('promoInput').value = '';
    if(promo == 'stevekaku'){
        let discount = parseFloat(document.getElementById('bonusTotal').innerText);
        discount = discount - (discount * .2);
        document.getElementById('bonusTotal').innerText = discount;
    }
}



