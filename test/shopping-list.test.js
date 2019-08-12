
describe('Shopping List' , function(){

    it('should display the added product on screen' , function(){
        let input= ShoppingList();
        input.itemAdded("Milk")
        assert.equal("MILK", input.getList())
    })


    it('should display the added products on screen in UPPERCASE' , function(){
        let input= ShoppingList();
        input.itemAdded("sugar")
        assert.equal("SUGAR", input.getList())
    })

    it('should return total for an item added on list' , function(){
        let input = ShoppingList();
        input.itemAdded("Milk")
        assert.deepEqual((15, input.addTotal()));
    });

    it('should return sum for all items added on list' , function(){
        let input = ShoppingList();
        input.itemAdded("Milk")
        input.itemAdded("Juice")
        assert.deepEqual(48, input.addTotal());
    });
})