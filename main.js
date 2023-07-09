//! Global Variables
const baseURL = `https://fakestoreapi.com`;
const productsAll = "/products"
const productsJewelry = "/products/category/jewelery"
const productsMens = "/products/category/men's%20clothing"
const productsElectronics = "/products/category/electronics"
const productsWomens = "/products/category/women's%20clothing"

// let buildURL = `${baseURL}` + productsAll;
let jewelryURL = `${baseURL}` + productsJewelry;
let electronicsURL = `${baseURL}` + productsElectronics;
let mensURL = `${baseURL}` + productsMens;
let womensURL = `${baseURL}` + productsWomens;

let grabFetch3= fetch(mensURL)
            .then(res=>res.json())
            .then(json=>console.log(json))
        
console.log(grabFetch3);

// let grabFetch = fetch(buildURL)
// .then(res=>res.json())
// .then(json=>console.log(json))

// console.log(grabFetch);


// let grabFetch2= fetch(jewelryURL)
//             .then(res=>res.json())
//             .then(json=>console.log(json))
        
// console.log(grabFetch2);

// let grabFetch4= fetch(electronicsURL)
//             .then(res=>res.json())
//             .then(json=>console.log(json))

// console.log(grabFetch4);

// let grabFetch5= fetch(womensURL)
//             .then(res=>res.json())
//             .then(json=>console.log(json))
        
// console.log(grabFetch5);