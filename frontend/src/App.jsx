
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [produtos, setProdutos] = useState([]);

const totalProdutos = produtos.length;

const totalUnidades = produtos.reduce(
  (total, produto) => total + produto.estoque,
  0
);

const produtosEstoqueBaixo = produtos.filter(
  (produto) => produto.estoque <= 5
).length;

  const [pesquisa, setPesquisa] = useState("");

  async function carregarProdutos() {
    try {
      const resposta = await fetch("http://localhost:3000/produtos");

      if (!resposta.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const dados = await resposta.json();
      setProdutos(dados);
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao carregar produtos.");
    }
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function cadastrarProduto(e) {
    e.preventDefault();

    try {
      const resposta = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: nome.trim(),
          categoria: categoria.trim(),
          preco: Number(preco),
          estoque: Number(estoque)
        })
      });

      if (!resposta.ok) {
        throw new Error("Erro ao cadastrar produto");
      }

      setMensagem("Produto cadastrado com sucesso!");

      setNome("");
      setCategoria("");
      setPreco("");
      setEstoque("");

      await carregarProdutos();
    } catch (erro) {
      console.error(erro);
      setMensagem("Erro ao cadastrar produto.");
    }
  }


async function excluirProduto(id) {
  const confirmar = window.confirm(
    "Tem certeza que deseja excluir este produto?"
  );

  if (!confirmar) {
    return;
  }

  try {
    const resposta = await fetch(
      `http://localhost:3000/produtos/${id}`,
      {
        method: "DELETE"
      }
    );

    if (!resposta.ok) {
      throw new Error("Erro ao excluir produto");
    }

    setMensagem("Produto excluído com sucesso!");
    await carregarProdutos();
  } catch (erro) {
    console.error(erro);
    setMensagem("Erro ao excluir produto.");
  }
}


async function editarProduto(produto) {
  const novoNome = window.prompt("Nome do produto:", produto.nome);
  if (novoNome === null) return;

  const novaCategoria = window.prompt("Categoria:", produto.categoria);
  if (novaCategoria === null) return;

  const novoPreco = window.prompt("Preço:", produto.preco);
  if (novoPreco === null) return;

  const novoEstoque = window.prompt("Estoque:", produto.estoque);
  if (novoEstoque === null) return;

  const precoNumero = Number(novoPreco);
  const estoqueNumero = Number(novoEstoque);

  if (
    !novoNome.trim() ||
    !novaCategoria.trim() ||
    !novoPreco.trim() ||
    !novoEstoque.trim() ||
    !Number.isFinite(precoNumero) ||
    precoNumero < 0 ||
    !Number.isInteger(estoqueNumero) ||
    estoqueNumero < 0
  ) {
    setMensagem("Preencha os campos com valores válidos.");
    return;
  }

  try {
    const resposta = await fetch(
      `http://localhost:3000/produtos/${produto.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome: novoNome.trim(),
          descricao: produto.descricao,
          categoria: novaCategoria.trim(),
          preco: precoNumero,
          estoque: estoqueNumero
        })
      }
    );

    if (!resposta.ok) {
      throw new Error("Erro ao editar produto");
    }

    setMensagem("Produto atualizado com sucesso!");
    await carregarProdutos();
  } catch (erro) {
    console.error(erro);
    setMensagem("Erro ao atualizar produto.");
  }
}

  return (
    <div className="container">
      <h1>Sistema de Gerenciamento de Estoque</h1>
      <p>Controle seus produtos de forma simples.</p>

<div className="painel-resumo">
  <div className="card-resumo">
    <h3>Produtos Cadastrados</h3>
    <strong>{totalProdutos}</strong>
  </div>

  <div className="card-resumo">
    <h3>Unidades em Estoque</h3>
    <strong>{totalUnidades}</strong>
  </div>

  <div className="card-resumo alerta">
    <h3>Estoque Baixo</h3>
    <strong>{produtosEstoqueBaixo}</strong>
  </div>
</div>


      <h2>Cadastro de Produtos</h2>

<input
  type="text"
  placeholder="Pesquisar produto pelo nome..."
  value={pesquisa}
  onChange={(e) => setPesquisa(e.target.value)}
  className="campo-pesquisa"
/>


      <form onSubmit={cadastrarProduto}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          min="0"
          step="0.01"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Quantidade em estoque"
          min="0"
          step="1"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          required
        />

        <button type="submit">Cadastrar Produto</button>
      </form>

      {mensagem && <p>{mensagem}</p>}

      <h2>Produtos Cadastrados</h2>

      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Estoque</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {produtos
  .filter((produto) =>
    produto.nome.toLowerCase().includes(pesquisa.toLowerCase())
  )
  .map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>
                  R$ {produto.preco.toFixed(2)}
                </td>
                
<td>
  {produto.estoque <= 5 ? (
    <span className="estoque-baixo">
      {produto.estoque} - Estoque baixo!
    </span>
  ) : (
    <span className="estoque-normal">
      {produto.estoque} - Normal
    </span>
  )}
</td>

               
<td>
  <button
    type="button"
    onClick={() => editarProduto(produto)}
    className="btn-editar"
  >
    Editar
  </button>

  <button
    type="button"
    onClick={() => excluirProduto(produto.id)}
    className="btn-excluir"
  >
    Excluir
  </button>
</td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
