/**

 * Dev: Lucy Arrowsmith
 * A temporary js file for storing product details on the page
 * 
 * <!-- All images are obtained from repco.com.au -->
 */


//Grabbing key for product
let products = localStorage.getItem(KEY_LS_PRODUCT_DATA);

/* Supplier's components */
let productsList = [
    {
        _componentName: "Woodgrain Steering Wheel",
        _componentPrice: 100,
        _componentImagePath:  "img/wheels/Autotecnica Dino Woodgrain Steering Wheel.jpg",
        _manufacturingYear: 2020,
        _stockQty: 255,
        _warranty: "5 years",
        _leadTime: "6 months",
        _supplier: "Tesla Motors",
        _componentDescription: "Woodgrain Steering wheel specially designed with comfort in mind",
        _category: "Steering & Wheels",
    },
    {
        _componentName: "Woodgrain Steering Wheel",
        _componentPrice: 450,
        _manufacturingYear: 2019,
        _stockQty: 255,
        _componentDescription: "Woodgrain Steering wheel specially designed with comfort in mind",
        _warranty: "5 years",
        _leadTime: "6 months",
        _supplier: "Repco",
        _category: "Steering & Wheels",
        _componentImagePath: "img/wheels/Autotecnica Dino Woodgrain Steering Wheel.jpg"
    },
    {
        _componentName: "Wheel Bearing Kits",
        _componentPrice: 265,
        _manufacturingYear: 2020,
        _stockQty: 255,
        _componentDescription: "High Grade Steel Material Speicifications, which increase bearing life and durability",
        _warranty: "7 years",
        _leadTime: "1 month",
        _supplier: "Repco",
        _category: "Steering & Wheels",
        _componentImagePath: "img/wheels/Repco Wheel Bearing Kits.jpg"
    },
    {
        _componentName: "Trim Wheel HQ For 4 Wheel",
        _componentPrice: 450,
        _manufacturingYear: 2019,
        _stockQty: 255,
        _componentDescription: "Rare spares - Trijm wheel HQ - Early HJ Caps & Nuts For 4 Wheel",
        _warranty: "6 years",
        _leadTime: "1 month",
        _supplier: "Repco",
        _category: "Steering & Wheels",
        _componentImagePath: "img/wheels/Trim Wheel HQ -Early HJ Caps & Nuts For 4 Wheel.jpg"
    },
    {
        _componentName: "Diesel turbo Charger",
        _componentPrice: 1670,
        _manufacturingYear: 2015,
        _stockQty: 255,
        _componentDescription: "Balanced and calibrated to OEM specifications",
        _warranty: "8 years",
        _leadTime: "4 months",
        _supplier: "Repco",
        _category: "Motors & Engines",
        _componentImagePath: "img/engine/Cateran Replacement Diesel Turbo Charger.jpg"
    },
    {
        _componentName: "Century Car Battery DIN65L",
        _componentPrice: 200,
        _manufacturingYear: 2020,
        _stockQty: 255,
        _componentDescription: "Superior performance battery charger with a standard terminal post",
        _warranty: "2 years",
        _leadTime: "1 months",
        _supplier: "Repco",
        _category: "Batteries",
        _componentImagePath: "img/battery/Century Car Battery DIN65L.jpg"
    },
    {
        _componentName: "Pentrite Power Steering Fluid",
        _componentPrice: 16,
        _manufacturingYear: 2019,
        _stockQty: 255,
        _componentDescription: "1L steering fluid for optimal performance",
        _warranty: "1 year",
        _leadTime: "none",
        _supplier: "Repco",
        _category: "Accessories",
        _componentImagePath: "img/Accessories/Penrite Power Steering Fluid 1L.webp"
    }
]

let icons = [
    ["Accessories", "bi-nut"],
    ["Batteries", "bi-battery"],
    ["Motors & Engines", "bi-car-front"],
    ["Steering & Wheels", "bi-gear-wide-connected"]
]


//Add product to LS
localStorage.setItem(KEY_LS_PRODUCT_DATA, productsList)
setLocalStorage(KEY_LS_PRODUCT_DATA, productsList)
