totalPrice = 0

function purchase(){
    console.log("purchase")
}

function remove(){
    console.log("remove")
}

function album1Add(){
    console.log("album 1")
    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 1.png" width="100" height="100">
            <span class="cart-item-title">Album 1</span>
        </div>
        <span class="cart-price cart-column">$12.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album2Add(){
    console.log("album 2")
    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 2.png" width="100" height="100">
            <span class="cart-item-title">Album 2</span>
        </div>
        <span class="cart-price cart-column">$14.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album3Add(){
    console.log("album 3")
    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 3.png" width="100" height="100">
            <span class="cart-item-title">Album 3</span>
        </div>
        <span class="cart-price cart-column">$9.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album4Add(){
    console.log("album 4")
    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Album 4.png" width="100" height="100">
            <span class="cart-item-title">Album 4</span>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function tShirtAdd(){
    console.log("t-shirt")
    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Shirt.png" width="100" height="100">
            <span class="cart-item-title">T-Shirt</span>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}

function coffeeCupAdd(){
    console.log("coffee cup")
    let cartView = `
    <div class="cart-row">
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="Images/Cofee.png" width="100" height="100">
            <span class="cart-item-title">Coffee Cup</span>
        </div>
        <span class="cart-price cart-column">$6.99</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" min="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}