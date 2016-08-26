chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		var path = location.href.split( '/' )[2];
		var bankSettings = config[path];
		if(bankSettings){
			$.each($(bankSettings["balance_element"]), function(index, element){
				var currencyOnly = $(element).html().replace(/[^\d.-]/g, '');
				var currencyAsFloat = parseFloat(currencyOnly);
				var conversionRate = conversions[bankSettings["original_currency"] + ">" + convertTo];
				var newRate = (currencyAsFloat * conversionRate).toFixed(2);
				$(element).html(currencyOnly + "<br> (" + convertTo.toUpperCase() + ": " + newRate + ")");
			});
		}
	}
	}, 10);
});
