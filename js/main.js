// Obtém a referência para a janela modal e o botão que a abre
var modal = document.getElementById("myModal");
var carrinho = document.getElementById("carro");

// Obtém a referência para o elemento que fecha a janela modal
var closeBtn = document.getElementsByClassName("close")[0];
var fecharBtn = document.getElementsByClassName("fechar")[0];

// Quando o usuário clicar no botão, abre a janela modal
carrinho.onclick = function() {
  modal.style.display = "block";
}

// Quando o usuário clicar no botão de fechar, fecha a janela modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

fecharBtn.onclick = function() {
    modal.style.display = "none";
  }

// Quando o usuário clicar fora da janela modal, fecha a janela modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}