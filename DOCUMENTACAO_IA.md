
# Documentação do Uso de Inteligência Artificial

## 1. Objetivo

Este documento registra como a inteligência artificial foi utilizada
no desenvolvimento do Sistema de Gerenciamento de Estoque.

A IA auxiliou na configuração do ambiente, na implementação do sistema,
na resolução de problemas e nos testes das funcionalidades.

## 2. Ferramenta utilizada

- Ferramenta: ChatGPT (OpenAI)
- Linguagens: JavaScript, JSX, CSS e SQL por meio do Prisma
- Finalidade: Apoio ao desenvolvimento e explicação dos códigos

## 3. Tecnologias do projeto

- Frontend: React com Vite
- Backend: Node.js e Express
- Banco de dados: PostgreSQL 16
- ORM: Prisma
- Containerização: Docker Compose
- Versionamento: Git e GitHub

## 4. Registro da utilização da IA

A tabela abaixo resume as orientações utilizadas durante o projeto.
Os prompts estão resumidos e deverão ser complementados com as
mensagens literais da conversa para atender à exigência do professor.

| Requisito | Solicitação à IA (resumo) | Refinamentos | Decisão de engenharia | Critério de aceitação |
|---|---|---|---|---|
| Configuração inicial | Orientação para configurar Node.js, Git e Docker | Testes das ferramentas | Node.js 24 | Ferramentas funcionando |
| Backend | Orientação para configurar Express | Testes no navegador | API REST com Express | Servidor acessível na porta 3000 |
| Banco de dados | Orientação para configurar PostgreSQL | Testes de conexão | PostgreSQL 16 no Docker | Banco acessível |
| Prisma | Orientação para integrar Prisma ao PostgreSQL | Ajuste do schema | Prisma ORM | Tabela Produto criada |
| Cadastro | Orientação para criar cadastro de produtos | Testes com produtos reais | Rota POST | Produto salvo no banco |
| Listagem | Orientação para listar produtos | Integração com React | Rota GET | Produtos exibidos na tabela |
| Edição | Orientação para editar produtos | Testes dos campos | Rota PUT | Dados atualizados |
| Exclusão | Orientação para excluir produtos | Confirmação de exclusão | Rota DELETE | Produto removido |
| Pesquisa | Orientação para pesquisar pelo nome | Filtragem em tempo real | Filtro no React | Pesquisa funcionando |
| Estoque baixo | Orientação para destacar estoque baixo | Testes com diferentes quantidades | Limite de 5 unidades | Aviso vermelho exibido |
| Painel de resumo | Orientação para criar indicadores | Cálculo dos totais | React | Indicadores atualizados |

## 5. Problemas encontrados e soluções

### Problema 1 — Estilos da interface

O título da página apresentava letras sobrepostas.

Solução: ajustar os arquivos index.css e App.css,
removendo conflitos com os estilos iniciais do Vite.

### Problema 2 — Produtos não apareciam na tabela

O React exibia apenas o texto indicando onde a lista apareceria.

Solução: implementar a busca dos produtos com fetch,
armazenar os resultados no estado e renderizar a tabela.

### Problema 3 — Configuração do Prisma

O Prisma foi inicializado com uma configuração de gerador
diferente da utilizada no projeto.

Solução: configurar o gerador prisma-client-js.

### Problema 4 — Banco sem tabelas

O comando prisma db pull retornou o erro P4001.

Solução: criar o modelo Produto e executar uma migração
para criar a tabela no PostgreSQL.

## 6. Testes realizados

- Inicialização do backend Express.
- Conexão com PostgreSQL.
- Cadastro de produtos.
- Listagem de produtos.
- Edição de produtos.
- Exclusão de produtos.
- Pesquisa pelo nome.
- Identificação de estoque baixo.
- Atualização automática do painel de resumo.
- Reinicialização do sistema após desligar o computador.

## 7. Funcionalidades implementadas

