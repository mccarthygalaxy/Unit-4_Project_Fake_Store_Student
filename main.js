//! Global Variables
const baseURL = `https://fakestoreapi.com`;
const productsAll = "/products"
const productsElectronics = "/products/category/electronics"
const productsJewelry = "/products/category/jewelery"
const productsMens = "/products/category/men's%20clothing"
const productsWomens = "/products/category/women's%20clothing"

let buildURL = `${baseURL}` + productsAll;
let jewelryURL = `${baseURL}` + productsJewelry;
let electronicsURL = `${baseURL}` + productsElectronics;
let mensURL = `${baseURL}` + productsMens;
let womensURL = `${baseURL}` + productsWomens;

let cart = []; // array for items in shopping cart
let grouping = []; // current category of cards

const catAll = document.getElementById('catAll');
const catJewelry = document.getElementById('catJewelry');
const catElectronics = document.getElementById('catElectronics');
const catMens = document.getElementById('catMens');
const catWomens = document.getElementById('catWomens');

const heroContainer = document.querySelector('.heroContainer');


//! Anonymous Functions

const displayFirstCard = item => {
    console.log(item);

    //* Create Elements
    let card = document.createElement('div');
    let img = document.createElement('img');
    let body = document.createElement('div');
    let title = document.createElement('h5');
    let description = document.createElement('p');
    let price = document.createElement('h5');
    let btn = document.createElement('btn');

    //* Set Attributes
    card.className = 'card';
    card.style.width = '18rem';
    img.src = item.img;
    img.className = 'card-img-top';
    img.alt = item.title;
    img.title = item.title;
    description.className = 'card-text';

    // img.style.height = "100px";

    body.className = 'card-body';
    title.textContent = item.title;
    description.textContent = item.desc;
    price.className = 'card-price';
    btn.className = 'btn btn-primary';
    btn.textContent = 'Add To Cart';

    //* Attach/Append Elements
    body.appendChild(title);
    body.appendChild(description);
    body.appendChild(btn);
    
    card.appendChild(img);
    card.appendChild(body);

    heroContainer.appendChild(card);

}

//! Listening Events

catAll.addEventListener('click', () => {
    fakeStore(productsAll);
})

catJewelry.addEventListener('click', () => {
    fakeStore(productsJewelry); // Call the fakeStore (fetchItems) function with the corresponding category URL
});

catElectronics.addEventListener('click', () => {
    fakeStore(productsElectronics);
});

catMens.addEventListener('click', () => {
    fakeStore(productsMens);
});

catWomens.addEventListener('click', () => {
    fakeStore(productsWomens);
})

//! Function to Fetch based on Category
function fakeStore(endpoint) {  // FakeStore Function
    fetch(baseURL + endpoint)
        .then((res) => res.json())
        .then((data) => {           // Process the fetched items data
            // console.log(data);
            let singleItem = data[0];
            // console.log(singleItem);

            let singleObj = {
                title: singleItem.title,
                desc: singleItem.description,
                price: singleItem.price,
                img: singleItem.image,
                category: singleItem.category
            }
            // console.log(singleObj);

            displayFirstCard(singleObj);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}
