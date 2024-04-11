var sala1 = window.document.getElementById ("sala1")
var sala2 = window.document.getElementById ("sala2")
var sala3 = window.document.getElementById ("sala3")

function clicarNaImagem(){
    sala1.style = "display:none"
    sala2.style = "display:flex"
}

function clicarNaImagem2(){
    sala2.style = "display:none"
    sala3.style = "display:flex"
}

function clicarNaImagem3(){
    sala3.style = "display:none"
    sala1.style = "display:flex"
}