var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector("#form-adiciona");
	// Extraindo informações do form
	var paciente = obtemPacienteDoFormulario(form);

	var erros = validaPaciente(paciente);

	if(erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}

	adicionaPacienteTabela(paciente);

	form.reset();
	var mensagemErro = document.querySelector("#mensagem-erro");
	mensagemErro.innerHTML = "";

});

function adicionaPacienteTabela(paciente){
	//cria a tr e a td do paciente
	var pacienteTr = montaTr(paciente);
	//adicionando o paciente na tabela
	var tabela = document.querySelector("#tabela-pacientes");

	tabela.appendChild(pacienteTr);

}

function obtemPacienteDoFormulario(form){
	//usar chaves - {}, assim cria um objeto no javaScript
	//e o que tiver dentro é as propriedades do objeto
	var paciente = {
	// Extraindo informações do form
		nome : form.nome.value,
		peso : form.peso.value,
		altura : form.altura.value,
		gordura : form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}
	
	//retorna o objeto Paciente
	return paciente;
}

function montaTr(paciente){

	//cria a tr e a td do paciente
	var pacienteTr = document.createElement("tr");

	//adicionando uma classe css
	pacienteTr.classList.add("paciente");

	//criando td e tr
	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado,classe){
	//criando td
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}

function validaPaciente(paciente){

	var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome não pode ser em branco");
	}

	if(!validaPeso(paciente.peso)){
		erros.push("O peso é inválido");	
	}

	if(!validaAltura(paciente.altura)){
		erros.push("A alutra é inválida");
	}
	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode ser em branco");
	}
	if(paciente.peso.length == 0){
		erros.push("O peso não pode ser em branco");
	}
	if(paciente.altura.length == 0){
		erros.push("A altura não pode ser em branco");
	}

	return erros;
}

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagem-erro");
	ul.innerHTML = ""; 

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}