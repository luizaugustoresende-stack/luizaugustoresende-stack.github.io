<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Busca Jurídica</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
<header>
  <h1>Tira Dúvidas de Direito</h1>
  <nav>
    <a href="index.html">Início</a>
    <a href="tira-duvidas.html">Tira Dúvidas</a>
    <a href="busca.html">Busca por Assunto</a>
    <a href="modelos.html">Modelos Jurídicos</a>
    <a href="leis.html">Leis e Códigos</a>
  </nav>
</header>

<main>
<h2>Busca por Assunto</h2>

<input type="text" id="busca" placeholder="Digite: agravo, CLT, recurso..." />

<ul id="resultados"></ul>
</main>

<footer>© 2025 – Tira Dúvidas de Direito</footer>

<script>
const dados = [
  { nome: "Agravo de Instrumento", link: "modelos.html" },
  { nome: "Apelação", link: "modelos.html" },
  { nome: "Contestação", link: "modelos.html" },
  { nome: "Código Civil", link: "leis.html" },
  { nome: "Código Penal", link: "leis.html" },
  { nome: "CLT", link: "leis.html" },
  { nome: "Constituição Federal", link: "leis.html" }
];

const input = document.getElementById("busca");
const lista = document.getElementById("resultados");

input.addEventListener("keyup", () => {
  lista.innerHTML = "";
  const termo = input.value.toLowerCase();

  dados.forEach(item => {
    if (item.nome.toLowerCase().includes(termo)) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.nome;
      li.appendChild(a);
      lista.appendChild(li);
    }
  });
});
</script>

</body>
</html>
