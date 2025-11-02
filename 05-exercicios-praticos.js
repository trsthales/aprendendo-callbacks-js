/**
 * ============================================
 * EXERCÍCIOS PRÁTICOS COM CALLBACKS
 * ============================================
 * 
 * Pratique seus conhecimentos sobre callbacks!
 */

// ============================================
// EXERCÍCIO 1: Calculadora com Callbacks
// ============================================

console.log("=== EXERCÍCIO 1: Calculadora ===\n");

function calculadora(a, b, operacao) {
    return operacao(a, b);
}

const somar = (x, y) => x + y;
const subtrair = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => y !== 0 ? x / y : "Erro: divisão por zero";

console.log("10 + 5 =", calculadora(10, 5, somar));
console.log("10 - 5 =", calculadora(10, 5, subtrair));
console.log("10 * 5 =", calculadora(10, 5, multiplicar));
console.log("10 / 5 =", calculadora(10, 5, dividir));
console.log("10 / 0 =", calculadora(10, 0, dividir));

// ============================================
// EXERCÍCIO 2: Processar Array de Strings
// ============================================

console.log("\n=== EXERCÍCIO 2: Processar Strings ===\n");

const nomes = ["joão", "maria", "pedro", "ana"];

function processarNomes(array, transformacao) {
    return array.map(transformacao);
}

const emMaiusculas = processarNomes(nomes, (nome) => nome.toUpperCase());
console.log("Maiúsculas:", emMaiusculas);

const primeiraLetraMaiuscula = processarNomes(nomes, (nome) => {
    return nome.charAt(0).toUpperCase() + nome.slice(1);
});
console.log("Capitalizados:", primeiraLetraMaiuscula);

const comTamanho = processarNomes(nomes, (nome) => {
    return `${nome} (${nome.length} letras)`;
});
console.log("Com tamanho:", comTamanho);

// ============================================
// EXERCÍCIO 3: Sistema de Notificações
// ============================================

console.log("\n=== EXERCÍCIO 3: Sistema de Notificações ===\n");

function sistemaNotificacao() {
    const listeners = [];
    
    return {
        registrar: function(callback) {
            listeners.push(callback);
            console.log(`Listener registrado (total: ${listeners.length})`);
        },
        
        notificar: function(mensagem) {
            console.log(`\nNotificando ${listeners.length} listener(s)...`);
            listeners.forEach((callback, index) => {
                callback(mensagem, index);
            });
        }
    };
}

const sistema = sistemaNotificacao();

sistema.registrar((msg, id) => {
    console.log(`[Email ${id}] Enviando: ${msg}`);
});

sistema.registrar((msg, id) => {
    console.log(`[SMS ${id}] Enviando: ${msg}`);
});

sistema.registrar((msg, id) => {
    console.log(`[Push ${id}] Enviando: ${msg}`);
});

sistema.notificar("Novo pedido recebido!");

// ============================================
// EXERCÍCIO 4: Filtro Customizado
// ============================================

console.log("\n=== EXERCÍCIO 4: Filtro Customizado ===\n");

const produtos = [
    { nome: "Notebook", preco: 3000, categoria: "Eletrônicos" },
    { nome: "Mouse", preco: 50, categoria: "Eletrônicos" },
    { nome: "Cadeira", preco: 800, categoria: "Móveis" },
    { nome: "Mesa", preco: 1200, categoria: "Móveis" },
    { nome: "Teclado", preco: 200, categoria: "Eletrônicos" }
];

function filtrarProdutos(array, criterio) {
    return array.filter(criterio);
}

const eletronicos = filtrarProdutos(produtos, (p) => p.categoria === "Eletrônicos");
console.log("Eletrônicos:", eletronicos.map(p => p.nome));

const caros = filtrarProdutos(produtos, (p) => p.preco > 500);
console.log("Produtos caros:", caros.map(p => p.nome));

const baratos = filtrarProdutos(produtos, (p) => p.preco < 100);
console.log("Produtos baratos:", baratos.map(p => p.nome));

// ============================================
// EXERCÍCIO 5: Temporizador com Callback
// ============================================

console.log("\n=== EXERCÍCIO 5: Temporizador ===\n");

