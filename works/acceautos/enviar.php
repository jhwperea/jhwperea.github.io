<?php
	function ValidarDatos($campo){
		//Array con las posibles cabeceras a utilizar por un spammer
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
		//Comprobamos que entre los datos no se encuentre alguna de
		//las cadenas del array. Si se encuentra alguna cadena se
		//dirige a una página de Forbidden
		foreach($badHeads as $valor){
			if(strpos(strtolower($campo), strtolower($valor)) !== false){
				header( "HTTP/1.0 403 Forbidden");
				exit;
			}else{
			}
		}
	}
	//Ejemplo de llamadas a la funcion
	// ValidarDatos($_POST['nombre']);
	// ValidarDatos($_POST['email']);
	// ValidarDatos($_POST['telefono']);
	// ValidarDatos($_POST['mensaje']);
	ValidarDatos($_POST['name']);
	ValidarDatos($_POST['email']);
	ValidarDatos($_POST['phone']);
	ValidarDatos($_POST['pais']);
	ValidarDatos($_POST['ciudad']);
	ValidarDatos($_POST['subject']);
	ValidarDatos($_POST['message']);
	ValidarDatos($_POST['autos']);
	ValidarDatos($_POST['motos']);
	// Envíar
	@$name = addslashes($_POST['name']);
	@$email = addslashes($_POST['email']);
	@$phone = addslashes($_POST['phone']);
	@$pais = addslashes($_POST['pais']);
	@$ciudad = addslashes($_POST['ciudad']);
	@$subject = addslashes($_POST['subject']);
	@$message = addslashes($_POST['message']);
	@$autos = addslashes($_POST['autos']);
	@$motos = addslashes($_POST['motos']);
	// @$nombre=addslashes($_POST['nombre']);
	// @$email=addslashes($_POST['email']);
	// @$telefono=addslashes($_POST['telefono']);
	// @$mensaje=addslashes($_POST['mensaje']);
	$email_to="comercial@acceautos.com.co";
	$asunto=$subject;
	// $contenido=$nombre.", Ha envíado un mensaje, ".$mensaje.", contestar al correo: ".$email." o al número: ".$telefono;
	$contenido=$name.", de ".$ciudad." - ".$pais." Ha envíado un mensaje: ".$message.", ".$autos.", ".$motos.", contestar al correo: ".$email." o al número: ".$phone;
	$contenido_total=wordwrap($contenido);
	$cabeceras="Contacto Acceautos";
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