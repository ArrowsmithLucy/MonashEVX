/**
 * Core logic for the whole application local storage management
 * Version 1.1
 * Dev: Chutiwat Banyat (creator), Lucy Arrowsmith (added to)
 * Last update: 31/10/2022
 */
const KEY_LS_SUPPLIER = "supplierArray";
const KEY_LS_USER_PROFILE = "userProfile" //User 
const KEY_LS_USER_KEY = "userArrayKey";
const KEY_LS_CART = "userCart";
const KEY_LS_CART_TO_CONF = "cartPendingCheckout";
const KEY_LS_GUEST_CUTOMER = "guestCustomer";
const KEY_LS_PRODUCT_DATA = "EvxData";
const KEY_LS_PRODUCT_INDEX = "productIndex";
const KEY_LS_MSG_INDEX = "messageIndex";
const KEY_LS_SUPPLIER_INDEX = "supplierIndex";
const KEY_LS_STUB_USERS = "stubUsers"; //Temp LS for stub users mock data
const KEY_LS_STUB_SUPPLIERS = "stubSuppliers" //Temp LS file for suppliers array



let stubUsers = [
    {
        "_email": "testser1@evx.com.au",
        "_name": "Tester",
        "_password": "testPassword",
        "_middleName": "",
        "_surname": "Tester",
        "_address1": "20 Rainforest walk",
        "_address2": "",
        "_surburb": "Clayton",
        "_state": "VIC",
        "_postcode": "3800",
        "_avataType": 4,
        "_order": [
            {
                "_orderNumber": "3788275225",
                "_orderDate": "2022-10-12T04:57:35.519Z",
                "_dateOfSale": "2022-10-12T04:57:35.519Z",
                "_orderStatus": 0,
                "_estDay": 5,
                "_itemOrder": [
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 1
                    },
                    {
                        "_componentName": "Test componenet",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 2
                    },
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    },
                    {
                        "_componentName": "Test component",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    }
                ]
            }
        ]
    },
    {
        "_email": "testser1@evx.com.au",
        "_name": "Tester",
        "_password": "testPassword",
        "_middleName": "",
        "_surname": "Tester",
        "_address1": "20 Rainforest walk",
        "_address2": "",
        "_surburb": "Clayton",
        "_state": "VIC",
        "_postcode": "3800",
        "_avataType": 4,
        "_order": [
            {
                "_orderNumber": "3788275225",
                "_orderDate": "2022-10-12T04:57:35.519Z",
                "_dateOfSale": "2022-10-12T04:57:35.519Z",
                "_orderStatus": 0,
                "_estDay": 5,
                "_itemOrder": [
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 1
                    },
                    {
                        "_componentName": "Test componenet",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 2
                    },
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    },
                    {
                        "_componentName": "Test component",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    }
                ]
            }
        ]
    },
    {
        "_email": "testser1@evx.com.au",
        "_name": "Tester",
        "_password": "testPassword",
        "_middleName": "",
        "_surname": "Tester",
        "_address1": "20 Rainforest walk",
        "_address2": "",
        "_surburb": "Clayton",
        "_state": "VIC",
        "_postcode": "3800",
        "_avataType": 4,
        "_order": [
            {
                "_orderNumber": "3788275225",
                "_orderDate": "2022-10-12T04:57:35.519Z",
                "_dateOfSale": "2022-10-12T04:57:35.519Z",
                "_orderStatus": 0,
                "_estDay": 5,
                "_itemOrder": [
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 1
                    },
                    {
                        "_componentName": "Test componenet",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 2
                    },
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    },
                    {
                        "_componentName": "Test component",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    }
                ]
            }
        ]
    },
    {
        "_email": "testser1@evx.com.au",
        "_name": "Tester",
        "_password": "testPassword",
        "_middleName": "",
        "_surname": "Tester",
        "_address1": "20 Rainforest walk",
        "_address2": "",
        "_surburb": "Clayton",
        "_state": "VIC",
        "_postcode": "3800",
        "_avataType": 4,
        "_order": [
            {
                "_orderNumber": "3788275225",
                "_orderDate": "2022-10-12T04:57:35.519Z",
                "_dateOfSale": "2022-10-12T04:57:35.519Z",
                "_orderStatus": 0,
                "_estDay": 5,
                "_itemOrder": [
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 1
                    },
                    {
                        "_componentName": "Test componenet",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 2
                    },
                    {
                        "_componentName": "Test compoenent",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    },
                    {
                        "_componentName": "Test component",
                        "_componentPrice": 10,
                        "_compoenentImagePath": "../img/logo/userAvataLogo/149071.png",
                        "_dateOfSale": "2022-10-12T04:57:34.342Z",
                        "_qty": 3
                    }
                ]
            }
        ]
    }
]

