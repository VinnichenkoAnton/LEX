<?php 

$user_name = $_POST['user_name'];
$user_code = $_POST['user_code'];
$user_phone = $_POST['user_phone'];


require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'vinnichenkoanton.cv@gmail.com';
$mail->Password = 'Ant9379992';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;
$mail->setFrom('vinnichenkoanton.cv@gmail.comt', 'Lex');
$mail->addAddress('vinnichenkoanton.cv@gmail.com');
$mail->isHTML(true);
$mail->Subject = 'Лист від Lex';
$mail->Body    = '
	Користувач сайту <b>Lex</b> залишив заявку!<br><br> 
	Імя: ' . $user_name . ' <br>
	Код: ' . $user_code . ' <br>
	Номер телефону: ' . $user_phone . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}


?>