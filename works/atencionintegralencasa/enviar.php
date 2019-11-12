<?php
	$nombre = addslashes($_POST['nombre']);
	$correo = addslashes($_POST['correo']);
	$mensaje = addslashes($_POST['mensaje']);
	$cabeceras = "From: Atención integral en casa" . "Reply-To: $correo";
	$asunto = "Mensaje desde AIC";
	$mail_to = "programacion.orion@gmail.com";
	$contenido = "$nombre ha enviado un mensaje desde la web " ."Nombre: $nombre "."Correo: $correo "."Mensaje: $mensaje";
	if(@mail($mail_to, $asunto ,$contenido ,$cabeceras )){
		?><script type="text/javascript">window.location.href="index.html";alert('Su mensaje se ha enviado correctamente, en la brevedad nos pondremos en contacto con usted. Gracias');</script><?php
	}else{
		?><script type="text/javascript">window.location.href="index.html";alert('ha sucedido un error, intente de nuevo más tarde');</script><?php
	}
?>