$(document).ready(function() {
	let button = document.querySelector('.sct5 button');

	let bool1 = true;
	let bool2 = true;
	let bool3 = true;
	let bool4 = true;

	// sct5 input name valid
	let span = document.createElement('span');
	span.className = 'namealert';

	document.querySelector('#name').onfocusout = function(e){
		this.parentElement.appendChild(span);
		if (!this.value.match(/^[A-Za-z]+$/)) {
			span.innerHTML = 'Please enter alphabet characters only';
			span.style.display = 'inline-block';
			button.setAttribute('disabled', 'disabled');
			bool1 = false;
		} else{
			bool1 = true;
			span.style.display = 'none';
			if (bool1 && bool2 && bool3 && bool4) {
				button.removeAttribute('disabled');
			}
		}
	}

	// sct5 input mail valid
	let at = document.createElement('span');
	at.className += 'namealert';

	document.getElementById('mail').onfocusout = function(event) {
		this.parentElement.appendChild(at);
		if (this.value.indexOf('@') == -1){
			at.style.display = 'inline-block';
			at.innerHTML = 'Please enter valid email address';
			button.setAttribute('disabled', 'disabled');
			bool2 = false;
		}
		else{
			bool2 = true;
			at.style.display = 'none';
			if (bool1 && bool2 && bool3 && bool4) {
				button.removeAttribute('disabled');
			}
		}
	};

	// sct5 input date valid
	let span1 = document.createElement('span');
	span1.className = 'namealert';

	document.querySelector('#date').onfocusout = function (e) {
		this.parentElement.appendChild(span1)
		let date = new Date();
		let dateday = this.value[this.value.length-2]+this.value[this.value.length-1];
		if (dateday < date.getDate()) {
			span1.style.display = 'inline-block';
			span1.innerHTML = 'Please enter valid date format';
			button.setAttribute('disabled', 'disabled');
			bool3 = false;
		} else{
			bool3 = true;
			span1.style.display = 'none';
			if (bool1 && bool2 && bool3 && bool4) {
				button.removeAttribute('disabled');
			}
		}
	}

	// sct5 input number valid
	let span2 = document.createElement('span');
	span2.className = 'namealert';

	document.querySelector('#pnum').onfocusout = function(e) {
		this.parentElement.appendChild(span2);
		if (this.value<2 || this.value > 250){
			span2.style.display = 'inline-block';
			if (this.value > 250) {
				span2.innerHTML = 'Sorry but we can not accommodate more than 250 visitors';
			} else if(this.value < 2){
				span2.innerHTML = 'Minimum visitors for booking a table is 2';
			}
			button.setAttribute('disabled', 'disabled');
			bool4 = false;
		}
		else{
			bool4 = true;
			span2.style.display = 'none';
			if (bool1 && bool2 && bool3 && bool4) {
				button.removeAttribute('disabled');
			}
		}
	};

	// navbar onscroll fixing

	document.body.onscroll = window.onload = function (e) {
		let nav = document.getElementById('nav');
		let logo = $('nav>img');
		let fix = document.getElementsByTagName('header')[0];
		let navhover = document.querySelector('nav ul a');
		let imgdiv = document.querySelector('.img');
		let body = document.getElementById('body');
		if (window.scrollY > 50) {
			logo.attr('src', 'img/lambdalogo.png');
			nav.className = 'navfix';
		} else{
			logo.attr('src', 'img/logotop.png');
			nav.className = 'navOut';
		}
	}


	//nav>li animate to section

	let liHome = $('nav li:first-child');
	let liAbout = $('nav li:nth-child(2)');
	let liIngred = $('nav li:nth-child(3)');
	let liMenu = $('nav li:nth-child(4)');
	let liReview = $('nav li:nth-child(5)');
	let liReserv = $('nav li:last-child');
	
	$('#nav>img').click(function() {
		$('html').animate({
			scrollTop: $('header').offset().top},
			'slow');
	});

	liHome.click(function() {
		$('html').animate({
			scrollTop: $('header').offset().top - 97},
			'slow');
	});
	
	liAbout.click(function() {
		$('html').animate({
			scrollTop: $('section.sct1').offset().top - 97},
			'slow');
	});
	
	liIngred.click(function() {
		$('html').animate({
			scrollTop: $('section.sct2').offset().top - 97},
			'slow');
	});
	
	liMenu.click(function() {
		$('html').animate({
			scrollTop: $('.sct3 .row1').offset().top - 140},
			'slow');
	});
	
	liReview.click(function() {
		$('html').animate({
			scrollTop: $('section.sct4').offset().top - 97},
			'slow');
	});
	
	liReserv.click(function() {
		$('html').animate({
			scrollTop: $('section.sct5').offset().top - 97},
			1500);
	});

	$('.one').click(function() {
		$('html').animate({
			scrollTop: $('section.sct5').offset().top - 97},
			1500);
	});

	$('.two').click(function() {
		$('html').animate({
			scrollTop: $('.sct3 .row1').offset().top - 140},
			1500);
	});

	// burger button
	$('nav label').click(function my() {
		this.classList.toggle("change");
	})


	// footer icons

	$('.ico1').click(function(event) {
		window.open('https://www.facebook.com/');
	});


	$('.ico2').click(function(event) {
		window.open('https://www.youtube.com/watch?v=PU2XJa-7HTg');
	});

	$('.ico3').click(function(event) {
		window.open('https://twitter.com');
	});

	// $('.ico1').click(function(event) {
	// 	console.log(this);
	// 	window.open('https://www.facebook.com/');
	// });
})

