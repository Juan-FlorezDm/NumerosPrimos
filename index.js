const btn = document.getElementById("Enviar")
const res = document.getElementById("Respuesta")

btn.addEventListener("click", (e)=>{
    const numero = document.getElementById("Numero").value
    if(numero <= 1){
        res.innerHTML = "no es un numero primo"
        return
    }
    for(var i = 2; i <= Math.sqrt(numero); i ++){
        if(numero%i === 0){
            res.innerHTML = "no es un numero primo"
            return
        }
    }
    res.innerHTML = "es un numero primo"
})
