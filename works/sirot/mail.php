<?php
	function ValidarDatos($campo){
		$badHeads = array("Content-Type:",
			"MIME-Version:",
			"Content-Transfer-Encoding:",
			"Return-path:",
			"Subject:",
			"From:",
			"Envelope-to:",
			"To:",
			"bcc:",
			"cc:");
		foreach($badHeads as $valor){
			if(strpos(strtolower($campo), strtolower($valor)) !== false){
				header( "HTTP/1.0 403 Forbidden");
				exit;
			}
		}
	}
	ValidarDatos($_POST['nombre']);
	ValidarDatos($_POST['correo']);
	ValidarDatos($_POST['asunto']);
	ValidarDatos($_POST['mensaje']);
	@$nombre=addslashes($_POST['nombre']);
	@$nombre=addslashes($_POST['correo']);
	@$nombre=addslashes($_POST['asunto']);
	@$nombre=addslashes($_POST['mensaje']);
	$email_to="gerenciasirot@gmail.com";
	$asunto="Contácto";
	$contenido="Han envíado un msj desde el formulario, con los siguentes datos \n
		Nombre: ".$nombre."\n
		Correo: ".$correo."\n
		Asunto: ".$asunto."\n
		Mensaje: ".$mensaje;
	$contenido_total=wordwrap($contenido);
	$cabeceras="Contacto";
	if(@mail($email_to, $asunto, $contenido_total, $cabeceras)){
		?><script type="text/javascript">
			window.alert('Nos pondremos en contacto con usted lo más pronto posible.');
			window.location.href="index.html";
		</script><?php
	}else{
		?><script type="text/javascript">
			window.alert('ha sucedido un error, intente de nuevo más tarde.');
			window.location.href="index.html";
		</script><?php
	}
?>