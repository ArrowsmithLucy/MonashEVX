/**
 * Tool 6: Supplier's Monash EVX External Website
 * 
 * This JS file is for feature 1 of Tool 6
 * View supplier's components
 *      a) Should display all information regarding component
 *          - Part name
 *          - Manufacturing year
 *          - Part description
 *          - Warranty
 *          - Lead time
 *          - A photo of the part
 *          - Price
 * 
 * Dev: Lucy Arrowsmith
 * 
 * A JS file to display all products on the page. 
 * 
 * 
 * */




//Call displayProducts when page loads 
displayProducts()
let productIndex = localStorage.getItem(KEY_LS_PRODUCT_INDEX);
let supplierIndex = localStorage.getItem(KEY_LS_SUPPLIER_INDEX);

/**
 * Function displayProducts()
 * params: n/a
 * returns: each component as a clickable element on the page. 
 * The function is repsonisble for looping through the products and displaying them in even rows and columns
 */

function displayProducts() {
    let category = 0;
    let icon = 1;

    if (productsList.length > 0) {
        let output = ""
        for (let i = 0; i < productsList.length; i++) {
            for (let j = 0; j < icons.length; j++ ) {
                if (icons[j][category] === productsList[i]._category) {
                    if (i%4 == 0) {
                        output += `<div class="row justify-content-start">`
                    }
                    else {
                        output += ``
                    }
                    output += `
                    <div class="col component" style="background:#F5F5F5; margin: 5px;">
                        <div class="row" style="margin-top: 13px;">
                            <div class="col align-content-center">
                                <img src="${productsList[i]._componentImagePath}" class="img-fluid mx-auto d-block"
                                    alt="Mock image component" style="width:259px; height:194px;" data-bs-toggle="modal"
                                    data-bs-target="#componentModal">
                            </div>
                        </div>
                        <div class="row" style="margin-top: 8px;">
                            <p style="font-weight: bold;">${productsList[i]._componentName}</p>
                        </div>
                        <div class="row">
                            <p style="font-size: 10px;"><i class="bi ${icons[j][icon]}"
                                    style="margin-right: 10px;"></i>${productsList[i]._category}</p>
                        </div>
                        <div class="row" style="margin: 0">
                            <button type="button" class="btn btn-outline-dark btn-sm" data-bs-toggle="modal"
                                data-bs-target="#componentModal"  onclick="productModal(${i})">
                                <div class="row justify-content-between">
                                    <div class="col-2">
                                        <i class="bi bi-bag-plus"></i>
                                    </div>
                                    <div class="col-5">
                                        <span class="fw-semibold">$${productsList[i]._componentPrice}</span>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                    `
                }
            }
        }
        document.getElementById("productArea").innerHTML = output
    }
}

/**
 * Function productModal()
 * params: index
 * returns: n/a
 * A modal will appear with further deatil of the component part, using index to identify which product 
 */
function productModal(index) {
    localStorage.setItem(KEY_LS_PRODUCT_INDEX, index);


    let productName = document.getElementById("componentTitle");
    let productImg = document.getElementById("productImg");
    let year = document.getElementById("manufacturingYear");
    let desc = document.getElementById("description");
    let warranty = document.getElementById("warranty");
    let leadTime = document.getElementById("leadTime");
    let supplier = document.getElementById("supplier");

    console.log(productsList[index])

    productName.innerText = productsList[index]._componentName;
    productImg.src = productsList[index]._componentImagePath;
    year.innerText = productsList[index]._manufacturingYear;
    desc.innerText = productsList[index]._componentDescription;
    warranty.innerText = productsList[index]._warranty;
    leadTime.innerText = productsList[index]._leadTime;
    supplier.innerText = productsList[index]._supplier;


    let modal = new bootstrap.Modal(document.getElementById("componentModal"));
    modal.show();

}


/**
 * Function setSupplierKey()
 * params: n/a
 * returns: n/a
 * When the name of the supplier is clicked on the product modal, this function will store the name of the supplier in a key
 * When the user is then directed to userProfile.page and the messages for that supplier will open
 */
//Sets supplier key when supplier link is clicked
function setSupplierKey() {
    let productIndex = localStorage.getItem(KEY_LS_PRODUCT_INDEX);
    supplierDirect.name = productsList[productIndex]._supplier;

    setLocalStorage(KEY_LS_SUPPLIER_INDEX, supplierDirect)

}

//Function that directs a use to userProfile - message tab
function goToMessage() {
    window.location.assign('html/userProfile.html');
}

