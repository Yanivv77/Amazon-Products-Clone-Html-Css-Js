class Product {
  constructor(pName, image) {
    this.pName = pName
    this.image = image
  }
}

products = []

Product1 = new Product(
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nam!',
  'https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UL480_QL65_.jpg'
)

Product2 = new Product(
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nam!',
  'https://m.media-amazon.com/images/I/91fAU6mxFsL._AC_UL480_QL65_.jpg'
)

Product3 = new Product(
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, nam!',
  'https://m.media-amazon.com/images/I/612G5AUOZWL._AC_UL480_QL65_.jpg'
)

products.push(Product1, Product2, Product3)

html = `
<item class="card col-md  m-5 card-body">
    <img src="${Product3.pName}" class='card-body'>
    <h4 class="item-text"> ${Product3.image}</h4>
</item>
`
document.getSelection('products-showcase').innerHTML = html
console.log(document.getSelection('products-showcase').innerHTML)

//Session 2- todo:

//use the creation of the products as you asked in the home work (do it now if you didn't succeed - here is the task:

//Take the attached excel and create with the values all the products that appear there.
//U can use either the constructor function or the factory function,
//that you have created earlier.
//Add three things from there
// Add them to your products array
//Connect it to the html document, by calling a loop and insert all products into the document

//if remain time... TODO
