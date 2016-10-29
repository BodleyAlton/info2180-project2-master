/*Initial position of blank piece*/
var tBlank= 300;//top of blank piece
var lBlank= 300;//left margin of blank piece
var piece=[];
window.onload = function(){
	puzzle();
	$('#shufflebutton').click(shuffle);
}

function puzzle(){
	piece= $('#puzzlearea div');
	$('#puzzlearea div').addClass('puzzlepiece');
	var a = 0;
	var b = 3;
	for (var i =0; i< piece.length; i++) {
		for (var x = 0; x <= b; x++) {
			piece[i].style.top = 100 * a + "px";
			piece[i].style.left = 100 * x  + "px";
			piece[i].style.backgroundPosition = -x * 100 + "px " + a * -100 + "px";
			piece[i].addEventListener('mouseenter',movablepiece);							
			piece[i].addEventListener('click',move);
			piece[i].addEventListener('mouseleave',nmovablepiece);
			i++;
		}
		a++;
		if (a > 2) {
			b = 2;
		}
		i--;
		
	};
}

function movablepiece(event){
	if (Math.abs(tBlank - parseInt(this.style.top)) == 100) {
		if (Math.abs(lBlank - parseInt(this.style.left)) == 0) {
			$(this).addClass("movablepiece");
			return true;
		}
	} 
	else if (Math.abs(lBlank - parseInt(this.style.left)) == 100) {
		if (Math.abs(tBlank - parseInt(this.style.top)) == 0) {
			$(this).addClass("movablepiece");
			return true;
		}
	}
	return false;
}	
	
function nmovablepiece(x){
	if (Math.abs(tBlank - parseInt(this.style.top)) == 100) {
		if (Math.abs(lBlank - parseInt(this.style.left)) == 0) {
			$(this).removeClass("movablepiece"); 
		}
	} 
	else if (Math.abs(lBlank - parseInt(this.style.left)) == 100) {
		if (Math.abs(tBlank - parseInt(this.style.top)) == 0) {
			$(this).removeClass("movablepiece");
		}
	}
}

function move(event){
	if($(this).hasClass('movablepiece')){
		var ct=parseInt(this.style.top);
		var cl=parseInt(this.style.left);
		var tempT=tBlank;
		var tempL=lBlank;
		tBlank=ct;
		lBlank=cl;
		this.style.top = tempT +'px';
		this.style.left = tempL +'px';
	}	
}
function shuffle(){
	console.log("shuffle");
}