function arrayComment() {
	var comment = localStorage.getItem('ArrComment');
	comment = comment ? JSON.parse(comment) : [];
	var inp = document.getElementsByClassName('btn-add')[0];
	inp.addEventListener('click', function() {
		comment.push(document.getElementById('js-input-comment').value);
		localStorage.setItem('ArrComment', JSON.stringify(comment));
		renderComment();
		document.getElementById('js-input-comment').value = '';
	})
}

function renderComment() {
	var resultComment = document.getElementById('js-main-comment');
	var comment = JSON.parse(localStorage.getItem('ArrComment'));
	var content = comment.map(function (item, index) {
	  return '<div class = "comment-info">' + '<div class="comment-info-img">' 
	  + '<img class="img-comment" src="img/instagram.png">' + '</div>' 
	  + '<div class="comment-info-content">' + '<section class = "comment-content">' + '<h3>ThinhTran:</3>' 
	  + '<p class="comment-text">' + item + '</p>'+ '</section>' + '<div class = "comment-remove">' +'<button class="btn-remove" data-id =' + index + '>X</button></div></div></div>';
	});
	resultComment.innerHTML = content.join('');
  }

function removeComent() {
	var remove = document.getElementsByClassName('btn-remove');
	var comment = localStorage.getItem('ArrComment');
	comment = comment ? JSON.parse(comment) : [];
	for (var i = 0, leng = remove.length; i < leng; i++) {
		remove[i].addEventListener('click', function() {
			var idindex = event.target.dataset.id;
      comment.splice(idindex, 1);
      localStorage.setItem('ArrComment', JSON.stringify(comment));
      renderComment();
		})
	}
}

arrayComment();
renderComment();
removeComent();