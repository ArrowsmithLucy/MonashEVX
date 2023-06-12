/**
 * Tool 6: Supplier's Monash EVX External Website
 * 
 * This JS file is for feature 5i of Tool 6
 * Each message should display:
            - The message
            - Time stamp
            - Name of the person who sent the message
 * Should be able to edit a message
 * Should be able to delete a message
 *
 *  
 * Dev: Lucy Arrowsmith
 * A Js file for functions regarding messaging the supplier on the customer profile page
 * 
 * 
 * 
 * To check the messaging page with mock data, uncomment mockdata.js on line #34 and #37 in userProfile.html
 * Change all occurances of KEY_LS_STUB_SUPPLIERS to KEY_LS_SUPPLIER
 **/




/**
 * To check the userProfile page using mock data;
 * Uncomment lines #17 and #18
 * And comment lines #20 an #21
 **/
let index = getLocalStorage(KEY_LS_MSG_INDEX);
let supplierIndex = getLocalStorage(KEY_LS_SUPPLIER_INDEX);


let currentUser = getLocalStorage(KEY_LS_STUB_USERS)[0]
// let currentUser = getLocalStorage(KEY_LS_USER_PROFILE);  
let supplierArray = getLocalStorage(KEY_LS_STUB_SUPPLIERS);
// let supplierArray = getLocalStorage(KEY_LS_SUPPLIER);






/**
 * Function convertDate()
 * param: n/a
 * returns: an updated supplierArray with date objects
 * A function used to convert to a date object once it has been grabbed from local storage
 * 
 **/function convertDate() {
    for (let i = 0; i < supplierArray.length; i++) {
        for (let j = 0; j < supplierArray[i].users.length; j++) {
            for (let k = 0; k < supplierArray[i].users[j].history.length; k++) {
                let dateObj = new Date(Date.parse(supplierArray[i].users[j].history[k].time))
                supplierArray[i].users[j].history[k].time = dateObj
            }
        }
    }
    return supplierArray
}
//Update supplierArray
supplierArray = convertDate()




/**
 * Function userDirectedFromHome() 
 * param: n/a
 * The function is used when a user clicks on a suppliers name in the home page, 
 * it will display the messages for the specific supplier/user.
 * returns: n/a
 **/
function userDirectedFromHome() {
    let supplierIndex = getLocalStorage(KEY_LS_SUPPLIER_INDEX);
    if (supplierIndex != null) {

        // Switching to messages tab of userProfile.html
        if (document.querySelectorAll(`[id="editProfileTabContent"]`)[0].classList.contains('show', 'active')) {
            document.querySelectorAll(`[id="editProfileTabContent"]`)[0].classList.remove('show', 'active')
        }
        document.getElementById(`messagesTabContent`).classList.add("active")
        document.querySelector(`[id="messagesTabContent"]`).classList.add("show", "active")


        // Displaying messages from supplierIndex
        for (let i = 0; i < supplierArray.length; i++) {
            if (supplierIndex.name == supplierArray[i].name) {
                for (let j = 0; j < supplierArray[i].users.length; j++) {
                    let userNoMsgs = 0
                    if (supplierArray[i].users[j].email == currentUser._email) {
                        displayMessages()
                        previewClicked(i)
                        userNoMsgs += 1
                    }
                    console.log(userNoMsgs)
                    if (userNoMsgs == 0) {
                        supplierArray[i].users.push(
                            {
                                email: currentUser._email,
                                history:[]    
                            }
                        )
                        document.getElementById("contacts").innerHTML = 
                            `<button type="button" class="list-group-item list-group-item-action" data-bs-toggle="list"
                                href="outputArea_${i}" role="tab" aria-controls="outputArea_${i}" onclick="updateMsgIndex(${i}); previewClicked(${i})" >
                                <a id="contactName">${supplierIndex.name}</a><br>
                                <p id="contactPreview"></p>
                            </button`
                        document.getElementById("messageOutputArea").innerHTML = ""
                    }
                }
            }
        }
    }
}
userDirectedFromHome()



/**
 * Function checkIfMsgHistoryExists()
 * param: n/a
 * returns: a seperate display for an empty inbox
 * The function is used to check if the currentUsers has no messages in local storage with any supplier
 */
function checkIfMsgHistoryExists() {
    for (let i = 0; i < supplierArray.length; i++) {
        for (let j = 0; j < supplierArray[i].users.length; j++) {
            let test = Object.values(supplierArray[i].users[j])
            if (test[j] == currentUser._email) {
                previewClicked(i)
            }
            else if (test[j] != currentUser._email) {
                console.log(currentUser._email)
                document.getElementById("contacts").innerHTML = `
                    <p class="noMsgs">You have no messages.</p>
                        <i class="bi bi-inbox-fill inboxIcon"></i>
                    <p class="noMsgs" style="font-size:10px;">Send a message to a supplier to get started.</p>
                `
            }

        }
    }
}

