/**
 * ============================================
 * CALLBACKS EM JAVASCRIPT - INTRODUÇÃO
 * ============================================
 * 
 * Um callback é uma função passada como argumento para outra função,
 * que será executada depois que alguma operação for concluída.
 */

// ============================================
// 1. CONCEITO BÁSICO
// ============================================

console.log("=== 1. CONCEITO BÁSICO ===\n");

// Exemplo simples: função que recebe um callback
function cumprimentar(nome, callback) {
    console.log(`Olá, ${nome}!`);
    callback();
}

// Passando uma função como callback
cumprimentar("João", function() {
    console.log("Callback executado!");
});

// ============================================
// 2. CALLBACKS COM PARÂMETROS
// ============================================

console.log("=== 2. CALLBACKS COM PARÂMETROS ===\n");

function processarNumero(numero, callback) {
    const resultado = numero * 2;
    callback(resultado);
}

processarNumero(5, function(resultado) {
    console.log(`O resultado é: ${resultado}\n`);
});

// ============================================
// 3. CALLBACKS SÍNCRONOS
// ============================================

console.log("=== 3. CALLBACKS SÍNCRONOS ===\n");

function calcular(a, b, operacao) {
    return operacao(a, b);
}

// Diferentes operações usando callbacks
const soma = calcular(5, 3, function(x, y) {
    return x + y;
});

const multiplicacao = calcular(5, 3, function(x, y) {
    return x * y;
});

console.log(`Soma: ${soma}`);
console.log(`Multiplicação: ${multiplicacao}\n`);

// ============================================
// 4. ARROW FUNCTIONS COMO CALLBACKS
// ============================================

console.log("=== 4. ARROW FUNCTIONS COMO CALLBACKS ===\n");

function executar(callback) {
    callback();
}

// Callback tradicional
executar(function() {
    console.log("Callback tradicional");
});

// Callback com arrow function
executar(() => {
    console.log("Callback com arrow function\n");
});

// ============================================
// 5. CALLBACKS NOMEADOS vs ANÔNIMOS
// ============================================

console.log("=== 5. CALLBACKS NOMEADOS vs ANÔNIMOS ===\n");

// Callback anônimo
setTimeout(function() {
    console.log("Callback anônimo");
}, 100);

// Callback nomeado
function minhaFuncao() {
    console.log("Callback nomeado");
}

setTimeout(minhaFuncao, 200);
