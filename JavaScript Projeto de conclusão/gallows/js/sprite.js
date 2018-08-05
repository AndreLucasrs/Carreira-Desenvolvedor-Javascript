const createSprite = selector => {

	//essa variavel indica que ele guarda um jquery object
    const $el = $(selector);

    const frames = [
        'frame1', 'frame2', 'frame3', 'frame4', 'frame5',
        'frame6', 'frame7', 'frame8', 'frame9'
    ];

    let current = 0;

    const last = frames.length -1; 

    $el.addClass(frames[current]);  

    const moveFrame = (from, to) => {

        $el.removeClass(from)
            .addClass(to);
    };        

    const hasNext = ()=> current + 1 <= last;

    const nextFrame = ()=> {

    	if(hasNext()){
    		moveFrame(frames[current], frames[++current]);
    	}

    };

    const reset = ()=>{

    	moveFrame(frames[current],frames[0]);
    	current=0;
    };

    	//isso faz que eu quero que ele não tenha um proximo, so vai da verdadeiro quando não tiver mais proximos
    const isFinished = ()=> !hasNext();

    //closure
    // O objeto retornado por createSprite guarda em uma de suas propriedades a função nextFrame() criada internamente em createSprite
    //ele mantem o historico daquilo que vc for usar das funções
    return {
    	nextFrame,
    	reset,
    	isFinished
    };
};

//OBS:
//Quando criarmos uma função através de function declaration,
// mesmo que tenhamos definido a função no meio ou no final do nosso script 
//elas serão sempre içadas para o topo do script. 
//Se declaramos uma função dentro da outra, 
//elas serão içadas para o início da função. 
//Esse procedimento se chamada function hoisting (içamento de função). 
//Vejamos um exemplo menos:

/*
exibeNome();

function exibeNome() {

    alert('André');
}
*/

//Todavia, se mudarmos a declaração do nosso código para function expression ele não funcionará:

/*
exibeNome(); // não funcionará, exibeNome é undefined

var exibeNome = function() {

    alert('André');
}
*/

//Isso acontece porque o JavaScript iça também para o topo as declarações de variáveis,
// mas apenas sua declaração, sem qualquer inicialização.
// Para o interpretador JavaScript seu código ficará estará assim:
/*
var exibeNome; // içou a declaração da variável

exibeNome(); // repare que não há qualquer valor

exibeNome = function() {

    alert('Flávio Almeida');
}
*/