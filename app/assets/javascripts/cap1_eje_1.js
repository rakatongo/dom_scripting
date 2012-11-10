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
		alert(items[i].getText());
	};

	//lista item -- Jquery
	for (var i = 0; i < items.length; i++) {
		//alert($(items[i]).text());
	};
});

