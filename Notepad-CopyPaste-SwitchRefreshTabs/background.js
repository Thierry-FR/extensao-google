//para ouvir qualquer mensagem que vem do tempo de execução (macro.js)
chrome.runtime.onMessage.addListener(messageReceived);

function messageReceived(msg) { //recebe a mensagem do (macro.js) e executa algo
	let contador = 10;
	let loop =	setInterval(function() {
		if(localStorage.getItem('chaveStatusMacro') == 'DESATIVAR'){
			if(contador == 0){
				if(localStorage.getItem('ChaveBtnMudarAba') == 'true' || 
				(localStorage.getItem('ChaveBtnMudarAba') == 'true' && localStorage.getItem('ChaveBtnAtualizar') == 'true'))
					moverAba();
	
				if(localStorage.getItem('ChaveBtnAtualizar') == 'true' 
				&& localStorage.getItem('ChaveBtnMudarAba') == 'false')
					atualizarAba();
				
				contador = 10;
			}

			contador--;
			chrome.browserAction.setBadgeText({ text: contador.toString() });//mostra o icon/tempo
		}else{
			clearInterval(loop); //para o loop/intervalo
			chrome.browserAction.setBadgeText({ }); //remove icon/tempo
		}
	}, 1000); //1 segundo
}
function moverAba(){		
	chrome.tabs.query({active: true}, function(tabs) {
		let tabIndex = tabs[0].index;
		chrome.tabs.query({}, function(tabs) {

			//mover página
			let tabsNumber = tabs.length;
			let tabToOpen = tabIndex + 1;
			if (tabToOpen >= tabsNumber) {
				tabToOpen = 0;
			}
			chrome.tabs.update(tabs[tabToOpen].id, {active: true});

			//atualiza a próxima página
			if(localStorage.getItem('ChaveBtnMudarAba') == 'true' && localStorage.getItem('ChaveBtnAtualizar') == 'true'){
				let tabToRefresh = tabToOpen + 1;
				if ((tabToOpen + 1) === tabsNumber) {
					tabToRefresh = 0;
				}
				chrome.tabs.reload(tabs[tabToRefresh].id)
			}
		})
	});
}

function atualizarAba(){	
	chrome.tabs.query({active: true}, function(tabs) {
		let tabIndex = tabs[0].index;
		chrome.tabs.query({}, function(tabs) {

			chrome.tabs.reload()
		})
	});
}
