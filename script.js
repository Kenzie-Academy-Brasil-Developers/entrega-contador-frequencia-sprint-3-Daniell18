let button=document.getElementById("button")
let button2=document.getElementById("button2")
function captaTexto (){
    let texto=document.getElementById("textinput").value;
    return texto;
}
button.addEventListener('click',function a(){
    let result_letra=document.getElementById("teste");
    main(captaTexto(),1,result_letra)
})
button2.addEventListener('click',function b(){
    let result_palavra=document.getElementById("teste1")
    main(captaTexto(),2,result_palavra)
})
function main(texto,seletor,result){
    texto=texto.toLowerCase();
    texto=texto.replace(/[^a-z'\s]+/g, "");
    let palavras = texto.split(/\s/);
    texto=texto.replace(/\s/,"");
    let letras=texto.split("")
    let escolha=[]
    let contador2=0;
    let array=[]
    let x=[];
    let contador=0;
    if(seletor===1){
        escolha=letras
     
    }
    if(seletor===2){
  
        escolha=palavras;
    }
    separaString(array,escolha,contador2,x)
   
    limpaString(x)
   
    contaLetras(contador,x,escolha)
    
    x=x.join("// ")
    imprime(x,result)
}
function separaString (array,texto,contador2,x){
    for(let i=0;i<texto.length;i++){
        array[i]=texto[i]
        contador2=0
        for(let j=0;j<texto.length;j++){
            
            if(texto[i]===array[j]){
            contador2++;
            }
            if(contador2===1){
          
                x[i]=texto[i]    
            }
            if(contador2>1){
              
                x[i]="#"
            }
        }
    }
}
function limpaString(x){
    for(let u=0;u<x.length;u++){
        if(x[u]==="#"){
            console.log(x[u])
            x.splice(u,1)
            u=0;
        }
     }
}
function contaLetras (contador,x,texto){
    for(let r=0;r<x.length;r++){
        contador=0;
        for(let y=0;y<texto.length;y++){
            if(x[r]===texto[y]){
              contador++
            }
        }
       x[r]= x[r]+ ":"+contador
    }
}
function imprime (x,result){
    result.innerText=x;
}
