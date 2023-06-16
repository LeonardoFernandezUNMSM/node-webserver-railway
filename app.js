const express = require("express")
const hbs = require("hbs");
require('dotenv').config();
const app = express()
const port = process.env.PORT;
//handlebar:
app.set('view engine','hbs'); //para usar handlebars para express
hbs.registerPartials(__dirname+'/views/partials');//para usar parciales
//para servir contenido estatico
app.use(express.static("public")); //definicion de midelware express. si public esta en otro sitio especificar path

app.get("/", (req, res) => {
    res.render('home',{//Argumentos
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    });
});
app.get("/generic", (req, res) => {
    res.render('generic',{
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
});
app.get('/elements', (req, res) => {//Página 12 corregir enlace, nota EXTREMEDAMANTE IMPORTANTE, PONER EL * AL FINAL SI NO TODAS LAS RUTAS SUCESIVAS NO FUNCIONARÁN
    res.render('elements',{
        nombre: 'Armando David',
        titulo: 'Curso de Node'
    })
});
app.get("*", (req, res)=> {
    res.sendFile(__dirname+'/public/404.html');
});


app.listen(port, () => {
    console.log(`Example app listenining al http://localhost:${port}`)
})

//Pagína 14 mitad inferior redacción algo confusa, quizás crear template dentro de public ya que no se ve en la carpeta raiz, y tiene que decir cortar para inducir el error porque si no sigue renderizando index.html a pesar de que no es el directo, quizás problemas con la memoria cache

//Pagina 14 NO mover 404 o crear 404.hbs
//Página 16 el archivo es llamado home.hDs
//Página 17 no se copíó el var hbs en el código
//Página 19 hbs aparece como const mientras en su documentación como var, no afecta el funcionamiento