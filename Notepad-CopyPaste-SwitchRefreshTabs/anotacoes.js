document.addEventListener('DOMContentLoaded', function(){ //quando a página carregar

    //recupera o valor salvo no application --> storage --> Local Storage do navegador
    let chave = window.localStorage.getItem('chaveAnotacoes');
                                                    //converte "string" para "objeto"
    document.getElementById('txtAnotacoes').value = JSON.parse(chave);


    //caso ocorra alguma alteração no valor do input
    document.getElementById('txtAnotacoes').addEventListener('input', function() {
        //pega o valor do input e converte  o "objeto" para "string" 
        let valorInput = JSON.stringify(this.value);
        //salva no application --> storage --> Local Storage do navegador
        window.localStorage.setItem('chaveAnotacoes',valorInput);
    });
})
