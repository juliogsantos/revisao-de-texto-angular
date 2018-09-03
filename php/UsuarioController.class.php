<?php 

require_once "Usuario.class.php";

class UsuarioController {

    public $usuario;

     function __construct (Usuario $u){
         $this->usuario = $u;
     }

     function getUsuario(){
         return $this->usuario;
     }

     function setUsuario($valor){
         $this->usuario = $valor;
     }

     function addUsuario($con){
         $sql = "INSERT INTO usuarios VALUES(". $this->usuario->getId() .", '". $this->usuario->getName() ."', '". $this->usuario->getLogin() ."', '". $this->usuario->getPass() ."')";
     }
}