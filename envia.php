<?php
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $telefone = addslashes($_POST['telefone']);
    $texto = addslashes($_POST['texto']);

    $para = "messiasmachado@geradigital.online";
    $assunto = "coleta de dados";

    $corpo = "Nome: ".$nome."\n"."Email: ".$email."\n"."Telefone: ".$telenone."\n"."Mensagem: ".$texto;

    $cabeca ="From: messiasmachado1976@gmail.com"."\n"."Reply-to :".$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo("Email enviado com sucesso!");
    }else{
        echo("Ocorreu um erro ao enviar!");
    }

?>