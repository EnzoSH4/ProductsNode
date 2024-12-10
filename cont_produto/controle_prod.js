const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const prod = require('./produto');

router.use(bodyParser.urlencoded({extended:true}));


router.post("/salvaProd", (req,res)=>{
    nome = req.body.nome;
    categoria = req.body.categoria;
    preco = req.body.precoProduto;
    prod.create({
        nome: nome,
        categoria : categoria,
        preco : preco
    }).then(()=>{
        res.redirect("/controleProduto");
    })
})

router.post("/excluirProd", (req,res)=>{
    id = req.body.id;
    prod.destroy({
        where : {
            id : id
        }
    }).then(()=>{
        res.redirect("/controleProduto");
    })
})


module.exports = router;