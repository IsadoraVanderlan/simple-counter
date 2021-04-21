function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
            res.innerHTML = 'Impossivel Contar!'
            window.alert('[ERRO] Falta dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <= 0){
            window.alert('Passo invalido! Considerando o PASSO 1')
            p = 1 //Caso o valor seja negativo ele vai considerar como 1 
        }
        
        if(i < f) {
            //CONTAGEM CRESCENTE    
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
        }else {
            //CONTAGEM DECRESCENTE 
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `
            }
            res.innerHTML += `\u{1F3c1}`
        }
    }
}