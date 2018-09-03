<?php 
require_once "Conexao.class.php";
require_once "Usuario.class.php";

class UsuarioController extends Conexao {

    public $usuario;

     function __construct (){
         
     }

     function getUsuario(){
         return $this->usuario;
     }

     function setUsuario(Usuario $valor){
         $this->usuario = $valor;
     }
}