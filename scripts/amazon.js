/*JavaScript core steps to take:
1. Save the data
2. Generate the HTML
3. Make it interactive
*/

//Step 1: Saving the data of each product into an array. The array is filled with objects. Each object represetns each product and their properties.
//This is called a Data structure.
//This consist of creating an array that hold each object. We then create each property we'll want for that object and make it consistent for each object.
//The full array is being used in the products.js file
/*
const products = [{
  image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
  name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}, {
  image: 'images/products/black-2-slot-toaster.jpg',
  name: '2 Slot Toaster - Black',
  rating: {
    stars: 5,
    count: 2197
  },
  priceCents: 1899
}];
*/

let productsHTML = '';

//Step 2: Generate the html using the data we had saved before. We want to generate html because its quicker to add another object then to add all the html.
//This consist of looping through the data and for each object we create a template string with the html we want to generate and then input our objects properties into the certain <div> to render the data.
//We want all this html to be one string so that we can render it, so we use the accumulator pattern which is where we create a variable outside the loop to initiate it.
//we then set that variable equal to itself + the template string so that each generated html gets added to one string.
products.forEach((product)=>{
  productsHTML = productsHTML + `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});
// Part of Step 3: above in the button class we are using a data attribute. THis is the same as any HTML attribute. Data attributes just have to start with "data-"
//With this attribute we can set the product name on the button. We are using a template string to get the object product.name

//after we combined the products into 1 string we want to go find the parent <div> for these products.
//we give that parent <div> a new class name for js and now we want to generate the html we saved inside that <div>
//so we do a simple innerHTML = productsHTML inorder to generate our html.
document.querySelector('.js-products-grid').innerHTML = productsHTML;


//Step 3 Start: making it interactive. 
//We have to loop through all the buttons because the class is shared among all the add to cart buttons.
//we then just use a event listener for the button element to listen for a click of a button.
//we are going to want to push the property values to a cart.js script that will hold what is in out cart in the from of an array and object.
//using the data attribute we will be able to get the existing objects properties and values for each button and push that to the cart.
document.querySelectorAll('.js-add-to-cart')
  .forEach((button)=>{
    button.addEventListener('click', ()=>{
      //This allows us to get all data attributes attatched to this button.
      //after dataset we want to use dot notation to get this name "data-product-name"
      //now what happens is we need to change it from Kabob case to Camel case meaning we remove the dash and make it one text string.
      const productId = button.dataset.productId;

      let matchingItem;

      //we need to loop through each item and see if we have already added that item to the cart
      cart.forEach((item)=>{
        //check is the product name exist already
        if(productId === item.productId){
          //if it does exist it will set it equal to this variable
          matchingItem = item;
        }
      });

      //truthy value saying if mathicng item has a value then just add 1 to its quantity
      if(matchingItem){
        matchingItem.quantity += 1;
      }else{
        //else we push that new item to the cart
        cart.push({
          //creating new properties for the cart object
          //for the new productName property we use the value that we got from the data attribute
          productId: productId,
          quantity: 1
        });
      }

      let cartQuantity = 0;
      cartElement = document.querySelector('.js-cart-quantity');

      cart.forEach((item)=>{
        cartQuantity += item.quantity;
        cartElement.innerHTML = cartQuantity;
      });
    });
  })