const criaJogo = sprite => {
	
	let palavraSecreta = '';
	let lacunas = [];
	let etapa = 1;

	const processaChute = chute =>{

		if(!chute.trim()){
			throw new Error("Chute Inválida");
		}

		const exp = new RegExp(chute, 'gi');
		let	resultado, acertou = false;

		while (resultado = exp.exec(palavraSecreta)) {
					
			lacunas[resultado.index] = chute;
			acertou = true;
		}	

		if(!acertou){
			sprite.nextFrame();
		}
	};

	const criaLacunas = () => lacunas = Array(palavraSecreta.length).fill('');

	const proximaEtapa = ()=> etapa = 2 ;

	const setPalavraSecreta = palavra =>{

		if(!palavra.trim()){
			throw new Error("Palavra Secreta Inválida");
		}

		palavraSecreta = palavra;
		criaLacunas();
		proximaEtapa();
	};

	const getLacunas = ()=> lacunas;

	const getEtapa = ()=> etapa;

	const ganhou = ()=> {

        return lacunas.length 
            ? !lacunas.some(lacuna => {
                return lacuna == '';
            })
            : false;
    };

    const perdeu =  ()=> sprite.isFinished();

    const ganhouOuPerdeu =  ()=> ganhou() || perdeu();

    const reinicia =  ()=> {

        etapa = 1;
        lacunas = [];
        palavraSecreta = '';
        sprite.reset();
    };

    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
        processaChute,
        ganhou,
        perdeu,
        ganhouOuPerdeu, 
        reinicia
    };
};


//OBS

//Esse Array().fill('')
//lacunas = Array(palavraSecreta.length).fill('');
//É o equivalente a fazer o exemplo de for abaixo

/*	
	for(var i =0; i < palavraSecreta.length;i++){
		lacunas.push("");
	}
*/	

/*
A primeira receberá uma expressão regular criada a partir do chute informado pelo jogador.
Nessa expressão, utilizo o modificador gi.
O modificador g é para realizar uma pesquisa global, isto é,
mesmo que ele faça o match da expressão na primeira letra,
a expressão continuará sendo aplicada até o fim do texto, no caso, 
nosso alvo será palavraSecreta. 
O modificador i é para indicar que não estamos levando em consideração na comparação 
se a letra esta em maiúscula ou minúscula. 
A variável resultado guardará o resultado na nossa expressão regular 
e por fim acertou será um marcador para sabermos se o jogador acertou ou não a letra.
*/

/*
let e const
A partir do ECMASCRIT 2015 (ES6) foi introduzida duas novas sintaxes para substituir declaração de
variáveis com var, são elas let e const. 
Todavia, quais problemas elas vêm resolver?
Vejamos um simples exemplo:

for(var i = 1; i <= 10; i++) {
    console.log(i);
}
console.log(i); // qual será o valor de i?
Outro ponto a destacar de var é que variáveis declaradas com elas podem ser redeclaradas
sem que o interpretador reclame (a não ser que o "use strict"; seja adicionado no script ativando um modo mais criterioso). Vejamos:

var nome = 'teste';
nome = 'Andre';
var nome = 'Lucas'; // é aceito!
Podemos resolver esses dois problemas que acabamos de ver declarando as variáveis com let:

for(let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log(i); // erro, não é acessível fora do bloco fort
let nome = 'teste';
nome = 'Andre';
let nome = 'Lucas'; // erro, não pode declarar novamente uma variável que já foi declarada

const ID = 10;
ID = 100; // erro, não pode atribuir um novo valor
Como não podemos usar o operador = mais de uma vez, somos obrigados a atribuir o valor da variável, ou seja, somos obrigado a declará-la e inicializá-la ou teremos um erro.
*/