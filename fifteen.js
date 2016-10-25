
window.onload = function(){
	puzzle();
	//h.r$('shufflebutton').observe('click', shuffle);
}

function puzzle(){
	var piece=[];
	piece= $('#puzzlearea div');
	$('#puzzlearea div').addClass('puzzlepiece');
	var a = 0;
	var b = 3;
	for (var i =0; i< piece.length; i++) {
		for (var x = 0; x <= b; x++) {
			piece[i].style.top = 100 * a + "px";
			piece[i].style.left = 100 * x  + "px";
			piece[i].style.backgroundPosition = -x * 100 + "px " + a * -100 + "px";
			i++;
		}
		a++;
		if (a > 2) {
			b = 2;
		}
		i--;
		
	};
}