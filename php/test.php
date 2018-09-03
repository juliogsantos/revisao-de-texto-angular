<?php
require_once "conexao.php";
require_once "Usuario.class.php";
require_once "UsuarioController.class.php";

$u = new Usuario();

$u->setId('null');
$u->setName("fodase");
$u->setLogin("qwerty");
$u->setPass("12345");

$c = new UsuarioController();

$c->setUsuario($u);

$sql = "INSERT INTO usuarios VALUES(". $c->getUsuario()->getId() .", '". $c->getUsuario()->getName() ."', '". $c->getUsuario()->getLogin() ."', '". $c->getUsuario()->getPass() ."')";

$c->executar('insert', $sql);