$(document).ready(function(){
	function mostrarImagen(cual){
		// body...
		//var fuente = cual.getAttribute('href');
		alert(cual);
		return false;
	}
	(document).getElementsByTagName('a').onclick(mostrarImagen((document).getElementsByTagName('a')));
	
	


	//$('#cap2_eje_2 #ejemplop').click(function() {
	//	alert("Hola mundo!")	
	//})
});
