function ScrollToOne(){
	window.scrollTo(0,200)
}
function ScrollToTwo(){
	window.scrollTo(0,400)
}
function ScrollToThree(){
	window.scrollTo(0,600)
}

function ScrollToFour(){
	window.scrollTo(0,900)
}

function ScrollToFive(){
	window.scrollTo(0,1200)
}

function BackToBlue(){
	let background = document.getElementById('one');
	background.style.backgroundColor='blue';
}

function BackToGreen(){
	let background = document.getElementById('one');
	background.style.backgroundColor='green';
}



let buttons = document.getElementsByTagName('button');
console.log(buttons);
buttons[0].addEventListener('click', ScrollToOne);
buttons[1].addEventListener('click', ScrollToTwo);
buttons[2].addEventListener('click', ScrollToThree);
buttons[3].addEventListener('click', ScrollToFour);
buttons[4].addEventListener('click', ScrollToFive);
buttons[5].addEventListener('click', BackToBlue);
buttons[6].addEventListener('click', BackToGreen);
