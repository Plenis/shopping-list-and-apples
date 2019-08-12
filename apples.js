function AppleSeller() {

	function totalNumberSold(applesSoldList) {
		var totalGreen = 0;
		var totalRed = 0; 
		var totalYellow = 0;

		//    console.log(applesSoldList)
	   
		 for (var i=0;i<applesSoldList.length;i++){
			var totalApples = applesSoldList[i];
		  //console.log(applesSoldList)
		   
		   if ('red' === totalApples){
			 totalRed.push(totalApples)
		   }
		   if ('yellow' === totalApples){
			 totalYellow.push(totalApples)
		 }
		 else if ('green' === totalApples){
			 totalGreen.push(totalApples)
		 }
		 }
		 var totalApplesSold = (totalRed) + (totalYellow) + (totalGreen)
		//    console.log(totalRed.length)
		//    console.log(totalYellow.length)
		 return totalApplesSold.length ++
	}

	function totalIncome(applesSoldList) {
		return 0;
	}

	function totalIncomeGreenApples(applesSoldList) {
		return 0;
	}

	function totalProfit(applesSoldList, applePriceMap) {
		return 0;
	}

	// -- extra functions...

	function totalPerColorSold(apples, color) {
		return 0;
	}

	function totalIncomePerColor(apples, color) {
		return 0;
	}

	function totalProfitPerColor(apples, color, costMap) {
		return 0;
	}

	function mostProfitableColor(apples, color, costMap) {
		return 0;
	}
	return{
		totalIncome,
		totalIncomeGreenApples,
		totalIncomePerColor,
		totalNumberSold,
		totalPerColorSold,
		totalProfit,
		totalProfitPerColor,
		mostProfitableColor,
	}
}