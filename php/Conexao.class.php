<?php

	class Conexao{
		$host = "localhost";
		$usuario = "root";
		$senha = "";
		$banco = "revisao";
		$con = null;

		function abreConexao(){
			$con = mysqli_connect($host,$usuario,$senha,$banco);
			echo "conexao aberta";
		}

		function fechaConexao(){
			mysqli_close($con);
			echo "conexao fechada";
		}

		function executar($comando, $sql){
			switch ($comando) {

				case 'insert':
					abreConexao();
					mysqli_query($con, $sql);
					fechaConexao();
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