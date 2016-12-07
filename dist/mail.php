<?php

    function complete_mail() {        
        $mess = ' 
            <b>Имя: </b>'.$_POST['form-name'].'<br />
            <b>Телефон: </b>'.$_POST['form-phone'].'<br />
            <b>Email: </b>'.$_POST['form-mail'].'<br />
        '; 

        require 'class.phpmailer.php'; 
        
        $mail = new PHPMailer(); 
        $mail->From = 'shvsm_fr@gmail.com';      // от кого 
        $mail->FromName = 'Заявка с сайта ШВСМ Франшыза';   // от кого 
        $mail->AddAddress('okal.ihor@gmail.com', 'Игорь'); // кому - адрес, Имя 
        $mail->IsHTML(true);        // выставляем формат письма HTML 
        $mail->CharSet = "utf-8";
        $mail->Subject = 'Заявка с сайта';  // тема письма
        $mail->setLanguage('ru');

        $mail->Body = $mess; 
        if (!$mail->Send()) die ('Mailer Error: '.$mail->ErrorInfo); 

        header("Location: ./");
}

function output_err($num) 
{ 
    $err[0] = 'ОШИБКА! Не введено имя.'; 
    $err[1] = 'ОШИБКА! Неверно введен e-mail.'; 
    $err[2] = 'ОШИБКА! Не введен телефон.'; 
    echo '<p>'.$err[$num].'</p>';   
    exit(); 
}

if (!empty($_POST['submit'])) complete_mail(); 

?> 