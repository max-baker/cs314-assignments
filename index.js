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
function IntegerSwap(){
	let numbersString = window.prompt();
	let numbers = numbersString.split(',');
	if(numbers.length == 0){
		console.log("please enter two numbers separated by commas");
	}
	let temp = numbers[0];
	numbers[0] = numbers[numbers.length-1];
	numbers[numbers.length-1] = temp;
	alert(numbers);
}
//Task 7
function LongestString(){
	let string = window.prompt();
	let words = string.split(',');
	if(words.length == 0){
		console.log("please enter at least one word separated by commas");
	}
	let maxLength = words[0].length;
	console.log(words);
	let longest = words[0];
	for(let word in words){
		if(words[word].length>maxLength){
			maxLength = words[word].length;
			longest=words[word];
		}
	}
	alert(longest);
}
//Task 8
function LargestEven(){
	let numbersString = window.prompt();
	let numbers = numbersString.split(',');
	let evens = [];
	for(let key in numbers){
		if(numbers[key]%2==0){
			evens.push(numbers[key]);
		}
	}
	let largest=0;
	for(let key in evens){
		if(evens[key]>largest){
			largest=evens[key];
		}
	}
	alert(largest);
}
//Task 9
function CurrentDayTime(){
	let now = new Date();
	let days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	let hours = now.getHours();
	let ampm='';
	if(hours>12){
		hours=hours-12;
		ampm='AM';
	}else{
		ampm='PM';
	}
	if(hours<10){
		hours = '0'+hours;
	}
	let minutes = now.getMinutes();
	if(minutes<10){
		minutes = '0'+minutes;
	}
	alert('Today is '+days[now.getDay()]+'\nIt is '+ hours+':'+minutes+ampm);
}
//Task 10
function UnlimitedFunction(...args){
	let str='';
	for(let arg in args){
		str = str+args[arg];
	}
	alert(str);
}
//Function Calls
//console.log(CharSwap(window.prompt()));
//console.log(HiString(window.prompt()));
//console.log(ThreeCharsToFront(window.prompt()));
//console.log(StringsToSentence());
//console.log(UpperOrLower());
//console.log(IntegerSwap());
//LongestString();
//LargestEven();
//CurrentDayTime();
//UnlimitedFunction('a','b','c');