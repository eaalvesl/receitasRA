document.addEventListener('DOMContentLoaded', () => {
    // 1. Referências aos Elementos
    const letreiro = document.getElementById('letreiro-animado');
    const botaoControle = document.getElementById('btn-controle');
    const botaoAtualizar = document.getElementById('btn-atualizar');
    const inputTexto = document.getElementById('input-texto');
    
    // 2. Variável de Estado
    let estaRodando = true;

    // 3. Inicializa o Letreiro
    // Define o texto inicial do letreiro com o valor do input (para sincronizar)
    letreiro.textContent = inputTexto.value;

    // --- FUNÇÕES DE CONTROLE ---

    // Função para Pausar/Retomar
    function alternarAnimacao() {
        if (estaRodando) {
            // Pausar
            letreiro.style.animationPlayState = 'paused';
            botaoControle.textContent = 'Retomar'; 
            botaoControle.style.backgroundColor = '#ffc107'; // Amarelo
            estaRodando = false;
        } else {
            // Retomar
            letreiro.style.animationPlayState = 'running';
            botaoControle.textContent = 'Pausar'; 
            botaoControle.style.backgroundColor = '#28a745'; // Verde
            estaRodando = true;
        }
    }

    // Função para Atualizar o Texto
    function atualizarTexto() {
        const novoTexto = inputTexto.value.trim();
        
        if (novoTexto === "") {
            alert("Por favor, digite um texto para o letreiro.");
            return;
        }

        // 1. Pausa a animação brevemente
        const estadoAnterior = letreiro.style.animationPlayState;
        letreiro.style.animationPlayState = 'paused';
        
        // 2. Atualiza o conteúdo do texto
        letreiro.textContent = novoTexto;
        
        // 3. Reinicia a animação (resetando a posição)
        // O navegador precisa ser forçado a recalcular o layout para a animação recomeçar
        letreiro.style.animation = 'none';
        void letreiro.offsetWidth; // Truque para forçar o reflow
        letreiro.style.animation = null; // Remove a instrução 'none'

        // 4. Retorna ao estado anterior (rodando ou pausado)
        letreiro.style.animationPlayState = estadoAnterior;

        // Atualiza a variável de estado para refletir o que o CSS está fazendo
        if (estadoAnterior === 'paused') {
            estaRodando = false;
        } else {
            estaRodando = true;
        }
    }

    // --- LISTENERS ---
    
    // Evento de clique para Pausar/Retomar
    botaoControle.addEventListener('click', alternarAnimacao);

    // Evento de clique para Atualizar o Texto
    botaoAtualizar.addEventListener('click', atualizarTexto);
    
    // Opcional: Atualizar o texto também ao pressionar Enter no campo
    inputTexto.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            atualizarTexto();
        }
    });
});