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

// const heroContainer = document.querySelector('.heroContainer');
const displayContainer = document.querySelector('.displayContainer');


//! Anonymous Functions

const displayCards = items => {
    const displayContainer = document.getElementById('displayContainer');
    displayContainer.innerHTML = ''; // Clear the existing content

    items.forEach(item => {
        // Create card elements
        const col = document.createElement('div')
        const card = document.createElement('div');
        const img = document.createElement('img');
        const body = document.createElement('div');
        const title = document.createElement('h5');
        const description = document.createElement('p');
        const price = document.createElement('h5');
        const btn = document.createElement('a');

        // Set attributes and content for the card elements
        col.className = 'col';
        card.className = 'card';
        img.src = item.img;
        img.className = 'card-img-top mx-auto custom-image';
        img.alt = item.title;
        body.className = 'card-body';
        title.className = 'card-title';
        title.textContent = item.title;
        description.className = 'card-text';
        description.textContent = item.desc;
        price.textContent = 'Price: $' + item.price;
        btn.className = 'btn btn-primary';
        btn.textContent = 'Add To Cart';
        btn.href = '#';

        // Append the card elements to the display container
        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(price);
        body.appendChild(btn);

        card.appendChild(img);
        card.appendChild(body);

        col.appendChild(card);


        displayContainer.appendChild(col);
    });
};

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
            let eachObj = data.map((item) => ({
                title: item.title,
                desc: item.description,
                price: item.price,
                img: item.image,
                category: item.category
            }));

            displayCards(eachObj);
        })
        .catch((err) => {
            console.error('Error:', err);
        });
}
