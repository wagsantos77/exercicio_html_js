const form = document.getElementById(`form-acess`);

function formNumero(varA, varB) {
    return varB > varA;
}

form.addEventListener(`submit`, function(e) {
    let validaNumero = false;
    e.preventDefault();
    let varA =parseFloat(document.getElementById(`numero-a`).value);
    let varB =parseFloat(document.getElementById(`numero-b`).value);

    const mensagemSucesso = `Tudo Certo. Numero B maior que numero A`;
    
    validaNumero = formNumero(varA,varB);
    if (validaNumero){
        const xmensagemsucesso = document.querySelector(`.sucess-message`);
        xmensagemsucesso.innerHTML = mensagemSucesso;
        xmensagemsucesso.style.display = `block`;
        document.querySelector('.error-message').style.display = 'none';
                
        varA.value =``;
        varB.value =``;
    } else {
        varA.value =``;
        varB.value =``;

        document.querySelector(`.error-message`).style.display = `block`;
        xmensagemsucesso.style.display = 'none';
        
       
    }
})

console.log(form)
