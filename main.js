//! Global Variables
const baseURL = `https://fakestoreapi.com`;
const productsAll = "/products"
const productsJewelry = "/products/category/jewelery"
const productsMens = "/products/category/men's_clothing"
const productsElectronics = "/products/category/electronics"

let buildURL = `${baseURL}` + productsAll;
let jewelryURL = `${baseURL}` + productsJewelry;
let electronicsURL = `${baseURL}` + productsElectronics;

let mensURL = `${baseURL}` + productsMens;


let grabFetch = fetch(buildURL)
            .then(res=>res.json())
            .then(json=>console.log(json))
        
console.log(grabFetch);

let grabFetch2= fetch(jewelryURL)
            .then(res=>res.json())
            .then(json=>console.log(json))
        
console.log(grabFetch2);

let grabFetch3= fetch(mensURL)
            .then(res=>res.json())
            .then(json=>console.log(json))
        
console.log(grabFetch3);

let grabFetch4= fetch(electronicsURL)
            .then(res=>res.json())
            .then(json=>console.log(json))
        
console.log(grabFetch4);