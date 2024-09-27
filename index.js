/*
1.

const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

no primeiro console vai imprimir o primeiro ator do elenco que é "Matheus Nachtergael".
no segundo console ele vai proicurar no elenco dentro do filme, imprimir o tamanho da string e ao dizer o tamanho vai diminuir o rersultado pos tem o número "-1"
no terceiro console ele vai imprimir dentro do filme, onde é a transmissão de hoje, no caso onde vai ser transmitido será na "Globo" ás 14h. 
*/

/*
2.

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

no primeiro console vai imprimir o nome do animal que é Juca.
no segundo console mudará o nome original para Juba.
no terceiro console mudará o nome do animal para Juco.
*/

/*
3.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

no primeiro console ele vai buscar dentro da função, o objeto com a propriedade "backender" e vai dar false, pois é o que foi definido como valor dela.
no segundo console ele vai buscar imprimir uma propriedade que não existe e dará erro, dando indefinido já que não foi definido essa propriedade.
*/


//1.

const pessoa = {
    nome: "Milena",
    apelidos: ["Mi", "Mimi", "Mica"]
}

function nomesApelidos(pessoa) {
    console.log(`Meu nome é, ${pessoa.nome}, mas também me chamam de, ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}, ou, ${pessoa.apelidos[2]}`)
}

nomesApelidos(pessoa)

const pessoaApelido = {
    ...pessoa ,
     apelidos : ["aaa" , "bbb" , "ccc"]
}

function novosApelidos(pessoaApelido) {
    console.log(pessoaApelido)
}

novosApelidos(pessoaApelido)

//2.

const dados = {
    nome: "Fernanda", 
    idade: 19, 
    profissão: "Nutricionista"
  }
  const dadosPessoais = {
    nome: "Felipe", 
    idade: 21, 
    profissão: "Programador"
  }

function dadosPessoa01(dadosadq) {
 const sobrePessoa01 = [ dadosadq.nome , dadosadq.nome.lenght , dadosadq.idade , dadosadq.profissão , dadosadq.profissão.lenght ]
 return sobrePessoa01
}

console.log(dadosPessoa01(dados))
console.log(dadosPessoa01(dadosPessoais))