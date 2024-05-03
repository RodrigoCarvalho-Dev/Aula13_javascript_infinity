const name = document.querySelector("#name");
const age = document.querySelector("#age");
const nationality = document.querySelector("#nacionality");
const form = document.querySelector("#form");





form.addEventListener("submit" , (e) => {
    e.preventDefault()
    const object_user = {
        name : name.value ,
        age : age.value,
        nationality : nationality.value ,

    }
    const nome_usuario = document.createElement("p")
    nome_usuario.textContent =  `Nome: ${name.value|| "indefinido"}`

    
    const idade_usuario = document.createElement("p")
    idade_usuario.textContent =  `Idade: ${age.value || "indefinido"}`

    
    const nacionalidade_usuario = document.createElement("p")
    nacionalidade_usuario.textContent = `Nacionalidade: ${nationality.value || "indefinido"}`

    document.body.append(nome_usuario, idade_usuario, nacionalidade_usuario)

    const data_user = JSON.parse(localStorage.getItem("users" )) || []
    
    data_user.push(object_user)

    localStorage.setItem("users", JSON.stringify(data_user))
})


    function buscarDados(){
        const data_user = JSON.parse(localStorage.getItem("users" )) || []
    
        data_user.forEach(usuario_atual => {
            
                const nome_usuario = document.createElement("p")
                nome_usuario.textContent =  `Nome: ${usuario_atual.name || "indefinido"}`
            
                
                const idade_usuario = document.createElement("p")
                idade_usuario.textContent =  `Idade: ${usuario_atual.age || "indefinido"}`
            
                
                const nacionalidade_usuario = document.createElement("p")
                nacionalidade_usuario.textContent = `Nacionalidade: ${usuario_atual.nationality || "indefinido"}`
            
                document.body.append(nome_usuario, idade_usuario, nacionalidade_usuario)
            })
        };
       buscarDados()

    
    
    
   
    