//Temporary supplier details ~ add user data to
let stubSuppliers = [
    {
        name: "Tesla Motors",
        address: "128 maple drive",
        users: [
            {
                email: "testser1@evx.com.au",
                history: 
                [
                    {
                        type: "Supplier",
                        name: "Tesla",
                        msg: "Hello, ",
                        time: new Date(2022,9,21)
                    },
                    {
                        type: "Customer",
                        name: "Lucy",
                        msg: "Hello, ",
                        time: new Date(2022,9,21)
                    },
                    {
                        type: "Supplier",
                        name: "Tesla",
                        msg: "Hello, this is a test message from the supplier",
                        time: new Date(2022,9,21)
                    },
                    {
                        type: "Supplier",
                        name: "Tesla",
                        msg: "Hello, this is a test message",
                        time: new Date(2022,9,21)
                    },
                    {
                        type: "Supplier",
                        name: "Tesla",
                        msg: "Hello, this is a test message 2",
                        time: new Date(2024,9,21)
                    },
                    {
                        type: "Customer",
                        name: "Lucy",
                        msg: "Hello, this is a test message from the customer",
                        time: new Date(2022,9,21)
                    }
                ]
            }
        ]
    },
    {
        name: "Repco",
        address: "30 bart street",
        users: [
            {
                email: "testser1@evx.com.au",
                history: 
                [
                    {
                        type: "Supplier",
                        name: "Repco",
                        msg: "Hello, this is a test message from the supplier",
                        time: new Date(2022,9,20)
                    },
                    {
                        type: "Customer",
                        name: "Lucy",
                        msg: "Hello, this is a test message from the customer",
                        time: new Date(2022,9,21)
                    },
                    {
                        type: "Customer",
                        name: "Lucy",
                        msg: "Hello, this is a test message from the customer 2",
                        time: new Date(2022,9,21)
                    }

                ]
            },
            {
                email: "allison@gmail.com",
                history:
                [
                    {
                    type: "Customer",
                    name: "Allison",
                    msg: "This is Allison's message test",
                    time: new Date(2022,9,30)}
                ]
            }
        ]
    }
]

let supplierDirect = {
    name: "",
}


let suppliers = [];
let users = [];
let userCart = []
let userProfile = null;
let product = [];
let msgs = [];
let msgIndex = ""



//Local Storage functions
function getLocalStorage(keyIn){
    return JSON.parse(localStorage.getItem(keyIn));   
}

function setLocalStorage(keyToSet,data){
    let JSONConverted = JSON.stringify(data)
    return localStorage.setItem(keyToSet,JSONConverted);
}


//Setting stubUsers and stubSuppliers in local storage
if (localStorage.length === 0){
    setLocalStorage(KEY_LS_STUB_USERS, stubUsers)
    setLocalStorage(KEY_LS_STUB_SUPPLIERS, stubSuppliers)
}


function getUserKey(userEmail){
    for(let x in users){
        if(userEmail === users[x].email){
            setLocalStorage(KEY_LS_USER_PROFILE,x);
        }
    }
} // Information

//Init localstorage for supplier if it not exist
if(getLocalStorage(KEY_LS_SUPPLIER) != null){
    suppliers = getLocalStorage(KEY_LS_SUPPLIER);
} else {
    setLocalStorage(KEY_LS_SUPPLIER,"");
}

//Init localstorage for user infromation if not exists
if(getLocalStorage(KEY_LS_USER_PROFILE) != null){
    userProfile = getLocalStorage(KEY_LS_USER_PROFILE)
} else {
    setLocalStorage(KEY_LS_USER_PROFILE,"");
}

//Init localstorage for user cart if not exists
if(getLocalStorage(KEY_LS_CART) != null){
    userCartItems=getLocalStorage(KEY_LS_CART);
}  else {
    setLocalStorage(KEY_LS_CART,"");
}

//Init localStorage for product data is not exists
if(getLocalStorage(KEY_LS_PRODUCT_DATA) != null) {
    product = getLocalStorage(KEY_LS_PRODUCT_DATA);
} else {
    setLocalStorage(KEY_LS_PRODUCT_DATA, "");
}

//Init localstorage for message data if not exists
if(getLocalStorage(KEY_LS_SUPPLIER_INDEX) != null) {
    supplierDirect.name = getLocalStorage(KEY_LS_SUPPLIER_INDEX);
} else {
    setLocalStorage(KEY_LS_SUPPLIER_INDEX, "")
}

//Init localstorage for message data if not exists
if(getLocalStorage(KEY_LS_MSG_INDEX) != null) {
    msgIndex = getLocalStorage(KEY_LS_MSG_INDEX);
} else {
    setLocalStorage(KEY_LS_MSG_INDEX, "")
}


