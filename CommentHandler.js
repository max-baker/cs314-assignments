let height=4;

function validateInputs(event){
	event.preventDefault();
	let valid=true;
	let name = document.getElementById("nameTextBox");
	let email = document.getElementById("emailTextBox");
	let comment = document.getElementById("bigBox");
	if(name.value==""){
		valid=false;
		$("#nameTextBox").addClass("inputInvalid");
	}else{
		$("#nameTextBox").removeClass("inputInvalid");
	}
	if(email.value==""){
		valid=false;
		$("#emailTextBox").addClass("inputInvalid");
	}else{
		$("#emailTextBox").removeClass("inputInvalid");
	}
	if(comment.value==""){
		valid=false;
		$("#bigBox").addClass("inputInvalid");
	}else{
		$("#bigBox").removeClass("inputInvalid");
	}

	if(valid){
		postComment(name.value ,email.value ,comment.value );
		name.value=""
		email.value=""
		comment.value=""
	}
}

function postComment(name,email,comment){
	let commentContainer = document.createElement('div');
	let userName = document.createElement('h3');
	let commentText = document.createElement('p');

	commentText.innerHTML = comment;
	userName.innerHTML = name+": "+email;
	commentContainer.appendChild(userName);
	commentContainer.appendChild(commentText);
	
	let commentBlock = document.getElementById("commentSection")
	height = height+3;
	commentBlock.style.height = height+"em";
	commentContainer.classList.add("comment")
	userName.classList.add("userName")
	commentContainer.style.top = 26+height+"em";
	commentBlock.appendChild(commentContainer);
}


window.onload = function () {
    let submitButton = document.getElementById("submitButton");
	submitButton.submitButton
	submitButton.addEventListener('click', validateInputs);
};