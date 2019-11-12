<?php /*
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
			}else{
				@$nombre=addslashes($_POST['nombre']);
				@$email=addslashes($_POST['email']);
				@$mensaje=addslashes($_POST['mensaje']);
				$email_to="ventas@orionpublicidad.com";
				$asunto="Contácto Orión";
				$contenido=$nombre.", Ha envíado un mensaje, ".$mensaje.", contestar al correo: ".$email;
				$contenido_total=wordwrap($contenido);
				$cabeceras="Contacto Orión";
				if(@mail($email_to, $asunto, $contenido_total, $cabeceras)){ ?>
					<script type="text/javascript">
						window.alert('Nos pondremos en contacto con usted lo más pronto posible.');
						window.location.href="index.html";
					</script>
				<?php }else{ ?>
					<script type="text/javascript">
						window.alert('ha sucedido un error, intente de nuevo más tarde.');
						window.location.href="index.html";
					</script>
				<?php }
			}
		}
	}
	ValidarDatos($_POST['nombre']);
	ValidarDatos($_POST['email']);
	ValidarDatos($_POST['mensaje']);
*/ ?><script type="text/javascript">window.location.href="index.html";</script>