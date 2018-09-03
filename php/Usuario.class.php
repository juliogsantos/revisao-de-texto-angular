<?php

class Usuario {
    public $id;
    public $name;
    public $login;
    public $pass;

    public function getId (){
        return $this->id;
    }
    public function setId ($valor){
        $this->id = $valor;
    }

    public function getName (){
        return $this->name;
    }
    public function setName($valor){
        $this->name = $valor; 
    }
     public function getLogin (){
        return $this->login;
    }
    public function setLogin($valor){
        $this->login = $valor; 
    }
    public function getPass (){
        return $this->pass;
    }
    public function setPass($valor){
        $this->pass = $valor; 
    }
}

