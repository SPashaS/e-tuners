<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;
	use PHPMailer\PHPMailer\SMTP;


	require 'phpmailer/Exception.php';
	require 'phpmailer/PHPMailer.php';
	require 'phpmailer/SMTP.php';



	$title = "E-tuners";
	$body = "";
	$file = $_FILES['photo'];



	//Create a new PHPMailer instance
	$mail = new PHPMailer();

	try {
		$mail->isSMTP();
		$mail->CharSet = 'UTF-8';
		$mail->SMTPAuth = true;

		$mail->Host = 'smtp.gmail.com';
		$mail->Username = '...@gmail.com';
		$mail->Password = '...';
		$mail->SMTPSecure = 'ssl';
		$mail->Port = 465;

		$mail->setFrom('...@gmail.com', 'E-tuners');
		$mail->addAddress('...@gmail.com');

		// Прикрипление файлов к письму
		if (!empty($file['name'][0])) {
			for ($ct = 0; $ct < count($file['tmp_name']); $ct++) {
				$uploadfile = tempnam(sys_get_temp_dir(), sha1($file['name'][$ct]));
				$filename = $file['name'][$ct];
				if (move_uploaded_file($file['tmp_name'][$ct], $uploadfile)) {
						$mail->addAttachment($uploadfile, $filename);
						$rfile[] = "Файл $filename прикреплён";
				} 
				else {
						$rfile[] = "Не удалось прикрепить файл $filename";
				}
			}
		}


///////////

		if (trim(!empty($_POST['tel']))){
			$body.='<p><strong>Номер телефона:</strong> ' . $_POST['tel'] . '</p>';
		}	
////////////////
		


////////////////


		$mail->IsHTML(true);
		$mail->Subject = $title;
		$mail->Body = $body;
		$mail->send();


	} catch (Exception $e) {
		$status = "Ошибка";
	}

?>