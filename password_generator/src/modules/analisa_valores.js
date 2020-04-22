export default class analisa_valores{
    constructor(is_numero,is_maiusculas,is_minusculas,is_simbolos,num_letras){
        this.num_letras = num_letras
        this.is_numero = is_numero
        this.is_maiusculas = is_maiusculas
        this.is_minusculas = is_minusculas
        this.is_simbolos = is_simbolos
    }
    coletar_dados(){
        const caracteres = document.querySelector(".caracteres")
        const numeros = document.querySelector(".numeros")
        const maiusculas = document.querySelector(".maiusculas")
        const minusculas = document.querySelector(".minusculas")
        const simbolos = document.querySelector(".simbolos")

        this.num_letras = caracteres.value
        this.is_numero = false
        this.is_maiusculas = false
        this.is_minusculas = false
        this.is_simbolos = false

        if(numeros.checked === true) this.is_numero = true
        if(maiusculas.checked === true) this.is_maiusculas = true
        if(minusculas.checked === true) this.is_minusculas = true
        if(simbolos.checked === true) this.is_simbolos = true
        
    }

    gerar_senha(){
        let helper = ''
        let simbolos = '@$&!*#%'
        
        const vermelho = document.querySelector(".vermelho")
        vermelho.innerHTML = ''

        if(this.num_letras > 30){ vermelho.innerHTML = 'Erro, senha grande demais!'
        return }
        if(this.num_letras == 0){ vermelho.innerHTML = 'Erro, tamanho insuficiente!'
        return }
        if(! this.is_maiusculas && ! this.is_minusculas && ! this.is_numero && !this.is_simbolos){
            vermelho.innerHTML = 'Erro, nenhum campo selecionado!'
            return
        }

        function rand(max,min){
            return Math.floor(Math.random() * (max - min) + min)
        }

        for(let i=0;i<this.num_letras;i++){
            if(this.is_minusculas) helper += String.fromCharCode(rand(122,97))
            
            if(this.is_numero) helper += String.fromCharCode(rand(57,48))

            if(this.is_maiusculas) helper += String.fromCharCode(rand(90,65))

            if(this.is_simbolos){
                let random_simbol = Math.floor(Math.random() * (simbolos.length))
                helper += simbolos[random_simbol] }
        }

        let password = helper.slice(0,this.num_letras)

        return password
    }
}