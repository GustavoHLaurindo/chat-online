
var mensagempurple = document.getElementsByClassName("circle-i")[0]
var mensagemblue = document.getElementsByClassName("circle-you")[0]
mensagempurple.addEventListener("click", clicou_purple)
mensagemblue.addEventListener("click", clicou_blue)

function clicou_purple(){
    var hora = new Date()
    var horaio_atual = hora.getHours()
    var minutos_atual = hora.getMinutes()
    var status_horario = document.getElementById("ultima-vez")
    status_horario.append(`${horaio_atual}:${minutos_atual}`)
    var chat = document.getElementById("chat")
    var mensagem = document.getElementById("mensagem-input")
    var valor_mensagem = String(mensagem.value)
    if(valor_mensagem.length < 1){
        mensagem.placeholder = "digite uma mensagem :)"
    }
    else{
    mensagem.placeholder = "Digite sua mensagem"
    var caixa_mensagem = document.createElement("div")
    var horario = document.createElement("div")
    if(minutos_atual < 10){
        var valor_horario = document.createTextNode(`${horaio_atual}:0${minutos_atual}`)
    }
    else{
        var valor_horario = document.createTextNode(`${horaio_atual}:${minutos_atual}`)
    }
    
    var corpo_mensagem = document.createElement("div")
    corpo_mensagem.setAttribute("class", "body")
    horario.setAttribute("class", "top")
    caixa_mensagem.setAttribute('class', "mensagem you")
    chat.appendChild(caixa_mensagem)
    horario.appendChild(valor_horario)
    corpo_mensagem.append(valor_mensagem)
    caixa_mensagem.appendChild(horario)
    caixa_mensagem.appendChild(corpo_mensagem)
    mensagem.value = ""

    }
    
}
function clicou_blue(){
    var hora = new Date()
    var horaio_atual = hora.getHours()
    var minutos_atual = hora.getMinutes()
    var status_horario = document.getElementById("ultima-vez")
    status_horario.innerHTML = `hoje as ${horaio_atual}:${minutos_atual}`
    var chat = document.getElementById("chat")
    var mensagem = document.getElementById("mensagem-input")
    var valor_mensagem = String(mensagem.value)
    if(valor_mensagem.length < 1){
        mensagem.placeholder = "digite uma mensagem :)"
    }
    else{
    mensagem.placeholder = "Digite sua mensagem"
    var caixa_mensagem = document.createElement("div")
    var horario = document.createElement("div")
    if(minutos_atual < 10){
        var valor_horario = document.createTextNode(`${horaio_atual}:0${minutos_atual}`)
    }
    else{
        var valor_horario = document.createTextNode(`${horaio_atual}:${minutos_atual}`)
    }
    
    var corpo_mensagem = document.createElement("div")
    corpo_mensagem.setAttribute("class", "body")
    horario.setAttribute("class", "top")
    caixa_mensagem.setAttribute('class', "mensagem i")
    chat.appendChild(caixa_mensagem)
    horario.appendChild(valor_horario)
    corpo_mensagem.append(valor_mensagem)
    caixa_mensagem.appendChild(horario)
    caixa_mensagem.appendChild(corpo_mensagem)
    mensagem.value = ""
   }
}