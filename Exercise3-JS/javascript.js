var comment;
function localStorageComment () {
	comment = localStorage.getItem('ArrComment');
	comment = comment ? JSON.parse(comment) : [];
}

function arrayComment() {
	var inp = document.getElementsByClassName('btn-add')[0];
	var valueInputComment = document.getElementById('js-input-comment').value;
	inp.addEventListener('click', function() {
		localStorageComment();
		if(valueInputComment) {
			comment.push(valueInputComment);
			localStorage.setItem('ArrComment', JSON.stringify(comment));
			renderComment();
			valueInputComment = '';
		}else {
			alert('You need to enter a comment!');
		}
		event.preventDefault();
	})

}

function renderComment(event) {
	var resultComment = document.getElementById('js-main-comment');
	localStorageComment();
	resultComment.innerHTML = '';
	var content = comment.map(function (item, index) {
	  return '<div class = "comment-info">' + '<div class="comment-info-img">' 
	  + '<img class="img-comment" src="img/instagram.png">' + '</div>' 
	  + '<div class="comment-info-content">' + '<section class = "comment-content">' + '<h3>ThinhTran:</h3>' 
		+ '<p class="comment-text">' + item + '</p>'+ '</section>' + '<div class = "comment-remove">' 
		+'<button class="btn-remove" data-id =' + index + '>X</button></div></div></div>';
	});
	resultComment.innerHTML = content.join('');
	removeComment();
}

function removeComment() {
	var remove = document.getElementsByClassName('btn-remove');
	localStorageComment();
	for (var i = 0, leng = remove.length; i < leng; i++) {
		remove[i].addEventListener('click', function() {
			var idindex = event.target.dataset.id;
      comment.splice(idindex, 1);
			localStorage.setItem('ArrComment', JSON.stringify(comment));
			console.log(comment);
      renderComment();
		})
	}
}

arrayComment();
renderComment();
removeComment();
