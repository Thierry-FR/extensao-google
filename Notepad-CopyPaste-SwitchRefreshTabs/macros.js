document.addEventListener('DOMContentLoaded', function(){ //sempre que atualizar a página
	
	if(localStorage.getItem('chaveStatusMacro')){ //caso exista a chave
		//recupera o valor salvo no application --> storage --> Local Storage do navegador
		let chaveStatus = window.localStorage.getItem('chaveStatusMacro');
														//manda o valor para o botão
		document.querySelector('#btnAtivarMacros').innerHTML = chaveStatus;
	}

	document.querySelector('#btnAtivarMacros').addEventListener('click', function(){
		let  btnMudarAba = document.querySelector ('#btnMudarAba').checked;
		window.localStorage.setItem('ChaveBtnMudarAba',btnMudarAba);

		let  btnAtualizar = document.querySelector ('#btnAtualizar').checked;
		window.localStorage.setItem('ChaveBtnAtualizar',btnAtualizar);
		
		if(this.innerHTML == 'ATIVAR'){ //ativando
			if(btnMudarAba == true || btnAtualizar == true || btnScroll == true){
				this.innerHTML = 'DESATIVAR';
				//salva no application --> storage --> Local Storage do navegador
				window.localStorage.setItem('chaveStatusMacro',this.innerHTML);

				//aqui ele está como se fosse mandando uma mensagem, para 
				//chamar a função que fica em background.js
				chrome.runtime.sendMessage({greeting: "hello"}, function(response) {});
			}else{
				btnMudarAba = true;
			}
		}else{
			this.innerHTML = 'ATIVAR';
			window.localStorage.setItem('chaveStatusMacro',this.innerHTML);
		}

		
    })
});