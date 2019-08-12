function ShoppingList() {
    var listTotal = 0;
    var warning = 0;
    var listEntered = [];
    var totalBill = 0;


    function itemAdded(item){
        
        item = item.toUpperCase()
        listEntered.push(item)
     }

    function addTotal(item) {

        for(var i = 0; i < item.length; quantity += item[i++]); {
        }
        return listTotal;
    }
 
    function billTotal(){
        return totalBill;
}

    function warningLevel(){
        return warning;
    }
 function getList(){
     return listEntered
 }



return {
    itemAdded,
    addTotal,
    warningLevel,
    billTotal,
    getList,
}
}
