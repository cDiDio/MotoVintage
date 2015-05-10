// JavaScript Document
$(document).ready(function(e) {
	
	// ALLINEAMENTO AL CENTRO VERTICALE E ORIZZONTALE DEL TITOLO E BOTTONE DELLO SLIDER 
	$("#slider h1").css({
		"top": 
		($("#slider").height() - $("#slider h1").height()) / 2 + 'px'}
		)
	$("#slider h1").css({
		"left": 
		($("#slider").width() - $("#slider h1").width()) / 2 + 'px'}
		);
	
	//CAMBIO DI OPACITA' ALl'Hover dei box 	
     $('.box').each(function() {
		 $(this).hover(
		 		 // animazione ai siblings sull'hover
		 		 function() {
                        $(this).siblings().stop().animate({opacity:0.5}, 800);
                    },
				//funzione di ritorno per ristabilire l'opacità originale
                function() {
                       $(this).siblings().stop().animate({opacity:1}, 800);
                   }
                    )
		 });
});
