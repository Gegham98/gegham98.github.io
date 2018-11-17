$(document).ready(function() {
	let at = document.createElement('span');
	at.className += 'namealert';
	document.getElementById('mail').onfocusout = function(event) {
		this.parentElement.appendChild(at);
		if (this.value.indexOf('@') == -1 && this.value != ''){
			at.style.display = 'inline-block';
			at.innerHTML = 'Please enter a valid email address';
		}
		else{
			at.style.display = 'none';
		}
	};

	// navbar onscroll fixing

	document.body.onscroll = function (e) {
		let nav = document.getElementById('nav');
		let logo = $('nav>img');
		let fix = document.getElementsByTagName('header')[0];
		let navhover = document.querySelector('nav ul a');
		let imgdiv = document.querySelector('.img');
		let body = document.getElementById('body');
		if (window.scrollY > 50) {
			logo.attr('src', 'img/lambdalogo.png');
			nav.className = 'navfix';
			// fix.style = `margin-top:325px`;
		} else{
			logo.attr('src', 'img/logotop.png');
			nav.className = 'navOut';
			// fix.style = `margin-top:0`;
		}
	}
})

