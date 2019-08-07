

$(document).ready(function(){

for (var i=0; i < items.length; i++) {
	$("#container").prepend(`
		<div class="itembox">
		<img src="${items[i].image}">
		<p class="name">${items[i].name}</p>
		<p class="price">Price: ${items[i].price}€</p>
		<p class="calories">Calories: ${items[i].calories}</p>
		</div>`);}
});


