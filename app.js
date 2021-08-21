// Ram, SSD, Delivery options change function
function optionChange(component){
    if(component == 'eightGbRam'){
        document.getElementById('ramPrice').innerText = 0;
        totalPrice();
    }
    else if(component == 'sixteenGbRam'){
        document.getElementById('ramPrice').innerText = 180;
        totalPrice();
    }
    else if(component == 'twoFiveSixSsd'){
        document.getElementById('ssdPrice').innerText = 0;
        totalPrice();
    }
    else if(component == 'fiveOneTwoSsd'){
        document.getElementById('ssdPrice').innerText = 100;
        totalPrice();
    }
    else if(component == 'oneTbSsd'){
        document.getElementById('ssdPrice').innerText = 180;
        totalPrice();
    }
    else if(component == 'freeDelivery'){
        document.getElementById('deliveryPrice').innerText = 0;
        totalPrice();
    }
    else if(component == 'paidDelivery'){
        document.getElementById('deliveryPrice').innerText = 20;
        totalPrice();
    }
}

//Total Price calculation function
function totalPrice(){
    const basePrice = parseInt(document.getElementById('basePrice').innerText);
    const ramPrice = parseInt(document.getElementById('ramPrice').innerText);
    const ssdPrice = parseInt(document.getElementById('ssdPrice').innerText);
    const deliveryPrice = parseInt(document.getElementById('deliveryPrice').innerText);

    const totalPrice = basePrice + ramPrice + ssdPrice + deliveryPrice;

    document.getElementById('subTotal').innerText = totalPrice;
    document.getElementById('promoAmount').innerText = totalPrice;  
}

//discount Function
function applyDiscount(){
    let discount = parseFloat(document.getElementById('promoAmount').innerText);
    discount = discount - (discount * (.2));
    document.getElementById('promoAmount').innerText = discount;
}

//Promo apply function
function applyPromo(){
    const promo = document.getElementById('promoInput').value;
    document.getElementById('promoInput').value = '';
    let discount = parseFloat(document.getElementById('promoAmount').innerText);

    //Handle Promo button
    if(promo == 'stevekaku' && (discount >= 1299 && discount <= 1479)
    ){
        applyDiscount();
    }
    else if(promo == 'stevekaku' && (discount >= 1299 && discount <= 1399)
    ){
        applyDiscount();
    }
    else if(promo == 'stevekaku' && (discount >= 1299 && discount <= 1319)
    ){
        applyDiscount();
    }
    else if(promo == 'stevekaku' && (discount >= 1299 && discount <= 1579)
    ){
        applyDiscount();
    }
    else if(promo == 'stevekaku' && (discount >= 1299 && discount <= 1659)
    ){
        applyDiscount();
    }
    else if(promo == 'stevekaku' && (discount >= 1299 && discount <= 1679)
    ){
        applyDiscount();
    }
}