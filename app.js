// Getting Product
let productOne = document.getElementById("product_one");
let productTwo = document.getElementById("product_two");
let productThree = document.getElementById("product_three");


// Getting Buttons
let addProductBtn = document.getElementById("add-product");
let decreaseProductBtn = document.getElementById("decrease-product")
let addProductBtnTwo = document.getElementById("add-product-two");
let decreaseProductBtnTwo = document.getElementById("decrease-product-two");
let addProductBtnThree = document.getElementById("add-product-three");
let decreaseProductBtnThree = document.getElementById("decrease-product-three");

// Getting Pricing Values
let subtotal = document.getElementById("subtotal-price");
let tax = document.getElementById("tax");

// Getting Prices
let productOnePrice = 259;
let productTwoPrice = 85;
let productThreePrice = 159;


/*==========Product One Program Starts ===========*/
addProductBtn.addEventListener("click", () =>{
 productAddCount(productOne, true);
 total()
})

decreaseProductBtn.addEventListener("click", () =>{
 productDecreaseCount(productOne, false);
 total()
})

function productAddCount(addClass, isIncrease){ //Funtion For Adding

 let productCount = parseInt(addClass.value);
 
 if(isIncrease === true){
  productCount += 1;
  addClass.value = productCount;
 }
}

function productDecreaseCount(addClass, isDecrease){ //Function for Decreasing

 let productCount = parseInt(addClass.value);
 
 if(productCount > 0){
  if(isDecrease === false){
   productCount -= 1;
   addClass.value = productCount;
  }
 }
}
/*==========Product One Program End ===========*/


/*==========Product Two Program Starts ===========*/
addProductBtnTwo.addEventListener("click", function(){
 productAddCount(productTwo, true);
 total()
})

decreaseProductBtnTwo.addEventListener('click', function(){
 productDecreaseCount(productTwo, false);
 total()
})

/*==========Product Two Program End ===========*/


/*==========Product Three Program Starts ===========*/

addProductBtnThree.addEventListener("click", function(){
 productAddCount(productThree, true);
 total()
})

decreaseProductBtnThree.addEventListener("click", function(){
 productDecreaseCount(productThree, false);
 total()
})

/*==========Product Three Program End ===========*/


// SubTotal Function

function total(){

 let productOneCount = productOne.value;
 let productTwoCount = productTwo.value;
 let productThreeCount = productThree.value;

 // Subtotal
 let subtotalCount = (259 * productOneCount + 85 * productTwoCount + 159 * productThreeCount);

 subtotal.textContent = "$" + subtotalCount;

 // TAX
 let taxCount = (subtotalCount * 10) / 100;
 tax.textContent = "$" + taxCount;

 // GrandTotal

 let grandtotalCount = subtotalCount + taxCount;
 document.getElementById("grandtotal").innerHTML = "$" + grandtotalCount;
}

document.getElementById("submit").addEventListener("click", function(){

 document.querySelector(".cart").style.display = "none";

 document.querySelector(".message").style.display = "block";
})