function fetchImgSrc(){
	$.ajax({
			url: "https://random.dog/woof.json"
		}).done(function(response){
			let lastThree = response.url.substr(response.url.length-3);
			if(lastThree=="mp4"){
				fetchImgSrc();
			}else{
				$("#randomImage").attr('src', response.url);
			}
			
		}).fail(function(){
			console.log("sounds good doesnt work");
		})
}

fetchImgSrc();
document.getElementById('reloadDog').addEventListener('click', fetchImgSrc);




