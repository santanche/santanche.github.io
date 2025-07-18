---
title: "MC346 - Paradigmas de Programação 2025.2"
classes: wide
permalink: /teaching/paradigms/2025-2/
---


## Eixos de Estudo de Linguagens e Paradigmas

Este curso está organizado em dois eixos de análise.

O primeiro analisa dimensões de abstração e estrutura das linguagens, envolvendo aspectos como: abstrações com dados e processos, modularidade e manutenção de estado e primitivas de primeira ordem. Este eixo segue a linha de [(Abelson et al., 1996)](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html).

O segundo eixo analisa como as linguagens e respectivos paradigmas adotam abstrações e organizam estruturas. Para cada paradigma, serão escolhidas linguagens representativas a partir de indicadores como o [TIOBE](https://www.tiobe.com/tiobe-index/) e estudos como [Top Programming Languages 2024](https://spectrum.ieee.org/top-programming-languages-2024).

## Avaliação

A disciplina será pautada em trabalhos executados em equipe, envolvendo duas linhas:
* A primeira será mais voltada ao primeiro eixo, explorando aspectos que envolvem os paradigmas, usando o Scheme.
* A segunda será voltada ao segundo eixo e linguagens de mercado e relevantes dentro dos paradigmas.

## Programa do Curso

Os tópicos a seguir não estão organizados em ordem cronológica, já que o primeiro e o segundo eixos são trabalhados concomitantemente.

## Fundamentos

* O que é uma linguagem de programação.
* O que é um paradigma.

## Primeiro Eixo - Primitivas e Abstrações da Linguagem

* Abstrações matemáticas da computação:
  * Noções de linguagens formais e a máquina de Turing.
    * Linguagens Turing completas.
  * Cálculo lambda.
  * Tipo abstrato de dados.
* Metalinguística e Meta-programação.
* Primitivas de primeira ordem: funções, classes, objetos e regras.
* Estado, escopo e closure.
* Lazy versus Eager (Strict) evaluation.

## Segundo Eixo - Paradigmas e Linguagens

### Imperativo/Procedural

Principal linguagem neste paradigma: **C++**

Visão geral dos fundamentos na forma de revisão.

### Orientado a Objetos

Principais linguagens neste paradigma: **Java**, **Python** e **JavaScript**

Visão geral dos fundamentos na forma de revisão. A orientação a objetos sob duas perspectivas: forma de abstrair o universo de discurso; abordagem de modularização.

Diferentes abordagens dentro do paradigma:
* Tipagem forte e fraca.
* Relações entre objetos e classes.
* Exemplos em: Java, Python e JavaScript.

### Funcional

Fundamentos de linguagens funcionais e contraste com procedurais: "o que" resolver versus "como" resolver.

Principais linguagens neste paradigma: **Scheme** e **Clojure**

* Funções como primitivas de primeira ordem.
  * Relações com o cálculo lambda.
  * Funções de ordem superior.
* Imutabilidade dos dados.
* Recursividade versus loop.
* Linguagem Scheme:
  * Construindo uma linguagem (meta-programação).
* Funções versus Classes em JavaScript.

### Declarativa e Lógica

Fundamentos de linguagens declarativas e contraste com procedurais e funcionais: espectro "o que" resolver versus "como" resolver.

Principal linguagem neste paradigma: **Prolog**

* Diferentes abordagens declarativas:
  * Queries e regras.
* Computação centrada no conhecimento.
    * Conhecimento e Prolog.
* Fundamentos de Grafos de Conhecimento e Ontologias.
* Solução de problemas por inferência.
* Inferências na biologia.

### Concorrente e Paralelo

Introdução ao princípio de concorrência e paralelismo e seu impacto no clássico fluxo de controle.

Principal linguagem neste paradigma: **Clojure**

* Modelos:
  * Abordagem de threads/memória compartilhada.
    * Clojure e dados persistentes e imutáveis.
  * Abordagem de passagem de mensagens/atores.
    * Passagem de mensagens em Clojure.

### Reativo e Orientado a Eventos

Programação orientada a eventos e fluxos reativos.

Principal linguagem neste paradigma: **JavaScript com React**

* Programação assíncrona e não bloqueante.
* Loop de eventos.
* Promessas e callbacks.



## Referências

Abelson, H., Sussman, G. J., & Sussman, J. (1996). Structure and Interpretation of Computer Programs (2nd ed.). MIT Press. https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html