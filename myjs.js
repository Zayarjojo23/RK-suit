function addquality(){
    let quality = document.getElementById('quality').value;
    let priceDisplay =document.getElementById('priceDisplay');
    totalPrice = price * quality;
    localStorage.setItem('priceDisplay', totalPrice);
    priceDisplay.innerHTML = " Price : $"+totalPrice;
    
}
