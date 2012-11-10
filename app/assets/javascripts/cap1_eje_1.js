//alert(document.getElementsByTagName('l¡').length);
$(document).ready(function(){	
	// Parrafos:
	// Loopeando por todos los parrafos elejidos, cambiando el titulo si no tienen.
	var par = $('p');
	for (var i = 0; i < par.length; i++) {
		var titulo = par[i].getAttribute('title');
		if (!titulo)
			par[i].setAttribute('title', i + " Nuevo titulo") 
		//alert(par[i].getAttribute('title'));
	};	
	
	// Lista item:
	var items = $('#compras li');
	for (var i = 0; i < items.length; i++) {
		//alert(items[i].getValue());        << Fijarce cual es la opcion para sacar el valor
	};

	//lista item -- Jquery
	for (var i = 0; i < items.length; i++) {
		//alert($(items[i]).text());
	};




	// Twitter Bootstrap test :)
	$('#cap1_eje_1 h1.titulo').tooltip({trigger: 'hover', placement: "top"})
});

