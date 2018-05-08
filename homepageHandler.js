let flyDistance=0;
function moveShip(){
	flyDistance= flyDistance+4;
	document.getElementById("movingShip").style.left= flyDistance+'px';
	
	if(flyDistance>window.innerWidth- 120){
		flyDistance=0;
	}
}

setInterval(moveShip,50);
console.log(screen.width);
