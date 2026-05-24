// assets/js/acessibilidade.js

// Configuração única e padronizada dos tamanhos para TODO o ecossistema do app
const mapeamentoFontes = {
    'pequeno': { body: '14px', headline: '24px', label: '12px' },
    'medio':   { body: '18px', headline: '28px', label: '16px' },
    'grande':  { body: '22px', headline: '32px', label: '20px' },
    'extra':   { body: '26px', headline: '40px', label: '24px' }
};

// Assim que QUALQUER página carregar, ela roda essa verificação
document.addEventListener("DOMContentLoaded", () => {
    // Pesca no navegador se o idoso já escolheu um tamanho antes
    const tamanhoSalvo = localStorage.getItem('caminho_tamanho_fonte') || 'medio';
    
    // Aplica o tamanho na tela atual e atualiza os botões do modal (se a página tiver o modal)
    sincronizarTamanhoFonte(tamanhoSalvo);
});

// Função central que altera o CSS do Tailwind em tempo de execução
function sincronizarTamanhoFonte(size) {
    const config = mapeamentoFontes[size];
    if (!config) return;

    // 1. Altera os textos de corpo (perguntas, inputs, textareas, resumos)
    document.querySelectorAll('.text-body-md, .text-body-lg, textarea, .font-label-lg').forEach(el => {
        el.style.fontSize = config.body;
    });

    // 2. Altera os títulos grandes e cabeçalhos
    document.querySelectorAll('.text-headline-md, .text-headline-lg-mobile, .text-headline-lg, main h1, main h2').forEach(el => {
        el.style.fontSize = config.headline;
    });

    // 3. Altera legendas e metadados pequenos
    document.querySelectorAll('.text-label-lg, .text-xs, p.text-secondary').forEach(el => {
        el.style.fontSize = config.label;
    });

    // Se a página atual tiver o modal de ajuste (index.html), atualiza o visual dos botões dele
    const botoes = document.querySelectorAll('.size-btn');
    if (botoes.length > 0) {
        botoes.forEach(btn => {
            btn.classList.remove('bg-primary', 'text-on-primary', 'border-primary');
            btn.classList.add('border-outline-variant');
        });

        const activeBtn = document.getElementById(`btn-${size}`);
        if (activeBtn) {
            activeBtn.classList.remove('border-outline-variant');
            activeBtn.classList.add('bg-primary', 'text-on-primary', 'border-primary');
        }
    }

    // Se a página tiver a área de texto de exemplo do modal, atualiza ela também
    const previewText = document.getElementById('preview-text');
    if (previewText) {
        previewText.style.fontSize = config.body;
    }
}

// Essa é a função que o botão do Modal vai chamar ao ser clicado
function setFontSize(size) {
    // 1. Grava de forma permanente no celular do usuário
    localStorage.setItem('caminho_tamanho_fonte', size);
    
    // 2. Aplica imediatamente na tela para ele ver a mudança
    sincronizarTamanhoFonte(size);
}