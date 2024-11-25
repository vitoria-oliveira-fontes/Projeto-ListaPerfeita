// Inicializa a lista de compras no localStorage
let listaDeCompras = JSON.parse(localStorage.getItem('listaDeCompras')) || [];

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(item) {
  // Adiciona o item à lista
  listaDeCompras.push(item);
  
  // Atualiza a lista no localStorage
  localStorage.setItem('listaDeCompras', JSON.stringify(listaDeCompras));
  
  // Exibe uma mensagem de confirmação
  alert(`${item} foi adicionado à sua lista de compras!`);
  
  // Redireciona para a página da lista
  window.location.href = 'lista.html';
}