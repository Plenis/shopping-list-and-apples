var itemAddedElem = document.querySelector("#itemAdded");
var addTotalElem = document.querySelector("#addTotal");
var addBtnElem = documnet.querySelector(".addBtn");
var removeBtnElem = document.querySelector(".removeBtn");
var updateBtnElem = document.querySelector(".updateBtn");
var displayListElem = document.querySelector(".displayList");

var message = document.querySelector('.msg');
var instance = AppleSeller();

function addToListBtn(){
    var item = itemAddedElem.value;

    if(item !== true){
        message.innerHTML = "Invalid entry!"
    }else{
        instance.itemAdded(plate)
        billTotal(instance.getList());
        message.innerHTML = "Added successfully to list!"
}

function removeFromListBtn(){
    message.innerHTML = "";
    counterElem.innerHTML = "";

}

function updateTotalBtn(){

}

function displayShopList(list){
        displayListElem.innerHTML = "";
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            createList(element)
        }
    
}

function createList(shoplist) {
    var list = document.createElement("div");
    list.textContent = shoplist;
    displayPlateElem.appendChild(list);
}

addBtnElem.addEventListener('click', addToListBtn)
removeBtnElem.addEventListener('click', removeFromListBtn)
updateBtnElem.addEventListener('click', updateTotalBtn);
