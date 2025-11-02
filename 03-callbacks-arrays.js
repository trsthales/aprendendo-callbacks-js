/**
 * ============================================
 * CALLBACKS COM ARRAYS
 * ============================================
 * 
 * JavaScript tem vários métodos de array que usam callbacks
 * para processar elementos.
 */

const numeros = [1, 2, 3, 4, 5];
const produtos = [
    { nome: "Notebook", preco: 3000 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 200 },
    { nome: "Monitor", preco: 800 }
];

// ============================================
// 1. forEach - ITERAR SOBRE ELEMENTOS
// ============================================

console.log("=== 1. forEach ===\n");

numeros.forEach((numero, indice) => {
    console.log(`Índice ${indice}: ${numero}`);
});

console.log("\nProdutos:");
produtos.forEach((produto) => {
    console.log(`${produto.nome}: R$ ${produto.preco}`);
});

// ============================================
// 2. map - TRANSFORMAR ELEMENTOS
// ============================================

console.log("\n=== 2. map ===\n");

const dobrados = numeros.map((numero) => {
    return numero * 2;
});
console.log("Números dobrados:", dobrados);

const nomesProdutos = produtos.map((produto) => {
    return produto.nome;
});
console.log("Nomes dos produtos:", nomesProdutos);

const precosComDesconto = produtos.map((produto) => {
    return {
        ...produto,
        precoComDesconto: produto.preco * 0.9
    };
});
console.log("Preços com 10% desconto:", precosComDesconto);

// ============================================
// 3. filter - FILTRAR ELEMENTOS
// ============================================

console.log("\n=== 3. filter ===\n");

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});
console.log("Números pares:", numerosPares);

const produtosCaros = produtos.filter((produto) => {
    return produto.preco > 100;
});
console.log("Produtos acima de R$ 100:", produtosCaros);

// ============================================
// 4. find - ENCONTRAR ELEMENTO
// ============================================

console.log("\n=== 4. find ===\n");

const primeiroMaiorQue3 = numeros.find((numero) => {
    return numero > 3;
});
console.log("Primeiro número maior que 3:", primeiroMaiorQue3);

const mouse = produtos.find((produto) => {
    return produto.nome === "Mouse";
});
console.log("Produto encontrado:", mouse);

// ============================================
// 5. reduce - ACUMULAR VALORES
// ============================================

console.log("\n=== 5. reduce ===\n");

const soma = numeros.reduce((acumulador, numero) => {
    return acumulador + numero;
}, 0);
console.log("Soma de todos os números:", soma);

const valorTotal = produtos.reduce((total, produto) => {
    return total + produto.preco;
}, 0);
console.log("Valor total dos produtos: R$", valorTotal);

// ============================================
// 6. some - VERIFICAR SE ALGUM SATISFAZ
// ============================================

console.log("\n=== 6. some ===\n");

const temMaiorQue4 = numeros.some((numero) => {
    return numero > 4;
});
console.log("Tem algum número maior que 4?", temMaiorQue4);

const temProdutoBarato = produtos.some((produto) => {
    return produto.preco < 100;
});
console.log("Tem algum produto abaixo de R$ 100?", temProdutoBarato);

// ============================================
// 7. every - VERIFICAR SE TODOS SATISFAZEM
// ============================================

console.log("\n=== 7. every ===\n");

const todosPositivos = numeros.every((numero) => {
    return numero > 0;
});
console.log("Todos os números são positivos?", todosPositivos);

const todosProdutosCaros = produtos.every((produto) => {
    return produto.preco > 1000;
});
console.log("Todos os produtos custam mais de R$ 1000?", todosProdutosCaros);

// ============================================
// 8. sort - ORDENAR COM CALLBACK
// ============================================

console.log("\n=== 8. sort ===\n");

const numerosDesordenados = [5, 2, 8, 1, 9];
numerosDesordenados.sort((a, b) => a - b);
console.log("Números ordenados:", numerosDesordenados);

const produtosOrdenados = [...produtos].sort((a, b) => {
    return a.preco - b.preco;
});
console.log("Produtos ordenados por preço:");
produtosOrdenados.forEach(p => console.log(`${p.nome}: R$ ${p.preco}`));

// ============================================
// 9. ENCADEAMENTO DE MÉTODOS
// ============================================

console.log("\n=== 9. ENCADEAMENTO DE MÉTODOS ===\n");

const resultado = numeros
    .filter(n => n > 2)           // Filtra números maiores que 2
    .map(n => n * 2)               // Dobra cada número
    .reduce((acc, n) => acc + n, 0); // Soma todos

console.log("Resultado do encadeamento:", resultado);

const produtosProcessados = produtos
    .filter(p => p.preco > 100)
    .map(p => ({
        ...p,
        precoFinal: p.preco * 0.85 // 15% desconto
    }))
    .sort((a, b) => b.precoFinal - a.precoFinal);

console.log("Produtos processados:");
console.log(produtosProcessados);