/**
 * Function displayMessages()
 * param: n/a
 * returns: messages between currentUser and each supplier
 * The function confirms if the user has a message histroy with the supplier, then displays each message on the screen. 
 * It will also display the message preview section.
 * Note: Funtions such as editMessage(), deleteMessage(), updateMsgIndex() and previewClicked() have been added at this stage
 */

function displayMessages() {
    let supplierArray = getLocalStorage(KEY_LS_STUB_SUPPLIERS);
    supplierArray = convertDate()
    let output = ""
    let msgPreview = ""
    //On default show all messages and previews
    for (let i = 0; i < supplierArray.length; i++) {
        for (let j = 0; j < supplierArray[i].users.length; j++) {

            let userShow = 0
            //If user has a histroy with the supplier
            if (supplierArray[i].users[j].email == currentUser._email) {
                let msgHistory = supplierArray[i].users[j].history
                output += `<div class="tab-pane" id="outputArea_${i}" role="tabpanel" name="messageTab">`
                for (let k = 0; k < msgHistory.length; k++) {
                    if (msgHistory[k].type == "Customer") {
                        let dateFormat = formatDate(msgHistory[k].time)
                        output += `
                        <div class="row  d-flex flex-row-reverse" style="text-align: right; padding:0; margin:0">
                            <div class="row">
                                <span style="font-size:small; font-weight:500">${msgHistory[k].name}</span>
                            </div>
                            <div class="row d-flex flex-row-reverse" style="padding-bottom: 3px;">
                                <div class="col-sm-8">
                                    <span style="font-size: small;">${msgHistory[k].msg}</span>
                                </div>
                            </div>
                            <div class="row d-flex flex-row-reverse">
                                <div class="col d-flex flex-row-reverse" style="font-size: xx-small">
                                    <i class="bi bi-three-dots" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBtns"></i>
                                    <span>${dateFormat}</span>
                                </div>
                                <div class="row accordian-collapse collapse" id="collapseBtns">
                                    <div class="col" style="line-height: 10px;">
                                        <span style="font-size: xx-small; margin-right:3px;" type="button" id="edit" data-bs-toggle="modal" data-bs-target="#editMessage" onclick="editMessage(${i},${k})">Edit</span>
                                        <span style="font-size: xx-small; margin-right:3px;" type="button" id="delete" onclick="deleteMessage(${i},${k})">Delete</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                    }
                    else if (msgHistory[i].type == "Supplier") {
                        console.log(msgHistory[k].time)
                        let dateFormat = formatDate(msgHistory[k].time)
                        output += `
                        <div class="row" style="text-align: left;">
                            <div class="row">
                                <span style="font-size:small; font-weight:500">${msgHistory[k].name}</span>
                            </div>
                            <div class="row" style="padding-bottom: 3px;">
                                <div class="col-sm-8">
                                    <span style="font-size: small;">${msgHistory[k].msg}</span>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-4" style="font-size: xx-small">
                                    <span>${dateFormat}</span>
                                </div>
                            </div>
                        </div>
                    `
                    }
                }
                output += `</div>`
                userShow += 1

                // Display message Preview
                let suppName = supplierArray[i].name
                let lastMsg = msgHistory[msgHistory.length - 1]

                msgPreview += `
                    <button type="button" class="list-group-item list-group-item-action" data-bs-toggle="list"
                         href="outputArea_${i}" role="tab" aria-controls="outputArea_${i}" onclick="updateMsgIndex(${i}); previewClicked(${i})" >
                        <a id="contactName">${suppName}</a><br>
                        <p id="contactPreview">${lastMsg.msg}</p>
                    </button>
                `
                document.getElementById("contacts").innerHTML = msgPreview

            }



        }
        document.getElementById("messageOutputArea").innerHTML = output
    }
}


// Call functions to display all message history
// checkIfMsgHistoryExists()
displayMessages()
userDirectedFromHome()



/**
 * Function updateMsgIndex()
 * param: index
 * returns: n/a
 * The function keeps track of which message histroy needs to be displayed  
 */
function updateMsgIndex(index) {
    localStorage.setItem(KEY_LS_MSG_INDEX, index);
}




/**
 * Function previewClicked()
 * param: index
 * returns: n/a
 * The function is responsible for displaying the correct message content, dependent on which contact has been selected
 */
function previewClicked(index) {
    for (let i = 0; i < document.querySelectorAll(`[name="messageTab"]`).length; i++) {
        if (document.querySelectorAll(`[name="messageTab"]`)[i].classList.contains('active')) {
            document.querySelectorAll(`[name="messageTab"]`)[i].classList.remove('active')
        }
    }
    document.getElementById(`outputArea_${index}`).classList.add("active")
    document.querySelector(`[aria-controls="outputArea_${index}"]`).classList.add("active")
}





/**
 * Function sendMessage()
 * param: n/a
 * returns: calls displayMessages() to print new message to screen  
 * The function will check which contact is currently active and will print the new message to that suppliers/users array
 * 
 **/
function sendMessage() {
    let newMsg = {
        type: "Customer",
        name: "",
        msg: "",
        time: ""
    }

    newMsg.name = currentUser._name;
    newMsg.msg = document.getElementById("tftChatMessage").value;
    newMsg.time = new Date();

    for (let i = 0; i < supplierArray.length; i++) {
        for (let j = 0; j < supplierArray[i].users.length; j++) {
            if (currentUser._email == supplierArray[i].users[j].email) {
                if (document.querySelectorAll(`[name="messageTab"]`)[i].classList.contains('active')) {
                    supplierArray[i].users[j].history.push(newMsg)
                    displayMessages()
                    document.querySelectorAll(`[name="messageTab"]`)[i].classList.add('active')
                }
            }
        }
    }
    setLocalStorage(KEY_LS_STUB_SUPPLIERS, supplierArray)
}



/**
 * Function editMessage()
 * params: supIndex -- supplier Index
 * params: msgIndex -- message Index
 * The function will insert the message value into the editting modal.
 * When a user clicks "save", the <input> tag will have an onclick function to updateMessage()
 */
function editMessage(supIndex, msgIndex) {
    for (let j = 0; j < supplierArray[supIndex].users.length; j++) {
        if (currentUser._email == supplierArray[supIndex].users[j].email) {
            document.getElementById("msgArea").innerText = supplierArray[supIndex].users[j].history[msgIndex].msg
            document.getElementById("saveMsg").setAttribute("onclick", `updateMessage(${supIndex},${msgIndex})`)
        }
    }
}



/**
 * Function updateMessage()
 * params: supIndex -- supplier Index
 * params: msgIndex -- message Index
 * When the user clicks "save", the message is updated in supplierArray with a new date
 * displayMessages() is then called to display updated message history
 */

function updateMessage(supIndex, msgIndex) {
    for (let j = 0; j < supplierArray[supIndex].users.length; j++) {
        if (currentUser._email == supplierArray[supIndex].users[j].email) {
            supplierArray[supIndex].users[j].history[msgIndex].msg = document.getElementById("msgArea").value
            supplierArray[supIndex].users[j].history[msgIndex].time = new Date()

            displayMessages()
            document.querySelector(`[aria-controls="outputArea_${supIndex}"]`).classList.add('active')
            document.querySelector(`[id="outputArea_${supIndex}"]`).classList.add('active')
        }
    }
    setLocalStorage(KEY_LS_STUB_SUPPLIERS, supplierArray)
}



/**
 * Function deleteMessage
 * params: supIndex -- supplier Index
 * params: msgIndex -- message Index
 * User will recieve an alert if delete button is clicked, if confirmed, 
 * the message will be deleted from the histroy and supplierArray in LS will be update
 */
function deleteMessage(supIndex, msgIndex) {
    for (let j = 0; j < supplierArray[supIndex].users.length; j++) {
        if (currentUser._email == supplierArray[supIndex].users[j].email) {
            if (confirm(`Delete message ${supplierArray[supIndex].users[j].history[msgIndex].msg}`)) {
                supplierArray[supIndex].users[j].history.splice(msgIndex, 1)
                setLocalStorage(KEY_LS_STUB_SUPPLIERS, supplierArray)
            }
        }

    }
    displayMessages()
    previewClicked(supIndex)
    //update Local storage
    setLocalStorage(KEY_LS_STUB_SUPPLIERS, supplierArray)
}




/** 
 * Function formatDate()
 * param: msgDate. the param is taken as the time of a message sent or receieved between a spcecific supplier and customer. 
 * returns: A short hand date string, that will print to the screen. For example, 'Tue, 15 Oct, 13:49'
 * The function is made to convert each date object in the supplierArray to a readable date and time.
**/
function formatDate(msgDate) {
    const NUM_DAYS_IN_WEEK = 7;
    let today = new Date();

    let time = msgDate.toLocaleTimeString().slice(0, 5)
    let date = msgDate.getDay()
    let day = msgDate.toLocaleString('default', {
        weekday: 'short'
    })
    let month = msgDate.toLocaleString('default', {
        month: 'short'
    })

    let dateDifference = today.getDate() - msgDate.getDate()

    // Printing message date if within the previous week
    if ((msgDate.getMonth() == today.getMonth())
        && (msgDate.getFullYear() == today.getFullYear())
        && (0 <= dateDifference && dateDifference < NUM_DAYS_IN_WEEK)) {

        if (msgDate.getDate() == today.getDate()) {
            return `Today ${time}`
        }
        else if (msgDate.getDate() == today.getDate() - 1) {
            return `Yesterday ${time}`
        }
        else {
            return `${day} ${time}`
        }
    }
    //Printing message date otherwise
    else {
        return `${day}, ${date} ${month}, ${time}`
    }
}


