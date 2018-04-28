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
		let userContainer = document.createElement('div');
		let userName = document.createElement('p');
		let todoButton = document.createElement('button');
		todoButton.innerHTML = "TODO's";
		todoButton.id = user.id;
		todoButton.addEventListener('click',toggleTodos);
		let albumButton = document.createElement('button');
		albumButton.innerHTML = "Albums";
		albumButton.id = user.id;
		albumButton.addEventListener('click',toggleAlbums);
		userName.innerHTML = user.name+", "+user.email+", "+user.company.name;
		userContainer.appendChild(userName);
		userContainer.appendChild(todoButton);
		userContainer.appendChild(albumButton);
		document.body.appendChild(userContainer);
	}
}

function toggleTodos(event){
	if(event.target.dataset.loaded){
		let children = event.target.parentElement.children;
		for(child in children){
			if(children[child].id == "todos"){
				children[child].hidden = !children[child].hidden;
			}
		}
	}else{
		fetchTodos(event);
	}
}

function fetchTodos(event){
	$.ajax({
	url: "https://jsonplaceholder.typicode.com/todos",
	type:"GET",
	dataType: "json"
	}).done(function(response){
		event.target.dataset.loaded= true;
		displayTodos(response,event);
	}).fail(function(){
		console.log("sounds good doesnt work");
	})
}

function displayTodos(response,event){
	let todoContainer = document.createElement('div');
	todoContainer.id= "todos";
	for (todo of response){
		if(event.target.id == todo.userId){
			let todoName = document.createElement('p');
			todoName.innerHTML = todo.title;
			if(todo.completed ==true){
				let check = document.createElement('p');
				check.innerHTML='<i class="fa fa-check-square" aria-hidden="true"></i>';
				todoName.appendChild(check);
			}else{
				let xbox = document.createElement('p');
				xbox.innerHTML='<i class="fa fa-window-close" aria-hidden="true"></i>';
				todoName.appendChild(xbox);
			}
			todoContainer.appendChild(todoName);
		}
	}
	event.target.parentElement.appendChild(todoContainer);
}

function toggleAlbums(event){
	if(event.target.dataset.loaded){
		let children = event.target.parentElement.children;
		for(child in children){
			if(children[child].id == "albums"){
				children[child].hidden = !children[child].hidden;
			}
		}
	}else{
		fetchAlbums(event);
	}
}

function fetchAlbums(event){
	$.ajax({
	url: "https://jsonplaceholder.typicode.com/albums",
	type:"GET",
	dataType: "json"
	}).done(function(response){
		event.target.dataset.loaded= true;
		displayAlbums(response,event);
	}).fail(function(){
		console.log("sounds good doesnt work");
	})
}

function displayAlbums(response,event){
	let albumContainer = document.createElement('div');
	albumContainer.id="albums";
	for (album of response){
		if(event.target.id == album.userId){
			let albumName = document.createElement('p');
			albumName.innerHTML = album.title;
			albumContainer.appendChild(albumName);
		}
	}
	event.target.parentElement.appendChild(albumContainer);
}