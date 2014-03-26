$(document).ready(function(){
	//usa: https://github.com/jhuckaby/webcamjs
	
	//configura el plugin
	Webcam.set({
		image_format: 'jpeg',
		jpeg_quality: 90
	});

	//muestra la imagen en la division
	Webcam.attach( '#my_camera' );

	//funcion para tomar la imagen
	function take_snapshot() {
		// toma la imagen
		var data_uri = Webcam.snap();

		// injecta el resultado
		$('#results').html(
			'<h2>captura</h2>' + '<img src="'+data_uri+'"/>'
		) 
	}

	// al presionar el boton toma la imagen
	$('#capture').click(function(){
		take_snapshot()
	})
})