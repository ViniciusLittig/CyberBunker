//Constantes
const express=require('express');
const bodyParser=require('body-parser');
//const mercadopago=require('mercadopago');
const cors=require('cors');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});