//1 - crie uma função que exiba uma mensagem no console

 function mensagem(){
    console.log('uma mensagem')
 }
mensagem()
//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome(name){
    console.log(`meu nome é ${name}`)
}
nome('Leandro')
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function dados(nome, idade, estiloMusical){
    console.log(`meu nome é ${nome}, minha idade é ${idade} anos, meu estilo de musica preferido é ${estiloMusical}`)
}
dados('Leandro', '31', 'forró')
//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function info(filme, musica){
    console.log(`meu filme favorito é: ${filme}, minha musica favorita é ${musica}`)
}

info('prety woman', 'prety woman')
//Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function conta(x){
    return x*3
}

console.log(conta(9))