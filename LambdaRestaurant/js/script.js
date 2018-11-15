$(document).ready(function() {
	let at = document.createElement('span');
	at.className += 'namealert';
	document.getElementById('mail').onfocusout = function(event) {
		this.parentElement.appendChild(at);
		at.innerHTML = 'Please fill all required field';
		if (this.value == '') {
			at.style.display = 'inline-block';
		}
		else if (this.value.indexOf('@') == -1){
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
		let fix = document.getElementsByTagName('header')[0];
		let navhover = document.querySelector('nav ul a');
		let imgdiv = document.querySelector('.img');
		if (window.scrollY > 160) {
			nav.className = 'navfix';
			// fix.style = `margin-top:325px`;
		} else{
			nav.className = '';
			// fix.style = `margin-top:0`;
		}
	}
})

