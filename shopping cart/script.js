$(document).ready(function(){

for (var i=0; i < items.length; i++);
	$("items").prepend(`
		<img src="${items[i].image}">
		<p>Price: ${items[i].price}€</p>
		<p>Calories: ${items[i].calories}</p>

		`)






	for (var i=0; i<groceries.length; i++){
		$("#grocerybox").prepend(`
			<div class="item">
				<img src="${groceries[i].image}">
				<p>${groceries[i].product}</p>
				<p>Price: ${groceries[i].price}€</p>
				<button class="status${i}"></button>
			</div>
			`);
		if (groceries[i].quantity > 0) {
			$(`.status${i}`).text("AVAILABLE");
		}
		else {
			$(`.status${i}`).text("OUT OF STOCK");
		}

	}
})