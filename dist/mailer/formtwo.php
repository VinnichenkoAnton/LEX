<?php 


$form_name = $_POST['form_name'];
$form_phone = $_POST['form_phone'];
$form_email = $_POST['form_email'];
$form_vin = $_POST['form_vin'];
$form_plate = $_POST['form_plate'];
$form_trustedname = $_POST['form_trustedname'];
$form_trustedphone = $_POST['form_trustedphone'];
$form_code = $_POST['form_code'];
$form_choice = $_POST['form_choice'];
$form_photoself = $_POST['form_photoself[]'];


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

for ($ct = 0; $ct < count($_FILES['form_photoself']['tmp_name']); $ct++) {
    $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['form_photoself']['name'][$ct]));
    $filename = $_FILES['form_photoself']['name'][$ct];
    if (move_uploaded_file($_FILES['form_photoself']['tmp_name'][$ct], $uploadfile)) {
        $mail->addAttachment($uploadfile, $filename);
    } else {
        $msg .= 'Failed to move file to ' . $uploadfile;
    }
}

for ($ct = 0; $ct < count($_FILES['form_photoselfone']['tmp_name']); $ct++) {
    $uploadfile = tempnam(sys_get_temp_dir(), sha1($_FILES['form_photoselfone']['name'][$ct]));
    $filename = $_FILES['form_photoselfone']['name'][$ct];
    if (move_uploaded_file($_FILES['form_photoselfone']['tmp_name'][$ct], $uploadfile)) {
        $mail->addAttachment($uploadfile, $filename);
    } else {
        $msg .= 'Failed to move file to ' . $uploadfile;
    }
}


$mail->isHTML(true);
$mail->Subject = 'Лист від Lex';
$mail->Body    = '
Користувач сайту <b>Lex</b> заповнив форму!<br><br> 
ПІБ власника транспортного засобу: ' . $form_name . ' <br>
Телефон: ' . $form_phone . ' <br>
Email: ' . $form_email . ' <br>
VIN-код: ' . $form_vin . ' <br>
Номерний знак: ' . $form_plate . ' <br>
ПІБ довіреної особи: ' . $form_trustedname . ' <br>
Телефон довіреної особи: ' . $form_trustedphone . ' <br>
Кодове слово: ' . $form_code . ' <br>
Тариф: ' . $form_choice . ' <br>
Фото: ' . $form_photoself . '';


if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>