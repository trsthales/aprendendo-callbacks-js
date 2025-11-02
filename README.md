# 📚 Guia Completo de Callbacks em JavaScript

Bem-vindo ao guia completo para aprender callbacks em JavaScript! Este material foi criado para você dominar este conceito fundamental.

**Cada arquivo tem:**

✅ Explicações detalhadas  
✅ Exemplos práticos  
✅ Comentários em português  
✅ Output no console para você ver funcionando

### 💎 Destaques do Material:

- **Teoria + Prática** combinados
- **Do básico ao avançado** progressivamente
- **Exercícios práticos** para fixação
- **Boas práticas profissionais**

## 💡 Dicas Importantes

### 📖 Explore o código
Cada arquivo tem **comentários explicativos** detalhados em português. Leia os comentários antes de executar para entender o que está acontecendo.

### 🔧 DevTools é seu amigo
Use as ferramentas de desenvolvedor do navegador (F12):
- **Console**: Para ver os outputs e testar código
- **Debugger**: Para pausar e analisar execução
- **Sources**: Para adicionar breakpoints

### ✏️ Pratique
Faça os **exercícios** do arquivo `05-exercicios-praticos.js`. A prática é essencial para fixar o conhecimento!

## 📂 Estrutura dos Arquivos

### 1️⃣ **01-introducao-callbacks.js**
- Conceito básico de callbacks
- Callbacks com parâmetros
- Callbacks síncronos
- Arrow functions como callbacks
- Callbacks nomeados vs anônimos

### 2️⃣ **02-callbacks-assincronos.js**
- setTimeout e setInterval
- Simulação de operações assíncronas
- Tratamento de erros em callbacks
- Callbacks sequenciais
- Múltiplos callbacks

### 3️⃣ **03-callbacks-arrays.js**
- forEach - Iterar elementos
- map - Transformar elementos
- filter - Filtrar elementos
- find - Encontrar elemento
- reduce - Acumular valores
- some - Verificar condições
- every - Verificar todas condições
- sort - Ordenar
- Encadeamento de métodos

### 5️⃣ **04-praticas-callbacks.js**
- Nomenclatura clara
- Error-first callback pattern
- Evitar callbacks aninhados
- Validação de callbacks
- Callback único (call once)
- Timeout para callbacks
- Documentação adequada

### 6️⃣ **05-exercicios-praticos.js**
- Calculadora com callbacks
- Processamento de strings
- Sistema de notificações
- Filtros customizados
- Temporizadores
- Validadores
- Pipeline de transformações
- Retry com callbacks

## 🚀 Como Usar Este Material

### Ordem Recomendada de Estudo:

1. **Comece pelo básico**: `01-introducao-callbacks.js`
2. **Entenda assincronicidade**: `02-callbacks-assincronos.js`
3. **Domine arrays**: `03-callbacks-arrays.js`
4. **Boas práticas**: `04-praticas-callbacks.js`
5. **Pratique**: `05-exercicios-praticos.js`

### Para Executar os Arquivos:

#### 🟢 **Opção 1: Node.js (Recomendado)**

Se você tem Node.js instalado:

```bash
# Execute cada arquivo individualmente
node 01-introducao-callbacks.js
node 02-callbacks-assincronos.js
node 03-callbacks-arrays.js
# ... e assim por diante
```

