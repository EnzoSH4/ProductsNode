const express = require('express');
const app = express();
const conexao = require('./db/bancoDeDados');
const contProd = require('./cont_produto/controle_prod');
const produto = require('./cont_produto/produto')
app.use("/", contProd)

app.set("view engine","ejs");
app.use(express.static('public'));

app.listen(3000,() =>{
    console.log("tomoulis");
    });
    
app.get("/", (req,res) =>{
    res.render('index');
});

app.get("/cadastrarProduto",(req,res)=>{
    res.render('./produtos/cadProd')
})



conexao.authenticate().then(()=>{
    console.log("CONECTADO COM O BANCO");
}).catch((erroMsg)=>{
    console.log(erroMsg);
})

app.get("/controleProduto", (req, res) => {
    produto.findAll().then((produtos) => {
        res.render('./produtos/prodList', { produto: produtos });
    })
});
//enzoHingst