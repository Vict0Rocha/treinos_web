console.log("Ficheiro JavaScript ligado com sucesso!");

// 1. Capturar os elementos da página que vamos usar
const inputDoLink = document.querySelector('#url-input');
const botaoExtrair = document.querySelector('#extrair-inf'); // Corrigido para o seu id
const areaDoResultado = document.querySelector('#result-area');

// 2. Adicionar um "ouvinte de eventos" de clique ao botão
botaoExtrair.addEventListener('click', () => {
    // 1. Ler o valor do campo de input
    const linkDoUsuario = inputDoLink.value;

    // 2. Extrair o ID do vídeo a partir do link
    const partesDoLink = linkDoUsuario.split('v=');
    const idDoVideo = partesDoLink[1];

    // 3. Construir o URL da miniatura usando o ID
    const urlDaThumbnail = `https://img.youtube.com/vi/${idDoVideo}/sddefault.jpg`;

    // 4. Limpar a área de resultado antes de adicionar a nova imagem
    areaDoResultado.innerHTML = '';

    // 5. Criar um novo elemento de imagem
    const novaImagem = document.createElement('img');
    novaImagem.src = urlDaThumbnail; // Define o 'src' da imagem
    novaImagem.alt = "Miniatura do vídeo do YouTube"; // Define o texto alternativo

    // 6. Adicionar a nova imagem à área de resultado na página
    areaDoResultado.appendChild(novaImagem);
});