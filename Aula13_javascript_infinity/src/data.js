FAÇA UM PROGRAMA QUE PERGUNTA PRO USUÁRIO SEU NOME, IDADE E NACIONALIDADE
GUARDE ESSAS 3 INFORMAÇÕES EM UM OBJETO
TRANSFORME ESSE OBJETO EM STRING
GUARDE ESSE OBJETO TRANSFORMADO NO LOCALSTORAGE
COLOQUE ESSAS 3 INFORMAÇÕES NA TELA ABAIXO DO BOTÃO
CRIE UMA FUNÇÃO QUE SEMPRE QUE A PÁGINA CARREGAR VAI BUSCAR OS DADOS NO LOCALSTORAGE
TRANSFORMA DE VOLTA EM OBJETO E PÕE DE VOLTA NA TELA



<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Revisão JSON</title>
</head>
<body>
    <form id="formulario">
        <label for="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required>
        <br>
        <label for="idade">Idade</label>
        <input type="number" id="idade" name="idade" placeholder="Digite sua idade" required>
        <br>
        <label for="nacionalidade">Nacionalidade</label>
        <input type="text" id="nacionalidade" name="nacionalidade" placeholder="Digite sua nacionalidade" required>
        <br>
        <button>Enviar</button>
    </form>
    <p id="resposta_nome"></p>
    <p id="resposta_idade"></p>
    <p id="resposta_nacionalidade"></p>

    <script src="./script.js"></script>
</body>
</html>







const formulario = document.querySelector("#formulario")

const nome = document.querySelector("#nome")
const idade = document.querySelector("#idade")
const nacionalidade = document.querySelector("#nacionalidade")

const resposta_nome = document.querySelector("#resposta_nome")
const resposta_idade = document.querySelector("#resposta_idade")
const resposta_nacionalidade = document.querySelector("#resposta_nacionalidade")

formulario.addEventListener("submit", (e) =>{
    // AQUI EU ESTOU PREVININDO O COMPORTAMENTO PADRÃO DO FORMULÁRIO, QUE É ATUALIZAR A PÁGINA, LIMPAR OS CAMPOS E SUBIR OS DADOS PRA URL
    e.preventDefault()

    // FAZENDO OS VALORES QUE FORAM DIGITADOS APARECEREM NA TELA (INJETANDO INFORMAÇÕES NO HTML)
    resposta_nome.textContent = `Nome: ${nome.value}`
    resposta_idade.textContent = `Idade: ${idade.value}`
    resposta_nacionalidade.textContent = `Nacionalidade: ${nacionalidade.value}`


    // CRIANDO UM OBJETO PRA JUNTAR EM UMA ÚNICA VARIÁVEL AS 3 INFORMAÇÕES DO USUÁRIO
    const objeto_usuario = {
        name: nome.value,
        age: idade.value,
        nationality: nacionalidade.value
    }

    // GUARDO O OBJETO NO LOCALSTORAGE
    // PORÉM PARA GUARDAR EU PRECISO TRANSFORMAR O OBJETO EM UMA STRING, POR ISSO ESSA LINHA COM JSON.stringify()
    localStorage.setItem("user",JSON.stringify(objeto_usuario))
})


function buscarDados(){
    // PRIMEIRO EU VOU ASSIM QUE CARREGAR A PÁGINA BUSCAR NO MEU LOCALSTORAGE UMA CHAVE CHAMADA user SE ELA NÃO EXISTIR EU TRAGO UM OBJETO VAZIO
    // PORÉM SE EXISTIR, ELE VIRÁ COMO STRING, POIS FOI ASSIM QUE EU O SALVEI
    // ENTÃO EU PRECISO DO JSON.parse() PARA TRANSFORMAR O QUE ERA STRING, DE VOLTA EM UM OBJETO, PARA QUE EU POSSA USAR AS PROPRIEDADES DO OBJETO, COMO name, age e nacionality
    const dados_usuario = JSON.parse(localStorage.getItem("user"))  || {}

    // DEPOIS QUE EU BUSQUEI AS INFORMAÇÕES EU VOU COLOCAR ELAS DE VOLTA NA TELA, PORÉM AGORA EM VEZ DE USAR O QUE O USUÁRIO DIGITOU .value, NÓS VAMOS USAR AS INFORMAÇÕES DO OBJETO QUE VEIO DO LOCALSTORAGE
    resposta_nome.textContent = `Nome: ${dados_usuario.name}`
    resposta_idade.textContent = `Idade: ${dados_usuario.age}`
    resposta_nacionalidade.textContent = `Nacionalidade: ${dados_usuario.nationality}`
}

buscarDados()