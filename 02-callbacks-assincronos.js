/**
 * ============================================
 * CALLBACKS ASSÍNCRONOS
 * ============================================
 * 
 * Callbacks assíncronos são executados após uma operação
 * que leva tempo (como requisições, timers, leitura de arquivos).
 */

// ============================================
// 1. setTimeout - TIMER BÁSICO
// ============================================

console.log("=== 1. setTimeout ===\n");

console.log("Início");

setTimeout(() => {
    console.log("Executado após 2 segundos");
}, 2000);

console.log("Fim (executado antes do callback!)\n");

// ============================================
// 2. SIMULANDO OPERAÇÃO ASSÍNCRONA
// ============================================

console.log("=== 2. SIMULANDO OPERAÇÃO ASSÍNCRONA ===\n");

function buscarUsuario(id, callback) {
    console.log(`Buscando usuário ${id}...`);
    
    // Simula delay de uma requisição
    setTimeout(() => {
        const usuario = {
            id: id,
            nome: "Maria Silva",
            email: "maria@email.com"
        };
        callback(usuario);
    }, 1500);
}

buscarUsuario(1, (usuario) => {
    console.log("Usuário encontrado:");
    console.log(usuario);
    console.log();
});

// ============================================
// 3. CALLBACKS COM TRATAMENTO DE ERRO
// ============================================

console.log("=== 3. CALLBACKS COM TRATAMENTO DE ERRO ===\n");

function buscarDados(sucesso, callback) {
    setTimeout(() => {
        if (sucesso) {
            callback(null, { dados: "Informações importantes" });
        } else {
            callback(new Error("Falha ao buscar dados"), null);
        }
    }, 1000);
}

// Caso de sucesso
buscarDados(true, (erro, dados) => {
    if (erro) {
        console.log("Erro:", erro.message);
    } else {
        console.log("Sucesso:", dados);
    }
});

// Caso de erro
buscarDados(false, (erro, dados) => {
    if (erro) {
        console.log("Erro:", erro.message);
    } else {
        console.log("Sucesso:", dados);
    }
});

// ============================================
// 4. MÚLTIPLOS CALLBACKS SEQUENCIAIS
// ============================================

console.log("\n=== 4. MÚLTIPLOS CALLBACKS SEQUENCIAIS ===\n");

function etapa1(callback) {
    setTimeout(() => {
        console.log("Etapa 1 concluída");
        callback("Dados da etapa 1");
    }, 1000);
}

function etapa2(dadosAnteriores, callback) {
    setTimeout(() => {
        console.log("Etapa 2 concluída");
        callback(`${dadosAnteriores} + Dados da etapa 2`);
    }, 1000);
}

function etapa3(dadosAnteriores, callback) {
    setTimeout(() => {
        console.log("Etapa 3 concluída");
        callback(`${dadosAnteriores} + Dados da etapa 3`);
    }, 1000);
}

// Executando em sequência
etapa1((dados1) => {
    etapa2(dados1, (dados2) => {
        etapa3(dados2, (dados3) => {
            console.log("Resultado final:", dados3);
        });
    });
});

// ============================================
// 5. setInterval - EXECUÇÃO REPETIDA
// ============================================

setTimeout(() => {
    console.log("\n=== 5. setInterval ===\n");
    
    let contador = 0;
    const intervalo = setInterval(() => {
        contador++;
        console.log(`Executado ${contador} vez(es)`);
        
        if (contador === 3) {
            clearInterval(intervalo);
            console.log("Intervalo cancelado!\n");
        }
    }, 1000);
}, 5000);
