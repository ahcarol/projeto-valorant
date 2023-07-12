function select (id){
    if (id==="sage"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-sage.png";
        document.getElementById("nome-personagem").innerHTML= "ଘ Sage";
        document.getElementById("descricao-personagem").innerHTML = "Como uma verdadeira fortaleza chinesa, Sage traz segurança para si mesma e para a equipe aonde quer que vá. Capaz de reviver aliados e rechaçar investidas agressivas, ela oferece um centro de calmaria em meio ao caos da batalha.";
    }
    
    else if (id==="skye") {
        document.getElementById("personagem-grande").src = "./src/imagens/transp-skye.png";
        document.getElementById("nome-personagem").innerHTML = "Skye";
        document.getElementById("descricao-personagem").innerHTML = "Mandando um salve direto da Austrália, Skye e sua equipe de feras desbravam territórios hostis. Com seus poderes de cura e suas criações que partem pra cima dos inimigos, qualquer equipe ficará mais forte e mais segura tendo Skye como aliada.";

    }

    else if (id==="gekko"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-gekko.png";
        document.getElementById("nome-personagem").innerHTML = "Gekko";
        document.getElementById("descricao-personagem").innerHTML = "Gekko, de Los Angeles, lidera um grupo muito unido de criaturas caóticas. Seus amigos atropelam tudo, tirando os inimigos do caminho. Depois, Gekko corre atrás deles para reagrupá-los e reiniciar o processo.";
    }

    else if (id==="killjoy"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-killjoy.png";
        document.getElementById("nome-personagem").innerHTML = "Killjoy";
        document.getElementById("descricao-personagem").innerHTML = "Killjoy, uma alemã genial, defende posições-chave no campo de batalha facilmente com seu arsenal de invenções. Se o dano causado por seu equipamento não der cabo dos inimigos, os efeitos negativos de seus queridos robôs darão conta do recado.";
    }
    
    else if (id==="raze"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-raze.png";
        document.getElementById("nome-personagem").innerHTML = "Raze";
        document.getElementById("descricao-personagem").innerHTML = "Raze chega do Brasil com uma explosão de carisma e armas enormes. Com seu estilo de jogo porradeiro, ela é craque em desentocar inimigos entrincheirados e limpar espaços apertados com uma bela dose de BUUUM!";
    }

    else if (id==="jett"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-jett.png";
        document.getElementById("nome-personagem").innerHTML = "Jett";
        document.getElementById("descricao-personagem").innerHTML = "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.";
    }

    else if (id==="neon"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-neon.png";
        document.getElementById("nome-personagem").innerHTML = "Neon";
        document.getElementById("descricao-personagem").innerHTML = "Neon, nossa Agente filipina, avança em velocidades incríveis, descarregando surtos de radiância bioelétrica tão rapidamente quanto seu corpo consegue gerá-los. Ela corre à frente para pegar os inimigos de surpresa, abatendo-os mais rápido do que um raio.";
    }

    else if (id==="yoru"){
        document.getElementById("personagem-grande").src = "./src/imagens/transp-yoru.png";
        document.getElementById("nome-personagem").innerHTML = "Yoru";
        document.getElementById("descricao-personagem").innerHTML = "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.";
    }


    document.getElementById("personagem-grande").classList.add("animation");
    setTimeout(() => {
    document.getElementById("personagem-grande").classList.remove("animation");
    }, 2000)

}

function init (){
    document.getElementById("personagem-grande").classList.add("animation");
    setTimeout(() => {
        document.getElementById("personagem-grande").classList.remove("animation");
        }, 2000)
}

window.onload = init;