<?php
class ClassDB
{
    #Conexão ao banco
    private function conectDB()
    {
        try{
            return $con = new \PDO("mysql:host=localhost;dbname=app_projeto","root","");
        }catch (PDOException $erro){
            return $erro->getMessage();
        }
    }

    #Verificar o login
    public function verifyLogin($cpf,$pass)
    {
        $b = $this->conectDB()->prepare("select * from users where cpf=? and password=?");
        $b->bindParam(1,$cpf,\PDO::PARAM_STR);
        $b->bindParam(2,$pass,\PDO::PARAM_STR);
        $b->execute();
        return($b->rowCount() > 0)?true:false;
    }
} 