<?php
require_once "conexao.php";
require_once "Usuario.class.php";
require_once "UsuarioController.class.php";

$u = new Usuario();

$u->setId('null');
$u->setName("fodase");
$u->setLogin("qwerty");
$u->setPass("12345");

$c = new UsuarioController($u);

$c->addUsuario($con);

