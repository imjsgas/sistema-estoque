# Sistema de Gerenciamento de Estoque

## Descrição

Sistema web desenvolvido para gerenciar produtos e controlar o estoque de uma empresa.


## Funcionalidades implementadas

- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Pesquisa de produtos por nome
- Controle de quantidade em estoque
- Identificação de produtos com estoque baixo
- Painel com total de produtos cadastrados
- Painel com quantidade total de unidades
- Painel com quantidade de produtos em estoque baixo

## Tecnologias utilizadas

- React e Vite
- Node.js e Express
- PostgreSQL 16
- Prisma ORM
- Docker Compose
- Git e GitHub

## Status do projeto

CRUD completo e funcional.

O frontend React está integrado ao backend Express, que utiliza Prisma para acessar o banco de dados PostgreSQL.


## Tecnologias

- **Frontend:** React
- **Backend:** Node.js e Express
- **Banco de dados:** PostgreSQL
- **ORM:** Prisma
- **Containerização:** Docker
- **Controle de versão:** Git e GitHub

## Status do projeto

Em desenvolvimento.

O backend inicial já está configurado com Express e nodemon.

## Estrutura do projeto

```text
sistema-estoque/
├── backend/
│   ├── server.js
│   └── package.json
├── .gitignore
└── README.md
```

*Estrutura simplificada, que será atualizada durante o desenvolvimento.*

## Equipe

Projeto acadêmico desenvolvido em dupla.

## Execução do backend

Na pasta `backend`, instale as dependências:

```bash
npm install
```

Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

Acesse:

http://localhost:3000
