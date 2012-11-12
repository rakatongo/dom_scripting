$(document).ready(function(){
	// Cambiando el color
	//$('.data tbody tr:even').css({'background-color':'#dddddd','color': '#666666'});	

	// Agregando una clase
	$('.data tbody tr:even').addClass('zebra')

	// Agregando el toggle function
	$('.data tbody tr').hover(function() {
		$(this).addClass('select')
	},function() {
		$(this).removeClass("select")
	})

	// Cambiando clase Con Toggle function
	//$('.data tbody tr').toggle(function() {
	//	$(this).addClass("sel")
	//},function() {
	//	$(this).removeClass("sel")
	//})

	// Cambiando clase con toggleClase Function
	$('.data tbody tr').click(function() {
		$(this).toggleClass('sel')	
	})
	


	// Escondiendo un parrafo
	//$('#esconde').toggle(function() {
	//	$('.info').hide();
	//},function() {
	//	$('.info').show();
	//})



	// Escondiendo el parrafo pero con otra funcion	
	$('#esconde').click(function() {		
		if ($('.info').is(':visible')) {
			$(this).text('Hide');
		} else{
			$(this).text('Mostrar');
		}
		$('.info').toggle()	// 
	});


	// Insertando objecto con insertBefore o insertAfter
	$('<input type="button" value="toggle" rel="tooltip" title="Esto es el tooltip" id="otro">').insertAfter('.info')
	$('<input type="button" value="TOGGLE CON SLIDE" rel="tooltip" title="Esto es el tooltip" id="otro-2">').insertAfter('#otro')
	$('<input type="button" value="Otro Botton!!" rel="tooltip" title="Esto es el tooltip" id="otro-3">').insertAfter('#otro-2')


	// Insertando testo en parrafo
	$('<strong>Aca comienza el parrafo: </strong>').prependTo('.info')
	$('<strong> <<<< Aca termina el parrafo. </strong>').appendTo('.info')


	// Borrando texto
	$('#no-script').remove();
	//	$('#celebs tr').remove(':contains("Singer")');


	// Insertando texto en tags
	var contenido = $('p:first').text()
	$('p:first').text('Soy el primer parrafo!. '+ contenido)


	// Insertando html 
	//$('p').html('<strong>Warning!</strong> Text has been replaced ... ')


	// Animations

	//$('#otro').toggle(function() {
	//	$('.info').fadeOut()
	//},function() {
	//	$('.info').fadeIn()
	//})
	// misma animacion de arriba pero con menos typeo
	$('#otro').click(function() {
		$('.info').toggle('slow')
	})

	$('#otro-2').click(function() {
		$('.info').slideToggle('slow')
	})
	$('#otro-3').click(function() {
		$('.info').slideUp('slow',function() {
			$('#otro-3').fadeOut()
		})	
	})
	
	// Revelando el espoiler
	$('.spoiler').hide();
	$('<input type="button" id="revelar" value="Mostrar"/>').insertBefore('.spoiler')
	$('#revelar').click(function() {		
		$(this).fadeOut('slow',function() {
			$(this).next().fadeIn()
		})
		
	})

	

	// Bootstrap
	$('#otro').tooltip({trigger: 'hover'})


	//Getting todos los parrafos y seteando el tooltip active:)
	var ir = $('p')
	for (var i = 0; i < ir.length; i++) {
		$(ir[i]).prop('rel','tooltip').tooltip({trigger: 'hover'})		
	};
});
