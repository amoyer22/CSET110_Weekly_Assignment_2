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
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button" onclick="remove()">REMOVE</button>
        </div>
    </div>`
    let div = document.createElement("div")
    div.innerHTML = cartView
    document.getElementsByClassName("cart-items")[0].appendChild(div)
}


function album2Add(){
    console.log("album 2")
}


function album3Add(){
    console.log("album 3")
}


function album4Add(){
    console.log("album 4")
}


function tShirtAdd(){
    console.log("t-shirt")
}

function coffeeCupAdd(){
    console.log("coffee cup")
}


function remove(){
    console.log("remove")
}


function purchase(){
    console.log("purchase")
}