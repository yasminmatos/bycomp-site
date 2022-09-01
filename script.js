let texto1 = "Prático e Fácil: com a BYCOMP, otimizamos suas <br> pesquisas para gastar menos na hora de realizar<br> suas compras."
let texto2 = "Nosso App filtra as melhores opções para você<br>economizar dinheiro e tempo, trazendo<br>avaliações e sugestões para facilitar sua escolha."

let frase1= "Poupe <span> tempo </span> e <span> dinheiro </span>";
let frase2= "Faça suas <span> compras </span> de forma <span> inteligente </span> "


let alterado = false

function botaoMudarTela(){
    if(!alterado) {
    document.getElementById("titulo").innerHTML = texto2
    document.getElementById("tela1").style.background = "black"
    document.getElementById("frase").style.color = "white"
    document.getElementById("frase").innerHTML = frase1
    document.getElementById("circulo").style.background = "white"
    document.getElementById("botao").innerHTML = "Funcionalidades"
    
    
    } else{
        document.getElementById("titulo").innerHTML = texto1
        document.getElementById("tela1").style.background = "white"
        document.getElementById("frase").style.color = "black"
        document.getElementById("circulo").style.background = "#F24C00"
        document.getElementById("frase").innerHTML = frase2
        document.getElementById("botao").innerHTML = "Benefícios"
       
    }

    alterado = !alterado
}