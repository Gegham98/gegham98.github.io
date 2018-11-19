$(document).ready(function() {
	let at = document.createElement('span');
	at.className += 'namealert';
	document.getElementById('mail').onfocusout = function(event) {
		this.parentElement.appendChild(at);
		if (this.value.indexOf('@') == -1){
			at.style.display = 'inline-block';
			at.innerHTML = 'Please enter a valid email address';
		}
		else{
			at.style.display = 'none';
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


	// from nav>li animated directions to sections

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

	// footer icon sending

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

