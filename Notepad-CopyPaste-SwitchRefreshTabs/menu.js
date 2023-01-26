document.addEventListener('DOMContentLoaded', function(){

    //concatenador
    document.querySelector('#btnConcatenar').addEventListener('click', function(){

        let textarea = document.querySelector('#txtconcatenar');
        let text = textarea.value.split("\n");

        for (let i in text) { //concatena
            if(i == text.length-1)
                text[i] = "'" + text[i] + "'"; //na ultima linha não irá por a virgula
            else
                text[i] = "'" + text[i] + "',";
            
        }

        textarea.value = ''; //limpa a textarea no html

        for (let i in text) { 
            //textarea recebe o valor concatenado + quebra de linha
            textarea.value += text[i] + "\n";
        }

        //copia o valor do textarea para a area de trabalho 
        navigator.clipboard.writeText(textarea.value);
        //limpa a textarea no html
        textarea.value = '';
        //muda o nome do botão
        document.querySelector('#btnCopiar').innerHTML = 'copiado' 
    })

})

