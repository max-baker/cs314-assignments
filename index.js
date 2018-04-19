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

function TogglePinkOrange(event){
	let background = document.getElementById('two');
	if(background.style.backgroundColor!='pink'){
		background.style.backgroundColor='pink';
		event.target.innerText='Click for Orange';
	}
	else
	{
		background.style.backgroundColor='orange';
		event.target.innerText='Click for Pink';
	}
}

function AddToList(){
	let textToAdd = document.getElementById('textToList').value;
	let listEntry = document.createElement('li');
	listEntry.innerText= textToAdd;
	document.getElementById('addList').appendChild(listEntry);
}

function RemoveListEntry(event){
	let list = document.getElementById('removeList');
	list.removeChild(event.target);
}

function HighlightListEntry(event){
	let list = document.getElementById('selectList');
	let listItems = list.getElementsByTagName('li');
	event.target.style.backgroundColor='yellow';
	for(key in listItems){
		if(listItems[key]!=event.target)
			listItems[key].style.backgroundColor='lightgray';
	}
}

let buttons = document.getElementsByTagName('button');
buttons[0].addEventListener('click', ScrollToOne);
buttons[1].addEventListener('click', ScrollToTwo);
buttons[2].addEventListener('click', ScrollToThree);
buttons[3].addEventListener('click', ScrollToFour);
buttons[4].addEventListener('click', ScrollToFive);
buttons[5].addEventListener('click', BackToBlue);
buttons[6].addEventListener('click', BackToGreen);
buttons[7].addEventListener('click', TogglePinkOrange);
buttons[8].addEventListener('click', AddToList);
document.getElementById('removeList').addEventListener('click', RemoveListEntry);
document.getElementById('selectList').addEventListener('click', HighlightListEntry);
