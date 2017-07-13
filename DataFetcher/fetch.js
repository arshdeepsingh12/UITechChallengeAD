
	function fetchData() {
		console.log("Im in  fetcher");
		var request = new XMLHttpRequest();
		request.open('GET', 'ad.json')
		request.onload = function() {
			var data = JSON.parse(request.responseText);
			console.log("Im going in Loader");
			loadData(data);

		}
		request.send();
	};