**Não tem Node.js?** [Baixe aqui gratuitamente](https://nodejs.org/)

#### 🌐 **Opção 2: Navegador (Chrome, Firefox, Edge)**

1. Abra o arquivo `.js` no VS Code ou editor de texto
2. Copie todo o código
3. Abra o **Console do Navegador**:
   - **Chrome/Edge**: Pressione `F12` ou `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
   - **Firefox**: Pressione `F12` ou `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
4. Cole o código e pressione `Enter`

#### 📄 **Opção 3: HTML + Browser**

Crie um arquivo `index.html` e adicione:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Estudando Callbacks</title>
</head>
<body>
    <h1>Abra o Console (F12) para ver o resultado</h1>
    
    <!-- Altere o src para o arquivo que quer executar -->
    <script src="01-introducao-callbacks.js"></script>
</body>
</html>
```

Depois abra o `index.html` no navegador e veja o console (F12).

#### 💻 **Opção 4: Ferramentas Online**

Execute sem instalar nada:

- [JSFiddle](https://jsfiddle.net/) - Cole o código e clique em "Run"
- [CodePen](https://codepen.io/) - Cole no painel JS
- [JS Bin](https://jsbin.com/) - Cole e execute
- [Replit](https://replit.com/) - Execute Node.js online
- [StackBlitz](https://stackblitz.com/) - Ambiente completo no navegador

#### 📱 **Opção 5: Apps Mobile**

Para estudar no celular:

- **Android**: [Spck Editor](https://play.google.com/store/apps/details?id=io.spck), [Dcoder](https://play.google.com/store/apps/details?id=com.paprbit.dcoder)
- **iOS**: [Runjs](https://apps.apple.com/us/app/runjs/id1443949860), [Scriptable](https://apps.apple.com/us/app/scriptable/id1405459188)

**Bons estudos! Com esse material você vai dominar callbacks definitivamente! 🎯**

## 💡 Conceitos Importantes

### O que é um Callback?

Um **callback** é uma função passada como argumento para outra função, que será executada posteriormente (após alguma operação ser concluída).

```javascript
function cumprimentar(nome, callback) {
    console.log(`Olá, ${nome}!`);
    callback();
}

cumprimentar("João", function() {
    console.log("Callback executado!");
});
```

### Tipos de Callbacks

1. **Síncronos**: Executados imediatamente
   ```javascript
   [1, 2, 3].forEach(num => console.log(num));
   ```

2. **Assíncronos**: Executados após operação completar
   ```javascript
   setTimeout(() => console.log("Depois"), 1000);
   ```

### Error-First Callback Pattern

Convenção do Node.js onde o primeiro parâmetro é sempre o erro:

```javascript
function buscarDados(callback) {
    if (sucesso) {
        callback(null, dados);  // null = sem erro
    } else {
        callback(new Error("Falha"), null);
    }
}
```

## 🎯 Principais Métodos de Array com Callbacks

| Método | Descrição | Retorna |
|--------|-----------|---------|
| `forEach()` | Itera sobre elementos | undefined |
| `map()` | Transforma elementos | novo array |
| `filter()` | Filtra elementos | novo array |
| `find()` | Encontra elemento | elemento ou undefined |
| `reduce()` | Acumula valores | valor único |
| `some()` | Verifica se algum satisfaz | boolean |
| `every()` | Verifica se todos satisfazem | boolean |
| `sort()` | Ordena elementos | array ordenado |


## 📖 Recursos Adicionais

### Documentação Oficial:
- [MDN - Callback function](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [MDN - Array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Próximos Passos:
Após dominar callbacks, estude:
- **Promises** - Alternativa mais moderna
- **Async/Await** - Forma mais limpa de código assíncrono
- **Event Loop** - Como JavaScript gerencia assincronicidade

## ✅ Checklist de Aprendizado

- [ ] Entendo o que é um callback
- [ ] Sei diferenciar callbacks síncronos e assíncronos
- [ ] Conheço os métodos de array com callbacks
- [ ] Conheço as boas práticas
- [ ] Entendo error-first callback pattern
- [ ] Pratiquei os exercícios


## 🤝 Dicas Finais

1. **Pratique muito**: Execute os exemplos e modifique-os
2. **Experimente**: Crie seus próprios exemplos
3. **Leia código**: Veja como outros usam callbacks
4. **Evolua**: Após dominar, aprenda Promises e Async/Await
5. **Não desista**: Callbacks podem parecer confusos no início, mas com prática ficam naturais!

---

**Bons estudos! 🚀**

Se tiver dúvidas, revise os exemplos e pratique os exercícios.
