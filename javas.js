function dropfunction() {
	var x = document.getElementById('datefield');
	x.removeAttribute("class");
	x.setAttribute("class", "headdiv__dinp show");
	var y = document.getElementById("editbtn")
	y.removeAttribute("class");
	y.setAttribute("class", "dont-show");
}

window.onload = function() {
	document.getElementById("editbtn").onclick = function() {
		dropfunction();
	};

	$(function() {
		$("#date").datepicker();
	});


	$(function() {
		$("#tweetslist").draggable({
			containment: "parent"
		});
		$("#tweetslist2").draggable({
			containment: "parent"
		});
		$("#tweetslist3").draggable({
			containment: "parent"
		});

	});


}

$('#fetchbtn').click(function() {
		console.log("Im going in  fetcher");
		fetchData();

	});