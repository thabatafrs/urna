function entrar() {
  document.getElementById("entrar");
  location.href = "hub.html";
}

function cadastrar() {
  document.getElementById("cadastrar");
  location.href = "cadastroAdmin.html";
}

function iniciarProcesso() {
  document.getElementById("hub");
  location.href = "id_eleitor.html";
}

function hubSair() {
  document.getElementById("hubSair");
  location.href = "index.html";
}

function entrarCadastrarChapas() {
  document.getElementById("cadastrarChapas");
  location.href = "cadastroChapas.html";
}

function entrarCadastrarEleitor() {
  document.getElementById("cadastrarEleitor");
  location.href = "cadastroEleitor.html";
}

function entrarContagem() {
  document.getElementById("entrarContagem");
  location.href = "contagem.html";
}

function entrarUrna() {
  const newWindow = window.open("voto.html", "_blank", "width=1360,height=768");
  if (newWindow) {
    const left = 1360;
    const top = 2341;
    newWindow.moveTo(left, top);
  } else {
    alert(
      "Pop-up bloqueado. Por favor, habilite os pop-ups para abrir a página em uma nova janela."
    );
  }
}

function cancelar() {
  document.getElementById("cancela");
  location.href = "voto.html";
}

function confirma() {
  document.getElementById("confirma");
  location.href = "FIM.html";
}
