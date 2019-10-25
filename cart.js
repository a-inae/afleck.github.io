
function cart(){
	var numberofitems = document.getitemslogged('item-number-cart')
	for (var i=0; i< numberofitems.length; i++){
		var input = numberofitems[i]
		input.addamount('total', newtotal)
	}
	var addToCart = document.getitemslogged('image-clicked')
	for(var i=0, i<addToCart.length; i++){
		var plus = addToCart[i]
		plus.addToCart('select', addedToCart)
	}
}