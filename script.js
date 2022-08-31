/*const createAccount = document.querySelector(".create-link")
const accountForm = document.querySelector(".create-account")

createAccount.addEventListener("click", addAccount)

function addAccount(e){ 
    accountForm.classList.add("account-popup")
}

const closeForm = document.querySelector(".close-form")

closeForm.addEventListener("click", ()=> {
    
    accountForm.classList.remove("account-popup")
})*/

const whiteLines = document.querySelector(".white-lines")
whiteLines.addEventListener("click", (e) => {
    const exitList = document.querySelector(".exit-list")
    exitList.style.display = "block"
    whiteLines.style.display = "none"
    const navLinksHome =  document.querySelector(".nav-links-home")
    navLinksHome.classList.add("nav-links-slide-in")
    const body = document.querySelector(".body-home")
    body.classList.add("body-home-remove")

    const iconSelect = document.querySelectorAll(".nav-links > li")
    for(let i = 0; i < iconSelect.length; i++){
        //the closeCart is to remove the toggle icon if the cart icon is clicked
        iconSelect[0].addEventListener("click", () => {
            document.querySelector(".toggle-list").classList.add("mobile")
        })


        const icon = iconSelect[i]
        icon.addEventListener("click", (e) => {
            navLinksHome.classList.remove("nav-links-slide-in")
            body.classList.remove("body-home-remove")
            exitList.style.display = "none"
            whiteLines.style.display = "block"
        })
    }

    exitList.addEventListener("click", () => {
        exitList.style.display = "none"
        whiteLines.style.display = "block"
        navLinksHome.classList.remove("nav-links-slide-in")
        body.classList.remove("body-home-remove")
    })
})





const cartLink = document.querySelector(".cart-link")
cartLink.addEventListener("click",() => {
    const myCart = document.querySelector(".my-cart")
   myCart.classList.add("cart-reveal")
   

   //the next line of code is to remove my app from the screen
   const myApp = document.querySelector(".my-app")
   myApp.classList.add("remove-body")

   //the next line of code will remove cart and restore the body
   const closeCart = document.querySelector(".close-cart")
   closeCart.addEventListener("click", () => {
       myCart.classList.remove("cart-reveal")
       myApp.classList.remove("remove-body")
       document.querySelector(".toggle-list").classList.remove("mobile")
   })
})




const addToCart = document.querySelectorAll(".add-to-cart")

for(let i = 0; i < addToCart.length; i++){
    addToCart[i].addEventListener("click", addItem)
}

function addItem(e){
    alert("item added to cart")
    const addButton = e.target
    const parentItem = addButton.parentElement
    const imageItem = parentItem.querySelector(".shoe-pic").src
    const description = parentItem.querySelector(".description").textContent
    const price = parentItem.querySelector(".price > span").textContent
    
    listCartItem(imageItem, description, price)
    
}


function listCartItem(pic, describe, pay){
    
    const itemContent = document.createElement("div")
    let basket = document.querySelector(".bracket")
    itemContent.innerHTML = `
        <div class="cart-item">
            <div class="cart-upper">
                <img src=${pic} class="shoe-pic" alt="">
                <div class="cart-item-details">
                    <div class="cart-description">${describe}</div>
                    <div class="cart-price">$ <span>${pay}</span></div>
                    <input type="text" class="no-added" value="1">
                    <button class="item-added">Item Added</button>
                </div>
            </div>

            <button class="delete-item">Remove item</button>
        </div>
    `

    basket.append(itemContent)
    addToTotal()
    const removeItemBtn = document.querySelectorAll(".delete-item")
    for(let i = 0; i < removeItemBtn.length; i++){
        xRemoveBtn = removeItemBtn[i]
        xRemoveBtn.addEventListener("click", removeItem)
    }

        
    
}

function removeItem(e){
    const erase = e.target
    const item = erase.parentElement
    item.remove(erase)
}

function addToTotal(){
    const itemAdded = document.querySelectorAll(".item-added")
    for(let i = 0; i < itemAdded.length; i++){
        const addItemBtn = itemAdded[i]
        addItemBtn.addEventListener("click", sum)
    }
}

function sum(e){
    const myItem = e.target.parentElement.parentElement.parentElement
    const value = myItem.querySelector(".no-added").value
    if(value.indexOf(".") !== -1 || +value <= 0 || +value > 10){
        return
    }
    myItem.querySelector(".no-added").disabled = true
    const total = document.querySelector(".total > span").textContent
    const price = myItem.querySelector(".cart-price > span").textContent
    const cartTotal = document.querySelector(".total > span")
    if(+value > 0){
        cartTotal.textContent = (+value * +price) + +total
        e.target.disabled = true
    }

    const removeBtn = myItem.querySelector(".delete-item")

    removeBtn.addEventListener("click", subtract)


    function subtract() {
        const minus = value * price
        cartTotal.textContent = cartTotal.textContent - minus
    }
}