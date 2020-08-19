(function() {
	'use strict';
	
	console.log('===============================================');
	console.log('Author: Sho Carter-Daniel <shosilva@icloud.com>');
	console.log('Demo: Instagram');
	console.log('===============================================');

	// create variables that contain elements on the page =======================================
	
	var elements = {
		feeds: document.querySelectorAll('.feeds__one img'),
		likeHearts: document.querySelectorAll('i.fa-heart-o'),
		likesList: document.querySelectorAll('[data-likes]'),
		timeAgoList: document.querySelectorAll('[data-time-ago]'),		
	};

	// events ===================================================================================
	
	var events = {
		onLikeClick: function(e) {
			var likes = e.target.parentNode.parentNode.querySelector('[data-likes]');
			e.target.classList.toggle('fa-heart-o');
			e.target.classList.toggle('fa-heart');
			e.target.classList.toggle('liked');
			if (e.target.classList.contains('liked')) {
				likes.textContent = `${Number(likes.dataset.likes)+1} likes`;
			} else {
				likes.textContent = `${Number(likes.dataset.likes)} likes`;
			}
		}
	};

	// application object is here ===============================================================
	
	var app = {
	 	start: function () {
			app.instigateData();
		},

		instigateData: function () {
			elements.likeHearts.forEach(function (likeHeart) { likeHeart.addEventListener('click', events.onLikeClick); });
			elements.likesList.forEach(function (like) { like.textContent = `${like.dataset.likes} likes`; });
			elements.timeAgoList.forEach(function (timeAgo) { timeAgo.textContent = timeAgo.dataset.timeAgo; });
		}
	};

	// initialize the application ===============================================================
	
	app.start();
})();
