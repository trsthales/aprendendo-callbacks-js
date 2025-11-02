/**
 * ============================================
 * BOAS PRÁTICAS COM CALLBACKS
 * ============================================
 * 
 * Como escrever callbacks de forma limpa e eficiente.
 */

// ============================================
// 1. NOMENCLATURA CLARA
// ============================================

console.log("=== 1. NOMENCLATURA CLARA ===\n");

// ❌ MAL: Nome genérico
function processar(dados, fn) {
    fn(dados);
}

// ✅ BOM: Nome descritivo
function processarPedido(pedido, aoProcessarCallback) {
    console.log("Processando pedido...");
    aoProcessarCallback(pedido);
}

processarPedido({ id: 1, valor: 100 }, (pedido) => {
    console.log(`Pedido ${pedido.id} processado!\n`);
});

// ============================================
// 2. PATTERN ERROR-FIRST CALLBACK
// ============================================

console.log("=== 2. ERROR-FIRST CALLBACK ===\n");

// Convenção do Node.js: erro sempre como primeiro parâmetro
function buscarDados(sucesso, callback) {
    setTimeout(() => {
        if (sucesso) {
            // null para erro, dados no segundo parâmetro
            callback(null, { info: "Dados importantes" });
        } else {
            // Erro no primeiro parâmetro
            callback(new Error("Falha ao buscar"), null);
        }
    }, 500);
}

// Uso correto
buscarDados(true, (erro, dados) => {
    if (erro) {
        console.log("Erro:", erro.message);
        return; // Importante: retornar após tratar erro
    }
    console.log("Sucesso:", dados.info);
});

buscarDados(false, (erro, dados) => {
    if (erro) {
        console.log("Erro:", erro.message);
        return;
    }
    console.log("Sucesso:", dados);
});

// ============================================
// 3. EVITAR CALLBACKS ANINHADOS
// ============================================

console.log("\n=== 3. EVITAR CALLBACKS ANINHADOS ===\n");

function etapa1(callback) {
    setTimeout(() => {
        console.log("Etapa 1");
        callback(null, "Resultado 1");
    }, 500);
}

function etapa2(dados, callback) {
    setTimeout(() => {
        console.log("Etapa 2");
        callback(null, dados + " + Resultado 2");
    }, 500);
}

function etapa3(dados, callback) {
    setTimeout(() => {
        console.log("Etapa 3");
        callback(null, dados + " + Resultado 3");
    }, 500);
}

// ❌ MAL: Muito aninhado
etapa1((erro1, resultado1) => {
    etapa2(resultado1, (erro2, resultado2) => {
        etapa3(resultado2, (erro3, resultado3) => {
            console.log("Final (aninhado):", resultado3);
        });
    });
});

// ✅ BOM: Funções separadas
function processarEtapa1(erro, resultado) {
    if (erro) return console.log("Erro na etapa 1");
    etapa2(resultado, processarEtapa2);
}

function processarEtapa2(erro, resultado) {
    if (erro) return console.log("Erro na etapa 2");
    etapa3(resultado, processarEtapa3);
}

function processarEtapa3(erro, resultado) {
    if (erro) return console.log("Erro na etapa 3");
    console.log("Final (limpo):", resultado);
}

setTimeout(() => {
    etapa1(processarEtapa1);
}, 2000);

// ============================================
// 4. VALIDAÇÃO DE CALLBACKS
// ============================================

console.log("\n=== 4. VALIDAÇÃO DE CALLBACKS ===\n");

function executarComCallback(dados, callback) {
    // Sempre validar se callback é uma função
    if (typeof callback !== 'function') {
        throw new TypeError('Callback deve ser uma função');
    }
    
    // Processar dados
    const resultado = dados * 2;
    
    // Chamar callback
    callback(resultado);
}

try {
    executarComCallback(5, (resultado) => {
        console.log("Resultado:", resultado);
    });
    
    // Isso causará erro
    // executarComCallback(5, "não é função");
} catch (erro) {
    console.log("Erro capturado:", erro.message);
}

// ============================================
// 5. CALLBACK ÚNICO (CALL ONCE)
// ============================================

console.log("\n=== 5. CALLBACK ÚNICO ===\n");

function executarUmaVez(callback) {
    let executado = false;
    
    return function(...args) {
        if (executado) {
            console.log("Callback já foi executado, ignorando...");
            return;
        }
        executado = true;
        callback(...args);
    };
}

const minhaFuncao = executarUmaVez((mensagem) => {
    console.log("Executando:", mensagem);
});

minhaFuncao("Primeira chamada");
minhaFuncao("Segunda chamada"); // Será ignorada
minhaFuncao("Terceira chamada"); // Será ignorada

// ============================================
// 6. TIMEOUT PARA CALLBACKS
// ============================================

console.log("\n=== 6. TIMEOUT PARA CALLBACKS ===\n");

function comTimeout(funcao, limite, callback) {
    let chamado = false;
    
    const timer = setTimeout(() => {
        if (!chamado) {
            chamado = true;
            callback(new Error("Timeout: operação demorou demais"));
        }
    }, limite);
    
    funcao((erro, dados) => {
        if (!chamado) {
            chamado = true;
            clearTimeout(timer);
            callback(erro, dados);
        }
    });
}

// Operação rápida (sucesso)
function operacaoRapida(callback) {
    setTimeout(() => {
        callback(null, "Dados carregados");
    }, 500);
}

comTimeout(operacaoRapida, 1000, (erro, dados) => {
    if (erro) {
        console.log("Erro:", erro.message);
    } else {
        console.log("Sucesso:", dados);
    }
});

// Operação lenta (timeout)
function operacaoLenta(callback) {
    setTimeout(() => {
        callback(null, "Dados carregados");
    }, 2000);
}

setTimeout(() => {
    comTimeout(operacaoLenta, 1000, (erro, dados) => {
        if (erro) {
            console.log("Erro:", erro.message);
        } else {
            console.log("Sucesso:", dados);
        }
    });
}, 1000);

// ============================================
// 7. DOCUMENTAÇÃO DE CALLBACKS
// ============================================

console.log("\n=== 7. DOCUMENTAÇÃO ===\n");

/**
 * Processa um usuário e executa callback ao finalizar
 * 
 * @param {number} userId - ID do usuário
 * @param {Function} callback - Função a ser executada
 * @param {Error|null} callback.erro - Erro se houver
 * @param {Object} callback.usuario - Dados do usuário
 */
function processarUsuario(userId, callback) {
    setTimeout(() => {
        if (userId > 0) {
            callback(null, { id: userId, nome: "João" });
        } else {
            callback(new Error("ID inválido"), null);
        }
    }, 500);
}

processarUsuario(1, (erro, usuario) => {
    if (erro) {
        console.log("Erro:", erro.message);
    } else {
        console.log("Usuário processado:", usuario);
    }
});

console.log("\nBoas práticas aplicadas! ✅");
