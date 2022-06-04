//Constantes
const express=require('express');
const bodyParser=require('body-parser');
//const mercadopago=require('mercadopago');
const cors=require('cors');
const model=require('./models');

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Route
app.post('/create' , async(req,res)=>{
    let reqs = await model.User.create({
        'cpf':req.body.cpfUser,
        'name':req.body.nameUser,
        'tel':req.body.telUser,
        'email':req.body.emailUser,
        'password':req.body.passwordUser,
        'createdAT':new Date(),
        'updatedAT':new Date(),
   

    });
    if(reqs){
        res.send(JSON.stringify('O usuario cadastrado com sucesso'));
    };

});

//Start server
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});