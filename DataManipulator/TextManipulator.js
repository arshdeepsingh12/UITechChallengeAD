function hashtag() {

}


var count = 0;
var x = document.getElementById("tweets");
var xno = document.getElementById("notweets").value;
var obj2 = [];
for (var i = 0; i < data.length; i++) {
	obj2[i] = data[i];
}
console.log(obj2);
for (var i = 0; i < data.length; i++) {
	if (count < xno) {
		var y = document.createElement('ul');
		y.setAttribute("class", "twitter-tweet");
		var y = document.createElement('ul');
		var z = document.createTextNode(data[i].text);
		var z1 = document.createTextNode(data[i].user.name);
		var z2 = document.createElement('br');
		y.appendChild(z1);
		y.appendChild(z2);
		y.appendChild(z);
		x.appendChild(y);
		count++;
	}
}
