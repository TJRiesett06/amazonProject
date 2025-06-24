/*JavaScript core steps to take:
1. Save the data
2.Generate the HTML
3. Make it interactive
*/

//Step 1: Saving the data of each product into an array. The array is filled with objects. Each object represetns each product and their properties.
//This is called a Data structure.
//This consist of creating an array that hold each object. We then create each property we'll want for that object and make it consistent for each object.
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
}];

let productsHTML = '';

//Step 2: Generate the html using the data we had saved before.
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

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `;
});

console.log(productsHTML);
//after we combined the products into 1 string we want to go find the parent <div> for these products.
//we give that parent <div> a new class name for js and now we want to generate the html we saved inside that <div>
//so we do a simple innerHTML = productsHTML inorder to generate our html.
document.querySelector('.js-products-grid').innerHTML = productsHTML;