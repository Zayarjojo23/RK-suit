function addquality(){
    let quality = document.getElementById('quality').value;
    let priceDisplay =document.getElementById('priceDisplay');
    totalPrice = price * quality;
    priceDisplay.innerHTML = " Price : $"+totalPrice;
    localStorage.setItem('priceDisplay', totalPrice);
}
