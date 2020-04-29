<?php
	// function ValidarDatos($campo){
	// 	$badHeads = array("Content-Type:",
	// 		"MIME-Version:",
	// 		"Content-Transfer-Encoding:",
	// 		"Return-path:",
	// 		"Subject:",
	// 		"From:",
	// 		"Envelope-to:",
	// 		"To:",
	// 		"bcc:",
	// 		"cc:");
	// 	foreach($badHeads as $valor){
	// 		if(strpos(strtolower($campo), strtolower($valor)) !== false){
	// 			header( "HTTP/1.0 403 Forbidden");
	// 			exit;
	// 		}
	// 	}
	// }
	// ValidarDatos($_POST['nombre_medico']); @$nombre_medico = addslashes($_POST['nombre_medico']);
	// ValidarDatos($_POST['categoria']); @$categoria = addslashes($_POST['categoria']);
	// ValidarDatos($_POST['descripcion']); @$descripcion = addslashes($_POST['descripcion']);
	// ValidarDatos($_POST['servicios_ofrecidos']); @$servicios_ofrecidos = addslashes($_POST['servicios_ofrecidos']);
	// ValidarDatos($_POST['servicio_1_destacado']); @$servicio_1_destacado = addslashes($_POST['servicio_1_destacado']);
	// ValidarDatos($_POST['precio_servicio_1_destacado']); @$precio_servicio_1_destacado = addslashes($_POST['precio_servicio_1_destacado']);
	// ValidarDatos($_POST['servicio_2_destacado']); @$servicio_2_destacado = addslashes($_POST['servicio_2_destacado']);
	// ValidarDatos($_POST['precio_servicio_2_destacado']); @$precio_servicio_2_destacado = addslashes($_POST['precio_servicio_2_destacado']);
	// ValidarDatos($_POST['direccion']); @$direccion = addslashes($_POST['direccion']);
	// ValidarDatos($_POST['ciudad']); @$ciudad = addslashes($_POST['ciudad']);
	// ValidarDatos($_POST['celular']); @$celular = addslashes($_POST['celular']);
	// ValidarDatos($_POST['telefono_clinica']); @$telefono_clinica = addslashes($_POST['telefono_clinica']);
	// ValidarDatos($_POST['correo_electronico']); @$correo_electronico = addslashes($_POST['correo_electronico']);
	// $cabeceras = "From: Quirurgicamente Web";
 //  $cabeceras .= "MIME-Version: 1.0";
 //  $cabeceras .= "Content-Type: multipart/mixed";
	// $email_to = "jhwperea@gmail.com";
	// $asunto = "Contácto Quirúrgicamente";
	// $archivo = $_FILES['adjuntar_fotos']['tmp_name'];
 //  $archivo = file_get_contents($archivo);
 //  $archivo = chunk_split(base64_encode($archivo));
	// $contenido = "Nombre médico: ".$nombre_medico."
	// 	Categoría: ".$categoria."
	// 	Descripción: ".$descripcion."
	// 	Servicios ofrecidos: ".$servicios_ofrecidos."
	// 	Servicio 1 destacado: ".$servicio_1_destacado."
	// 	Precio servicio 1 destacado: ".$precio_servicio_1_destacado."
	// 	Servicio 2 destacado: ".$servicio_2_destacado."
	// 	Precio servicio 2 destacado: ".$precio_servicio_2_destacado."
	// 	Dirección: ".$direccion."
	// 	Ciudad: ".$ciudad."
	// 	Celular: ".$celular."
	// 	Teléfono Clínica: ".$telefono_clinica."
	// 	Correo electrónico: ".$correo_electronico."
	// 	Adjunto: ".$archivo;
	// $email_to = "hola@quirurgicamente.com";
	// $contenido_total = wordwrap($contenido);
		// $cabeceras="Contacto Quirúrgicamente";
	// if(@mail($email_to, $asunto, $contenido_total, $cabeceras)){
	// 	echo "<script>alert('Nos pondremos en contacto con usted lo más pronto posible.');</script>";
	// 	echo "<script>window.location.href = 'index.html';</script>";
	// }else{
	// 	echo "<script>alert('Ha sucedido un error, intente de nuevo más tarde.');</script>";
	// 	echo "<script>window.location.href = 'index.html';</script>";
	// }
	//Variables para los campos de texto
		$nombre_medico = strip_tags($_POST["nombre_medico"]);
		$categoria = strip_tags($_POST["categoria"]);
		$descripcion = strip_tags($_POST["descripcion"]);
		$servicios_ofrecidos = strip_tags($_POST["servicios_ofrecidos"]);
		$servicio_1_destacado = strip_tags($_POST["servicio_1_destacado"]);
		$precio_servicio_1_destacado = strip_tags($_POST["precio_servicio_1_destacado"]);
		$servicio_2_destacado = strip_tags($_POST["servicio_2_destacado"]);
		$precio_servicio_2_destacado = strip_tags($_POST["precio_servicio_2_destacado"]);
		$direccion = strip_tags($_POST["direccion"]);
		$ciudad = strip_tags($_POST["ciudad"]);
		$celular = strip_tags($_POST["celular"]);
		$telefono_clinica = strip_tags($_POST["telefono_clinica"]);
		$correo_electronico = strip_tags($_POST["correo_electronico"]);
	//Variables para los datos del archivo
		$nameFile = $_FILES['adjuntar_fotos']['name'];
		$sizeFile = $_FILES['adjuntar_fotos']['size'];
		$typeFile = $_FILES['adjuntar_fotos']['type'];
		$tempFile = $_FILES['adjuntar_fotos']['tmp_name'];
		$content = chunk_split(base64_encode(file_get_contents($_FILES['adjuntar_fotos']['tmp_name'])));
		$fecha = time();
		$fechaFormato = date('d/m/y', $fecha);
		$corredoDestino = 'jhwperea@gmail.com';
		$eol = "\r\n";
	//asunto del correo
		$titulo = "Mensaje de la web recibido";
	// -> mensaje en formato Multipart MIME
		$cabecera = "MIME-VERSION: 1.0" .$eol;
		$cabecera .= "Content-type: multipart/mixed; boundary=\"" .$fecha. "\"" .$eol;
		$cabecera .= "Content-Transfer-Encoding: 7bit" .$eol;
		$cabecera .= "From: {$correo_electronico}";
	//Primera parte del cuerpo del mensaje
		$cuerpo = "--=C=T=E=C=" .$eol;
		$cuerpo .= "Content-type: text/plain; charset=utf-8" .$eol;
		$cuerpo .= "Content-Transfer-Encoding: 8bit" .$eol;
		$cuerpo .= $eol; //línea vacía
		$cuerpo .= "Haz recibido un mensaje desde la página quirurgicamente.com" .$eol;
		$cuerpo .= "Nombre médico: ".$nombre_medico." ".$eol;
		$cuerpo .= "Categoría: ".$categoria." ".$eol;
		$cuerpo .= "Descripción: ".$descripcion." ".$eol;
		$cuerpo .= "Servicios ofrecidos: ".$servicios_ofrecidos." ".$eol;
		$cuerpo .= "Servicio 1 destacado: ".$servicio_1_destacado." ".$eol;
		$cuerpo .= "Precio servicio 1 destacado: ".$precio_servicio_1_destacado." ".$eol;
		$cuerpo .= "Servicio 2 destacado: ".$servicio_2_destacado." ".$eol;
		$cuerpo .= "Precio servicio 2 destacado: ".$precio_servicio_2_destacado." ".$eol;
		$cuerpo .= "Dirección: ".$direccion." ".$eol;
		$cuerpo .= "Ciudad: ".$ciudad." ".$eol;
		$cuerpo .= "Celular: ".$celular." ".$eol;
		$cuerpo .= "Teléfono Clínica: ".$telefono_clinica." ".$eol;
		$cuerpo .= "Correo electrónico: ".$correo_electronico." ".$eol;
		// $cuerpo .= "Mensaje enviado por: " .$nombre. "" .$eol;
		// $cuerpo .= "ponerse en contacto con: " .$email. "" .$eol;
		// $cuerpo .= "Selecciono el cargo de: " .$cargo. "" .$eol;
		// $cuerpo .= "El teléfono de la persona es: " .$telefono. "" .$eol;
		// $cuerpo .= "Mensaje: " .$mensaje. "" .$eol;
		$cuerpo .= $eol;
		$cuerpo .= " Enviado el: " .$fechaFormato. "" .$eol;
		$cuerpo .= $eol;
	// -> Segunda parte del mensaje (archivo adjunto)
  // -> encabezado de la parte
		$cuerpo .= "--=C=T=E=C=" .$eol;
		$cuerpo .= "Content-Type: application/octet-stream; name=\"" .$nameFile. "\"" .$eol;
		$cuerpo .= "Content-Transfer-Encoding: base64" .$eol;
		$cuerpo .= "Content-Disposition: attachment" .$eol;
		$cuerpo .= "filename= " .$nameFile. "" .$eol;
		$cuerpo .= $eol; //línea vacía
	// $fp = fopen($tempFile, "rb");
	// $file = fread($fp, $sizeFile);
	// $file = chunk_split(base64_encode($file));
	// $cuerpo .= $file .$eol;
	// $cuerpo .= $eol; //linea vacia
	// //Delimitador de final del mensaje.
	// $cuerpo .= "--=C=T=E=C=--" .$eol;
	// Enviar el correo
		$envio = mail($corredoDestino, $titulo, $cuerpo, $cabecera);
		if($envio){
		  echo "<script>alert('Nos pondremos en contacto con usted lo más pronto posible.');</script>";
			echo "<script>window.location.href = 'index.html';</script>";
		}else{
		  echo "<script>alert('Ha sucedido un error, intente de nuevo más tarde.');</script>";
			echo "<script>window.location.href = 'index.html';</script>";
		}
?>