function passaProximo () {
    elementoAtual.classList.add('carrossel_slide')
    elementoAtual.classList.remove('carrossel_slide_ativo')
    posicao = posicao + 1
    elementoAtual = slides[posicao]
    elementoAtual.classList.add('carossel_slide_ativo')
    elementoAtual.classList.remove('carrossel_slide')
}


let slides = document.querySelectorAll('.carrossel_slide');
let posicao = 0;

let num_slides = slides.length

slides[posicao].classList.remove('carrossel_slide');
slides[posicao].classList.add('carrossel_slide_ativo');


let elementoAtual = slides[posicao];

let botao_proximo = document.querySelector('#botao_proximo');
let botao_anterior = document.querySelector('#botao_anterior');


botao_proximo.onclick = function () {
    passaProximo();
}