import analisa_valores from './analisa_valores.js'


export default function password_generator(){
document.addEventListener('click',e =>
{
    const el = e.target
    const botao = document.querySelector('.botao')
    const anexar_senha = document.querySelector('.resultado')
    
    if(el == botao){
        let analisar = new analisa_valores()

        analisar.coletar_dados()
        
        let nova_senha =  analisar.gerar_senha()
       
        if(typeof nova_senha === 'undefined'){
            anexar_senha.innerHTML = ''
        }else{
            anexar_senha.innerHTML = nova_senha
        }
        

    } 
})
}