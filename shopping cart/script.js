

$(document).ready(function(){

for (var i=0; i < items.length; i++) {
	$("#container").prepend(`
		<div class="itembox">
		<img src="${items[i].image}">
		<p>Price: ${items[i].price}€</p>
		<p>${items[i].name}</p>
		<p>Calories: ${items[i].calories}</p>
		</div>`);}
});


