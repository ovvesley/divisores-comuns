function calcular(){
    clearTable() 
    var consulta = getValue(document.getElementById('a-input'), document.getElementById('b-input'))
    var output = mdc (consulta)
    plotarNaTela(output)  
}

function getValue(num1, num2){
    var consulta = {
        a: 0,
        b: 0,
    }
    consulta.a = num1.value
    consulta.b = num2.value
return consulta
}

function mdc(consulta){
    var output = {
        resultado : []
    }
    for (let index = 1; index <= consulta.b; index++) {
        if (consulta.a%index ===0 && consulta.b%index ===0){
            output.resultado.push(index)
        }
              
    }
    return output;  
}
function plotarNaTela(output){
    for (let index = 0; index < output.resultado.length; index++) {
        var trElements = document.createElement('tr')
        trElements.className = 'tr-elemento'
        var tdElements = document.createElement('td')
        document.getElementById('output').appendChild(trElements)
        tdElements.textContent = output.resultado[index]
        trElements.appendChild(tdElements)
    }
    
}
function clearTable(){
    var a = document.getElementsByClassName('tr-elemento');
    console.log(a)
    while(a.length>=1){
        a[0].remove()
    }
}
