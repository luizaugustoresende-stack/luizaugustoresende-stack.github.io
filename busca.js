<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Busca Jurídica</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>

<header class="topo">
  <div class="logo">🏛️ Tira Dúvidas de Direito</div>
  <nav>
    <a href="index.html">Início</a>
    <a href="tira-duvidas.html">Tira Dúvidas</a>
    <a href="busca.html">Busca</a>
    <a href="modelos.html">Modelos</a>
    <a href="leis.html">Leis</a>
  </nav>
</header>

<main class="conteudo">
  <h1>Busca por assunto</h1>

  <form onsubmit="buscar(event)">
    <input type="text" id="termo" placeholder="Digite: apelação, CLT, agravo..." required>
    <button type="submit">Buscar</button>
  </form>

  <ul id="resultado" class="lista"></ul>
</main>

<footer class="rodape">© 2025</footer>

<script>
function buscar(event) {
  event.preventDefault();

  const termo = document.getElementById("termo").value.toLowerCase();
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const dados = [
    { texto: "Apelação", link: "modelos/apelacao.html" },
    { texto: "Agravo de Instrumento", link: "modelos/agravo-instrumento.html" },
    { texto: "Constituição Federal", link: "leis/constituicao.html" },
    { texto: "Código Civil", link: "leis/codigo-civil.html" },
    { texto: "CLT", link: "leis/clt.html" }
  ];

  const encontrados = dados.filter(item =>
    item.texto.toLowerCase().includes(termo)
  );

  if (encontrados.length === 0) {
    resultado.innerHTML = "<li>Nenhum resultado encontrado.</li>";
    return;
  }

  encontrados.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${item.link}">${item.texto}</a>`;
    resultado.appendChild(li);
  });
}
</script>

</body>
</html>
