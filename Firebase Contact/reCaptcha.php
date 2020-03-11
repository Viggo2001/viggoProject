<?php
    $senderEmail = "sender@gmail.com";
    $recipient = "recipient@gmail.com";
    $subject = $_POST["subject"];
    $headers = "From: Feedback <$senderEmail>";

    $body = $_POST["messagefeed"];

    mail ($recipient,$subject,$body,$headers);

    echo 'Your message was sent';
?>