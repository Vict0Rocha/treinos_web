console.log("Ficheiro JavaScript ligado com sucesso!");

const inputDoLink = document.querySelector('#url-input');
const botaoExtrair = document.querySelector('#extrair-inf');
const areaDoResultado = document.querySelector('#result-area');

botaoExtrair.addEventListener('click', () => {
    const linkDoUsuario = inputDoLink.value;

    // 1. VERIFICAR SE O LINK É VÁLIDO
    if (linkDoUsuario.startsWith('https://www.youtube.com/watch?v=')) {
        // ...dentro do if (linkDoUsuario.startsWith(...)) {
        const partesDoLink = linkDoUsuario.split('v=');
        const idDoVideo = partesDoLink[1];

        const urlDaThumbnail = `https://img.youtube.com/vi/${idDoVideo}/sddefault.jpg`;

        // 1. Limpa qualquer resultado ou erro anterior
        areaDoResultado.innerHTML = '';

        // 2. Cria o elemento principal do card
        const cardDoResultado = document.createElement('div');
        cardDoResultado.className = 'result-card'; // Adiciona uma classe para o CSS

        const novaImagem = document.createElement('img');
        novaImagem.src = urlDaThumbnail;
        novaImagem.alt = "Miniatura do vídeo";


        cardDoResultado.appendChild(novaImagem);
        areaDoResultado.appendChild(cardDoResultado);

        inputDoLink.value = '';
    } else {
        // --- CAMINHO DO ERRO: O link é inválido ---

        console.error("ERRO: Por favor, insira um link válido do YouTube.");

        // Mostra uma mensagem de erro na página para o utilizador
        areaDoResultado.innerHTML = '<p class="error-message">Link inválido! Por favor, cole um link de vídeo do YouTube válido (começando com https://www.youtube.com/watch?v=).</p>';
    }
});