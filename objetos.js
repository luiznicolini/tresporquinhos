//No Javascript, funções são objetos e existem 3 tipos de objetos, que veremos em breve.
document.write = function(texto){
var tela = document.getElementById('tela');
console.log(tela);
tela.innerHTML = tela.innerHTML + texto;
}

//resolver os problemas:
//estoria is not a function;
//carregamento bootstrap;
//objeto = json;
//this para objeto publico e var para objeto privado.


function Porco(nome){
	this.nome = nome;

	this.fugir = function (casa){
		console.log('O porco ' , this.nome , 'fugiu para casa de ' , casa.material);
	}
}

function Casa(m, r){
	this.porco = [];
	this.material = m;
	this.resistencia = r;

	this.cair = function (){
		console.log('A casa de ' , material , ' caiu!!!');
	}
}

function Lobo(){
	this.indole;
	this.forca = 5;

	this.soprar = function (origem, destino){
		if(this.forca > origem.resistencia){
			            
            for(var i = 0; i < origem.porco.length; i++){
                
                destino.porco.push(origem.porco[i]);
                
                console.log(origem.porco[i].nome, 'indo para casa de ', destino.material);
            }
            
           
            }
        else{
            this.atirarComBazooca(origem);
        }
        
                console.log('AEEE', origem.material, ' JÁ ERA KKK');
        
		}
	this.atirarComBazooca = function (casa){
		console.log('AGORA VAI!!', casa.material, ' CAIU KKKKKKK');
        
        var nomes = '';
        
        for(p in casa.porco){
            
            var pc = casa.porco[p];
            nomes = nomes + pc.nome + ', ';
        
        }
        
        console.log(' E no final', nomes, 'morreram felizes para sempre');
	}
}

function Estoria(){
	this.contar = function (){
        
		var cicero = new Porco('cicero');
		var heitor = new Porco('heitor');
		var pratico = new Porco('pratico');

		var palha = new Casa('palha', 1);
		var madeira = new Casa('madeira', 2);
		var tijolo = new Casa('tijolo', 6);

		palha.porco.push(cicero);
		madeira.porco.push(heitor);
		tijolo.porco.push(pratico);

		var lobo = new Lobo();

		lobo.soprar(palha, madeira);
		lobo.soprar(madeira, tijolo);
		lobo.soprar(tijolo, undefined);
	}

}

var estoria = new Estoria();
console.log(estoria);
	estoria.contar();