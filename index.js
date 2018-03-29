function getResponse(){
	let response=confirm();
	if(confirm==1){
		alert("yes");
	} else{
		alert("no");
	}
}

function getResponseAlt(){
	alert((confirm())?"yup":"nope");
}

function getNumberInput(){
	let input=prompt("enter a number");
	if(input==null){
		alert("canceled");
	} else if(input==""){
		alert("you didn't enter anything");
	} else if(isNaN(input)){
		alert("Not a number");
	} else{
		alert("You did it");
	}
}

function MyObject(){
	this.name="object";
	this.id=21;
	this.codeName=function(){return this.name+this.id;};
}

function makeObjectCopy(myObject){
	let myCopy={};
	for(let key in myObject){
		myCopy[key] = myObject[key];
	}
	myCopy.extra = "thisIsAdded";
	console.log("copy",myCopy);
}

/*
function stringCat(str1,str2,str3="default"){
	return str1+str2+str3;
}
*/

//let stringCat2 = function(str1,str2,str3="default"){return str1+str2+str3};

let stringCat3 = (str1,str2,str3="default")=>str1+str2+str3;

getResponse();
getResponseAlt();
getNumberInput();
let test= new MyObject();
console.log("original",test);
makeObjectCopy(test);
//console.log(stringCat("yeah","boy"));
//console.log(stringCat2("yeah","buoy"));
console.log(stringCat3("yea","buoy"));