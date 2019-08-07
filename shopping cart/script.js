

$(document).ready(function(){

for (var i=0; i < items.length; i++) {
	$("#container").prepend(`
		<div class="itembox">
		<img src="${items[i].image}">
		<p class="name">${items[i].name}</p>
		<p class="price">Price: ${items[i].price}€</p>
		<p class="calories">Calories: ${items[i].calories}</p>
		<button class="addToCartButton" id=${i}>Add<i class="fas fa-shopping-cart"></i></button>
		</div>`);}
});


