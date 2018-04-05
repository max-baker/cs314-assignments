'use strict';
//Task 1
function CharSwap(string){
	if(string.length<2){
		console.log("String must be longer than 0");
	}else{
		let last = string.length-1;
		let newStr = string[last]+string.substr(1,last-1)+string[0];
		return newStr;
	}
}
//Task 2
function HiString(string){
	if(string.length<2){
		console.log("String must be longer than 0");
	}else{
		if(string.substr(0,2)=='Hi'){
			return string;
		}else{
			return 'Hi'+string;
		}
	}
}
//Task 3
function ThreeCharsToFront(string){
	if(string.length<4){
		console.log("String must be longer than 2");
	}else{
		let last = string.length-1;
		return string.substr(last-2,last)+string.substr(0,last-2);
	}
}
//Task 4
function StringsToSentence(){
	let string = window.prompt();
	let words = string.split(',');
	if(words.length != 3){
		console.log("please enter three words separated by commas");
	}
	alert('My favorite color is ' +words[0]+ ', '+words[1]+' are awesome, and I love '+string[2]+'!');
}
//Task 5
function UpperOrLower(){
	let string = window.prompt();
	if(string.length<3){
		return string.toUpperCase();
	}else{
		return string.substr(0,3).toLowerCase()+string.substr(3,string.length-1).toUpperCase();
	}
}
//Task 6
//Task 7
//Task 8
//Task 9
//Task 10
//Function Calls
//console.log(CharSwap(window.prompt()));
//console.log(HiString(window.prompt()));
//console.log(ThreeCharsToFront(window.prompt()));
//console.log(StringsToSentence());
//console.log(UpperOrLower());