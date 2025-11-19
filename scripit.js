document.addEventListener('DOMContentLoaded', () => {
    // 1. Referências aos elementos HTML
    const letreiro = document.getElementById('letreiro-animado');
    const botao = document.getElementById('btn-controle');

    // 2. Estado inicial (Opcional, mas útil para clareza)
    let estaRodando = true;

    // 3. Função principal que gerencia o clique
    function alternarAnimacao() {
        if (estaRodando) {
            // Se estiver rodando, pausa a animação
            letreiro.style.animationPlayState = 'paused';
            botao.textContent = 'Retomar'; // Altera o texto do botão
            botao.style.backgroundColor = '#ffc107'; // Altera a cor para Amarelo/Atenção
            estaRodando = false;
        } else {
            // Se estiver pausado, retoma a animação
            letreiro.style.animationPlayState = 'running';
            botao.textContent = 'Pausar'; // Altera o texto do botão
            botao.style.backgroundColor = '#28a745'; // Altera a cor para Verde/Sucesso
            estaRodando = true;
        }
    }

    // 4. Adiciona o ouvinte de evento (event listener) ao botão
    botao.addEventListener('click', alternarAnimacao);

    // Opcional: Controle de velocidade via JS (mantido do exemplo anterior)
    const velocidadeEmSegundos = 15;
    document.documentElement.style.setProperty('--velocidade', `${velocidadeEmSegundos}s`);
});