---
title: "MC346 - Paradigmas de Programação 2026.1"
classes: wide
permalink: /teaching/paradigms/2026-1/
---

## Visão Geral da Disciplina
<iframe width="560" height="315" src="https://www.youtube.com/embed/gj7iOCpqnh4?si=sblM8KzebHXnNLxC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Playlist da Disciplina 2025
<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=2XO7GhzhbRZcDtEF&amp;list=PL3JRjVnXiTBbNkhPxXZ9pFdOl8aJqVQ9u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Disciplina

[Plano de Desenvolvimento da Disciplina]

## Eixos de Estudo de Linguagens e Paradigmas

Este curso está organizado em dois eixos de análise.

O primeiro analisa dimensões de abstração e estrutura das linguagens, envolvendo aspectos como: abstrações com dados e processos, modularidade e manutenção de estado e primitivas de primeira ordem. Este eixo segue a linha de [(Abelson et al., 1996)](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html).

O segundo eixo analisa como as linguagens e respectivos paradigmas adotam abstrações e organizam estruturas. Para cada paradigma, serão escolhidas linguagens representativas a partir de indicadores como o [TIOBE](https://www.tiobe.com/tiobe-index/) e estudos como [Top Programming Languages 2024](https://spectrum.ieee.org/top-programming-languages-2024).

Linguagens estudadas: C++, Java, Python, Clojure, Prolog, JavaScript, React, ELM e Erlang.

## Avaliação

A disciplina será pautada em pequenos laboratórios práticos e projeto executado em equipe ao longo do curso. Os laboratórios/projeto serão parcialmente desenvolvidos em sala, parcialmente extra-classe.

## Programa do Curso

Os tópicos a seguir não estão organizados em ordem cronológica, já que o primeiro e o segundo eixos são trabalhados concomitantemente.

## Fundamentos

* O que é uma linguagem de programação.
* O que é um paradigma.

## Primeiro Eixo - Primitivas e Abstrações da Linguagem

* Abstrações matemáticas da computação:
  * Noções de linguagens formais e a máquina de Turing.
    * Autômatos finitos, expressões regulares e gramáticas.
    * Linguagens Turing completas.
  * Cálculo lambda.
  * Tipo abstrato de dados.
* Metalinguística e Meta-programação.
* Primitivas de primeira ordem: funções, classes, objetos e regras.
* Estado, escopo e closure.
* Lazy versus Eager (Strict) evaluation.
* Linguagens minimalistas (RISC-like) e maximalistas (CISC-like).

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
* Programação Rápida e Prototipação.
* Exemplos em: Java, Python e JavaScript.

### Declarativas

#### Funcional

Fundamentos de linguagens funcionais e contraste com procedurais: "o que" resolver versus "como" resolver.

Principais linguagens neste paradigma: **Scheme** e **Clojure**

* Funções como primitivas de primeira ordem.
  * Relações com o cálculo lambda.
  * Funções de ordem superior.
* Imutabilidade dos dados.
* Recursividade versus loop.
* Linguagem Scheme:
  * Abordagem minimalista do Scheme versus maximalista do JavaScript.
  * Construindo uma linguagem (meta-programação).
* Funções versus Classes em JavaScript.

#### Lógica

Fundamentos de linguagens declarativas e contraste com procedurais e funcionais: espectro "o que" resolver versus "como" resolver.

Principais linguagens neste paradigma: **Prolog** e **RDF**

* Diferentes abordagens declarativas:
  * Queries e regras.
* Computação centrada no conhecimento.
    * Conhecimento e Prolog.
* Fundamentos de Grafos de Conhecimento e Ontologias.
* Solução de problemas por inferência.
* Inferências na biologia.

### Concorrente e Paralelo

Introdução ao princípio de concorrência e paralelismo e seu impacto no clássico fluxo de controle.

Principais linguagens neste paradigma: **Erlang** e **Clojure**

* Modelos:
  * Abordagem de threads/memória compartilhada.
    * Clojure e dados persistentes e imutáveis.
  * Abordagem de passagem de mensagens/atores.
    * Passagem de mensagens em Erlang e Clojure.

### Reativo e Orientado a Eventos

Programação orientada a eventos e fluxos reativos.

Principal linguagem neste paradigma: **ELM** e **JavaScript com React**

* Programação assíncrona e não bloqueante.
* Loop de eventos.
* Promessas e callbacks.
* Passagem de mensagens em ELM

## Referências

Abelson, H., Sussman, G. J., & Sussman, J. (1996). Structure and Interpretation of Computer Programs (2nd ed.). MIT Press. [online](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/index.html)

Dybvig, R. K. (2009). The Scheme Programming Language (4th ed.). MIT Press. [online](https://www.scheme.com/tspl4/)

Kiczales, G., des Rivieres, J., & Bobrow, D. G. (1991). The Art of the Metaobject Protocol. In The Art of the Metaobject Protocol. The MIT Press. [online](https://doi.org/10.7551/MITPRESS/1405.001.0001)

Meyer, Bertrand (2000). Object-Oriented Software Construction, 2a edição. Prentice Hall.