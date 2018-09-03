<?php

	abstract class Conexao{
		public $host = "localhost";
		public $u = "root";
		public $senha = "";
		public $banco = "revisao";
		public $con = null;

		public function abreConexao(){
			$this->con = mysqli_connect($this->host, $this->u, $this->senha, $this->banco);
			echo "conexao aberta";
		}

		public function fechaConexao(){
			mysqli_close($this->con);
			echo "conexao fechada";
		}

		public function executar($comando, $sql){
			switch ($comando) {

				case 'insert':
					self::abreConexao();
					mysqli_query($this->con, $sql);
					self::fechaConexao();
					break;

				case 'update':
					abreConexao();
					mysqli_query($con, $sql);
					fechaConexao();
					break;

				case 'delete':
					abreConexao();
					mysqli_query($con, $sql);
					fechaConexao();
					break;

				case 'list':
					abreConexao();
					$result = mysqli_query($con,$sql);
					fechaConexao();
					return mysqli_fetch_assoc($result);
					break;

				case 'findId':
					abreConexao();
					$result = mysqli_query($con,$sql);
					fechaConexao();
					return mysqli_fetch_assoc($result);
					break;

				default:
				    
					break;
			}
		}

	}