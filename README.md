
# Sistema de Gerenciamento de Estoque

## Descrição

Sistema web desenvolvido para gerenciar produtos e
controlar o estoque de uma empresa.

Projeto acadêmico da disciplina de Laboratório de
Programação, desenvolvido com auxílio de inteligência
artificial.

## Funcionalidades implementadas

- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Pesquisa de produtos por nome
- Controle da quantidade em estoque
- Identificação de produtos com estoque baixo
- Painel com total de produtos cadastrados
- Painel com quantidade total de unidades
- Painel com quantidade de produtos em estoque baixo

## Tecnologias utilizadas

- React e Vite
- Node.js 24 e Express
- Nodemon
- PostgreSQL 16
- Prisma ORM
- Docker Compose
- Git e GitHub
- GitHub Projects (Kanban)

## Estrutura do projeto

```text
sistema-estoque/
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── .gitignore
├── docker-compose.yml
├── README.md
└── DOCUMENTACAO_IA.md
```

Observação: o arquivo .env contém configurações locais
e não deve ser enviado ao GitHub.

## Como executar o projeto

### 1. Requisitos

É necessário ter instalado:

- Node.js 22, 23 ou 24
- Docker Desktop
- Git

### 2. Iniciar o banco de dados

Abra o terminal na pasta principal do projeto:

```powershell
docker compose up -d
```

### 3. Iniciar o backend

Abra outro terminal:

```powershell
cd backend
npm.cmd install
npx.cmd prisma generate
npx.cmd prisma migrate deploy
npm.cmd run dev
```

O backend estará disponível em:

http://localhost:3000

A rota de listagem de produtos estará disponível em:

http://localhost:3000/produtos

### 4. Iniciar o frontend

Abra outro terminal na pasta principal do projeto:

```powershell
cd frontend
npm.cmd install
npm.cmd run dev
```

Acesse no navegador:

http://localhost:5173


### 5. Configuração do banco de dados

O PostgreSQL é executado utilizando Docker Compose.

Antes de iniciar o backend pela primeira vez, é necessário
configurar o arquivo de variáveis de ambiente.

1. Entre na pasta `backend`.
2. Copie o arquivo `.env.example`.
3. Renomeie a cópia para `.env`.
4. Confira se a variável `DATABASE_URL` corresponde
   às configurações do PostgreSQL no `docker-compose.yml`.

Depois, na pasta `backend`, execute:

```powershell
npm.cmd install
npx.cmd prisma generate
npx.cmd prisma migrate deploy
npm.cmd run dev
```

O arquivo `.env` contém a configuração local e não
deve ser enviado ao GitHub.

O arquivo `.env.example` contém apenas um exemplo
de configuração para o ambiente de desenvolvimento.