- Cadastro de produtos.
- Listagem de produtos.
- Edição de produtos.
- Exclusão de produtos.
- Pesquisa por nome.
- Controle de estoque.
- Alertas de estoque baixo.
- Painel com indicadores de estoque.

## 8. Melhorias futuras

- Melhorar a interface visual.
- Implementar filtros por categoria.
- Aprimorar as validações.
- Adicionar testes automatizados.

## 9. Considerações finais

A inteligência artificial foi utilizada como ferramenta de apoio
durante o desenvolvimento.

As orientações foram aplicadas e verificadas por meio de testes
práticos no sistema.

Este documento deverá ser atualizado com os prompts exatos
e com novas decisões tomadas durante o projeto.



## 10. Registro de prompts exatos utilizados

Os textos entre aspas abaixo são mensagens reais enviadas
ao ChatGPT durante o desenvolvimento do projeto.


### Registro 1 — Início do projeto

**Descrição da solicitação:**
Desenvolvimento de um Sistema de Gerenciamento de Estoque
com orientação passo a passo utilizando o ChatGPT.

**Observação:**
Este registro resume a solicitação inicial.
Não é uma transcrição literal do prompt original.


### Registro 2 — Organização do ambiente

**Prompt exato:**
"ok o arquivo foi criado, só estou tendo uma confusao com o powershell do windows e o powershell do vs code, para facilitar, avise qual é qual antes de passar as instruçoes"

**Refinamento:**
As instruções passaram a identificar o terminal correto.

**Decisão de engenharia:**
Utilizar o terminal integrado do VS Code para executar
os comandos do projeto.

### Registro 3 — Problemas na interface React

**Prompt exato:**
"nao, nao apareceu na tabela do react, e as letras estao um pouco sobrepostas"

**Problema:**
Os produtos não apareciam corretamente na tabela
e havia conflitos de estilo na interface.

**Refinamento:**
Corrigir a renderização dos produtos e os arquivos CSS.

**Critério de aceitação:**
Produtos visíveis na tabela e textos sem sobreposição.

### Registro 4 — Teste de exclusão

**Prompt exato:**
"eu exclui o teclado mecanico"

**Contexto:**
Teste da funcionalidade de exclusão de produtos.

**Critério de aceitação:**
O produto excluído deixa de aparecer na listagem
e é removido do banco de dados.


### Registro 5 — Problema na edição de preços

**Prompt exato:**
"ou o problema pode ser o valor, se colocar virgula ao inves de ponto ele n atualiza"

**Problema identificado:**
A edição funcionava com preços digitados com ponto,
mas não com vírgula.

**Refinamento realizado:**
Foi identificada a conversão do preço utilizando Number().

**Decisão de engenharia:**
Substituir a vírgula por ponto antes de converter o preço
para número.

**Código utilizado:**
```javascript
const precoNumero = Number(novoPreco.replace(",", "."));
```

**Critério de aceitação:**
A edição deve aceitar preços como 119,90 e 119.90.

**Resultado:**
Correção implementada e testada com sucesso.


## 11. Testes finais do sistema

Os testes foram realizados utilizando o frontend React,
o backend Express e o banco PostgreSQL.

| Funcionalidade | Resultado |
|---|---|
| Cadastro de produtos | Aprovado |
| Edição de produtos | Aprovado |
| Exclusão de produtos | Aprovado |
| Pesquisa por nome | Aprovado |
| Alerta de estoque baixo | Aprovado |
| Atualização dos indicadores | Aprovado |

### Correção realizada durante os testes

Foi identificado que a edição de produtos não aceitava
preços digitados com vírgula, como 119,90.

A conversão do preço foi ajustada para substituir
a vírgula por ponto antes de transformar o texto
em número.

A mesma correção foi aplicada ao cadastro de produtos.

Após os ajustes, a edição foi testada com sucesso
utilizando preços com vírgula.
