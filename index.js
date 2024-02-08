const perguntas = [
    {
      pergunta: "Qual é a função utilizada para exibir mensagens de alerta em JavaScript?",
      respostas: [
        "alert()",
        "message()",
        "print()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
      respostas: [
        "v",
        "var",
        "variable",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual operador é usado para atribuição em JavaScript?",
      respostas: [
        "=",
        "==",
        ":=",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para arredondar para o número inteiro mais próximo em JavaScript?",
      respostas: [
        "round()",
        "ceil()",
        "floor()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para encontrar o maior número em uma lista de números em JavaScript?",
      respostas: [
        "Math.max()",
        "max()",
        "maximum()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual função é usada para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseInteger()",
        "parseInt()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "pop()",
        "remove()",
        "delete()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual evento é acionado quando o usuário clica em um elemento HTML?",
      respostas: [
        "onhover",
        "onmove",
        "onclick",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função que pode ser usada para criar um intervalo de tempo em JavaScript?",
      respostas: [
        "setInterval()",
        "createInterval()",
        "startInterval()",
      ],
      correta: 0
    },
  ];
  
const quiz = document.querySelector('#quiz')
const template = document.querySelector("template")

const corretas = new Set()
const totalPerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas


for(const item of perguntas) {
const quizItem = template.content.cloneNode(true)
quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta

    corretas.delete(item)
    if(estaCorreta) {
        corretas.add(item)
    }

    mostrarTotal.textContent = corretas.size + ' de ' + totalPerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
}
quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem) // coloca a pergunta na tela
}