function contarRegressiva(segundos, callback, aoFinalizar) {
    console.log(`Iniciando contagem de ${segundos} segundos...`);
    let contador = segundos;
    
    const intervalo = setInterval(() => {
        callback(contador);
        contador--;
        
        if (contador < 0) {
            clearInterval(intervalo);
            aoFinalizar();
        }
    }, 1000);
}

contarRegressiva(
    5,
    (tempo) => console.log(`⏰ ${tempo}...`),
    () => console.log("🎉 Tempo esgotado!\n")
);

// ============================================
// EXERCÍCIO 6: Validador com Callbacks
// ============================================

setTimeout(() => {
    console.log("=== EXERCÍCIO 6: Validador ===\n");
    
    function validarDados(dados, regras, callback) {
        const erros = [];
        
        regras.forEach(regra => {
            if (!regra.validar(dados)) {
                erros.push(regra.mensagem);
            }
        });
        
        if (erros.length > 0) {
            callback(erros, null);
        } else {
            callback(null, "Dados válidos!");
        }
    }
    
    const usuario = {
        nome: "João",
        email: "joao@email.com",
        idade: 25
    };
    
    const regrasValidacao = [
        {
            validar: (dados) => dados.nome && dados.nome.length > 2,
            mensagem: "Nome deve ter mais de 2 caracteres"
        },
        {
            validar: (dados) => dados.email && dados.email.includes("@"),
            mensagem: "Email deve conter @"
        },
        {
            validar: (dados) => dados.idade && dados.idade >= 18,
            mensagem: "Idade deve ser maior que 18"
        }
    ];
    
    validarDados(usuario, regrasValidacao, (erros, sucesso) => {
        if (erros) {
            console.log("❌ Erros de validação:");
            erros.forEach(erro => console.log(`  - ${erro}`));
        } else {
            console.log("✅", sucesso);
        }
    });
    
    // Teste com dados inválidos
    const usuarioInvalido = {
        nome: "Jo",
        email: "email-sem-arroba",
        idade: 15
    };
    
    validarDados(usuarioInvalido, regrasValidacao, (erros, sucesso) => {
        if (erros) {
            console.log("\n❌ Erros de validação (dados inválidos):");
            erros.forEach(erro => console.log(`  - ${erro}`));
        } else {
            console.log("✅", sucesso);
        }
    });
}, 7000);

// ============================================
// EXERCÍCIO 7: Pipeline de Transformações
// ============================================

setTimeout(() => {
    console.log("\n=== EXERCÍCIO 7: Pipeline ===\n");
    
    function pipeline(valor, ...transformacoes) {
        return transformacoes.reduce((resultado, transformacao) => {
            return transformacao(resultado);
        }, valor);
    }
    
    const resultado = pipeline(
        5,
        (n) => n * 2,           // 10
        (n) => n + 3,           // 13
        (n) => n * n,           // 169
        (n) => Math.sqrt(n)     // 13
    );
    
    console.log("Resultado do pipeline:", resultado);
    
    const textoProcessado = pipeline(
        "  olá mundo  ",
        (s) => s.trim(),
        (s) => s.toUpperCase(),
        (s) => s.replace(" ", "_"),
        (s) => `[${s}]`
    );
    
    console.log("Texto processado:", textoProcessado);
}, 9000);

// ============================================
// EXERCÍCIO 8: Retry com Callback
// ============================================

setTimeout(() => {
    console.log("\n=== EXERCÍCIO 8: Retry ===\n");
    
    function tentarComRetry(operacao, tentativas, callback) {
        let tentativa = 1;
        
        function executar() {
            console.log(`Tentativa ${tentativa}/${tentativas}...`);
            
            operacao((erro, resultado) => {
                if (erro && tentativa < tentativas) {
                    tentativa++;
                    setTimeout(executar, 1000);
                } else {
                    callback(erro, resultado);
                }
            });
        }
        
        executar();
    }
    
    // Operação que falha 2 vezes e depois funciona
    let contador = 0;
    function operacaoInstavel(callback) {
        contador++;
        if (contador < 3) {
            callback(new Error("Falha temporária"), null);
        } else {
            callback(null, "Sucesso!");
        }
    }
    
    tentarComRetry(operacaoInstavel, 5, (erro, resultado) => {
        if (erro) {
            console.log("❌ Falhou após todas as tentativas:", erro.message);
        } else {
            console.log("✅ Sucesso:", resultado);
        }
    });
}, 11000);

console.log("\n⏳ Aguardando exercícios assíncronos...");
