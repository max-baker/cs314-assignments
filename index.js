$.ajax({
	url: "https://jsonplaceholder.typicode.com/users",
	type:"GET",
	dataType: "json"
}).done(function(response){
	makeUsers(response);
}).fail(function(){
	console.log("sounds good doesnt work");
})

function makeUsers(response){
	for (user of response){
		let userContainer = document.createElement('p');
		let userName = document.createElement('p');
		let todoButton = document.createElement('button');
		todoButton.innerHTML = "TODO's";
		todoButton.id = user.id;
		todoButton.addEventListener('click',fetchTodos);
		let albumButton = document.createElement('button');
		albumButton.innerHTML = "Albums";
		albumButton.id = user.id;
		albumButton.addEventListener('click',fetchAlbums);
		userName.innerHTML = user.name;
		userContainer.appendChild(userName);
		userContainer.appendChild(todoButton);
		userContainer.appendChild(albumButton);
		document.body.appendChild(userContainer);
	}
}

function fetchTodos(event){
	$.ajax({
	url: "https://jsonplaceholder.typicode.com/todos",
	type:"GET",
	dataType: "json"
	}).done(function(response){
		displayTodos(response,event);
	}).fail(function(){
		console.log("sounds good doesnt work");
	})
}

function displayTodos(response,event){
	console.log(event.target.id)
	for (todo of response){
		if(event.target.id == todo.userId)
		console.log(todo.title)
	}
}

function fetchAlbums(event){
	$.ajax({
	url: "https://jsonplaceholder.typicode.com/albums",
	type:"GET",
	dataType: "json"
	}).done(function(response){
		displayAlbums(response,event);
	}).fail(function(){
		console.log("sounds good doesnt work");
	})
}

function displayAlbums(response,event){
	console.log(event.target.id)
	for (album of response){
		if(event.target.id == album.userId)
		console.log(album.title)
	}
}