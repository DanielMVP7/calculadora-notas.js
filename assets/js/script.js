const mediaEl = document.getElementById('media-escola');
const primeiroBimEl = document.getElementById('primeiro-bim');
const segundoBimEl = document.getElementById('segundo-bim');
const terceiroBimEl = document.getElementById('terceiro-bim');
const quartoBimEl = document.getElementById('quarto-bim');
const calcularBtn = document.getElementById('calcular')
const limparBtn = document.getElementById('limpar');
const suaMediaEl = document.getElementById('sua-media');
const msgEl = document.getElementById('msg');

calcularBtn.addEventListener("click", () => {
    const notaUm = parseFloat(primeiroBimEl.value);
    const notaDois = parseFloat(segundoBimEl.value);
    const notaTres = parseFloat(terceiroBimEl.value);
    const notaQuatro = parseFloat(quartoBimEl.value);

    const media = calcularMedia(notaUm, notaDois, notaTres, notaQuatro);
    const situacaoFinal = verificar(media);

    suaMediaEl.textContent = media.replace('.', ',');
    msgEl.textContent = situacaoFinal;

});

limparBtn.addEventListener('click', () => {
    mediaEl.value = '';
    primeiroBimEl.value = '';
    segundoBimEl.value = '';
    terceiroBimEl.value = '';
    quartoBimEl.value = '';
});

function calcularMedia(notaUm, notaDois, notaTres, notaQuatro) {
    return ((notaUm + notaDois + notaTres + notaQuatro) / 4).toFixed(2);
}

function verificar(media) {
    const mediaEscola = parseFloat(mediaEl.value);

    if(media >= mediaEscola) {
        return 'Parabéns, você está aprovado!';
    } else {
        return 'Infelizmente você reprovou.';
    }
}