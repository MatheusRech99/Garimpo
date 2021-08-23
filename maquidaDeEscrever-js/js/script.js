function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 100 * i);
    });
}

const titulo = document.querySelector('h1');
typeWriter(titulo);

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }






// var div = document.getElementById('log');
// var textos = ['Ferramentas estratégicas', 'Focada em resultados concretos', 'Ads, design e desenvolvimento web', 'Entre em contato para fecharmos um pacote', '..'];

// function escrever(str, done) {
//     var char = str.split('').reverse();
//     var typer = setInterval(function () {
//         if (!char.length) {
//             clearInterval(typer);
//             return setTimeout(done, 500); // só para esperar um bocadinho
//         }
//         var next = char.pop();
//         div.innerHTML += next;
//     }, 70);
// }

// function limpar(done) {
//     var char = div.innerHTML;
//     var nr = char.length;
//     var typer = setInterval(function () {
//         if (nr-- == 0) {
//             clearInterval(typer);
//             return done();
//         }
//         div.innerHTML = char.slice(0, nr);
//     }, 100);
// }

// function rodape(conteudos, el) {
//     var atual = -1;

//     function prox(cb) {
//         if (atual < conteudos.length - 1) atual++;
//         else atual = 0;
//         var str = conteudos[atual];
//         escrever(str, function () {
//             limpar(prox);
//         });
//     }
//     prox(prox);
// }
// rodape(textos);