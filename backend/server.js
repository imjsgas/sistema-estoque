

const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

require("dotenv").config();

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Sistema de Estoque - Backend funcionando!");
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: "Erro ao buscar produtos"
    });
  }
});


app.post("/produtos", async (req, res) => {
  try {
    const { nome, descricao, categoria, preco, estoque } = req.body;

    if (
      typeof nome !== "string" || !nome.trim() ||
      typeof categoria !== "string" || !categoria.trim() ||
      typeof preco !== "number" || !Number.isFinite(preco) || preco < 0 ||
      !Number.isInteger(estoque) || estoque < 0
    ) {
      return res.status(400).json({
        erro: "Informe nome, categoria, preço e estoque válidos."
      });
    }

    const produto = await prisma.produto.create({
      data: {
        nome: nome.trim(),
        descricao: descricao || null,
        categoria: categoria.trim(),
        preco,
        estoque
      }
    });

    res.status(201).json(produto);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: "Erro ao cadastrar produto"
    });
  }
});


app.put("/produtos/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { nome, descricao, categoria, preco, estoque } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        erro: "ID inválido"
      });
    }

    if (
      typeof nome !== "string" || !nome.trim() ||
      typeof categoria !== "string" || !categoria.trim() ||
      typeof preco !== "number" || !Number.isFinite(preco) || preco < 0 ||
      !Number.isInteger(estoque) || estoque < 0 ||
      (descricao != null && typeof descricao !== "string")
    ) {
      return res.status(400).json({
        erro: "Dados do produto inválidos"
      });
    }

    const produtoExistente = await prisma.produto.findUnique({
      where: { id }
    });

    if (!produtoExistente) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    const produtoAtualizado = await prisma.produto.update({
      where: { id },
      data: {
        nome: nome.trim(),
        descricao: descricao || null,
        categoria: categoria.trim(),
        preco,
        estoque
      }
    });

    res.json(produtoAtualizado);
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: "Erro ao atualizar produto"
    });
  }
});


app.delete("/produtos/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
      return res.status(400).json({
        erro: "ID inválido"
      });
    }

    const produto = await prisma.produto.findUnique({
      where: { id }
    });

    if (!produto) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    await prisma.produto.delete({
      where: { id }
    });

    res.json({
      mensagem: "Produto excluído com sucesso"
    });
  } catch (erro) {
    console.error(erro);
    res.status(500).json({
      erro: "Erro ao excluir produto"
    });
  }
});


app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
