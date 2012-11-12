$(document).ready(function() {

	// Animando el primer parrafo
	$('#cap2_eje_3 p:first').animate({
		backgroundColor: 'rgba(50,50,40,.8)',
		opacity: '.5',
		padding: '20px',		
		borderBottom: '1px solid black',
		borderColor: 'red',		
		borderWidth: "10px"	
	},2000)

	// Corriendo al costado la lista de link's
	$('#cap2_eje_3 #navigation li').hover(function() {
		$(this).animate({paddingLeft: '+=15px'},200)
	},function() {
		$(this).animate({paddingLeft: '-=15px'},200)
	})

	// Abriendo y cerrando la definition list
	$('#cap2_eje_3 p:eq(1)').animate({
		opacity: 'hide',
		height: 'hide'
	}, 'slow')
	$('#bio dl dd').hide()
	$('#bio dl dd:first').show()
	$('#bio dl dt').click(function() {
		$(this).next().animate(
			{'height':'toggle'}, 'slow', 'linear')
	})


	// Navigation bar
		// Creando un item e insertandolo
	$('<div id="blob"></div>').css({
		width: $('#navi li:first').width() + 10,
		height: 40
	}).appendTo('#navi')
		// 
	$('#navi li a').hover(function() {

		$('#blob').animate({			
			marginLeft: $(this).position().left - 375,
			width: $(this).width() + 10
		},{
			duration: 'slow', easing: 'linear', queue: false
		})
	},function() {
		$('#blob').stop(true).animate({
			marginLeft: $('#navi li:first a').position().left - 375
		},{duration: 'fast', queue: false})
	})

	
})