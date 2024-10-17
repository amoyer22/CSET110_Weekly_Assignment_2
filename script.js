let cartItems = []

function removeItem(buttonElement) {
    let itemRow = buttonElement.closest(".cart-row");
    let itemTitle = itemRow.querySelector(".cart-item-title").textContent;
    cartItems = cartItems.filter(item => item !== itemTitle);
    itemRow.remove();
}

function album1Add(){
    if(cartItems.includes("Album 1")){
        alert("This item is already in cart!")
        return
    }
    cartItems.push("Album 1")


    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 1.png" width="100" height="100">
            <span class="cart-item-title">Album 1</span>
        </div>
        <span class="cart-price cart-column">$12.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="removeItem()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album2Add(){
    if(cartItems.includes("Album 2")){
        alert("This item is already in cart!")
        return
    }
    cartItems.push("Album 2")

    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 2.png" width="100" height="100">
            <span class="cart-item-title">Album 2</span>
        </div>
        <span class="cart-price cart-column">$14.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="removeItem()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album3Add(){
    if(cartItems.includes("Album 3")){
        alert("This item is already in cart!")
        return
    }
    cartItems.push("Album 3")

    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 3.png" width="100" height="100">
            <span class="cart-item-title">Album 3</span>
        </div>
        <span class="cart-price cart-column">$9.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="removeItem()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album4Add(){
    if(cartItems.includes("Album 4")){
        alert("This item is already in cart!")
        return
    }
    cartItems.push("Album 4")

    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 4.png" width="100" height="100">
            <span class="cart-item-title">Album 4</span>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="removeItem()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function tShirtAdd(){
    if(cartItems.includes("T-Shirt")){
        alert("This item is already in cart!")
        return
    }
    cartItems.push("T-Shirt")

    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Shirt.png" width="100" height="100">
            <span class="cart-item-title">T-Shirt</span>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="removeItem()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function coffeeCupAdd(){
    if(cartItems.includes("Coffee Cup")){
        alert("This item is already in cart!")
        return
    }
    cartItems.push("Coffee Cup")
    
    document.getElementsByClassName("cart-total-price").innerHTML

    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Cofee.png" width="100" height="100">
            <span class="cart-item-title">Coffee Cup</span>
        </div>
        <span class="cart-price cart-column">$6.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="removeItem()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}