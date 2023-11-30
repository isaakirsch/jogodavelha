const currentPlayer = document.querySelector(".currentPlayer");

let selected;
let player = "X";

let positions = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function init() {
  selected = [];

  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;

  document.querySelectorAll(".game button").forEach((item) => {
    item.innerHTML = "";
    item.addEventListener("click", newMove);
  });
}

init();

function newMove(e) {
  const index = e.target.getAttribute("data-i");
  e.target.innerHTML = player;
  e.target.removeEventListener("click", newMove);
  selected[index] = player;

  setTimeout(() => {
    check();
  }, 100);

  player = player === "X" ? "O" : "X";
  currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
}

/*function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      // Exibe o destaque visual antes da mensagem de vitória
      pos.forEach((index) => {
        const button = document.querySelector(`[data-i="${index}"]`);
        button.classList.add('winning-move');
      });

      // Aguarda um curto período antes de exibir a mensagem de vitória
      setTimeout(() => {
        // Remove o destaque visual
        pos.forEach((index) => {
          const button = document.querySelector(`[data-i="${index}"]`);
          button.classList.remove('winning-move');
        });

        // Exibe a mensagem de vitória
        alert("O JOGADOR '" + playerLastMove + "' GANHOU!");

        // Reinicia o jogo após o alerta
        init();
      }, 1000); // Ajuste o tempo conforme necessário
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    alert("DEU EMPATE!");
    init();
    return;
  }
}*/

/*function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      // Exibe o destaque visual antes da mensagem de vitória
      showWinningVisual(pos);

      // Aguarda um curto período antes de exibir a mensagem de vitória
      setTimeout(() => {
        // Remove o destaque visual
        hideWinningVisual(pos);

        // Exibe a mensagem de vitória
        alert("O JOGADOR '" + playerLastMove + "' GANHOU!");

        // Reinicia o jogo após o alerta
        init();
      }, 1000); // Ajuste o tempo conforme necessário
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    // Exibe o destaque visual antes da mensagem de empate
    showWinningVisual(Array.from({ length: 9 }, (_, i) => i + 1));

    // Aguarda um curto período antes de exibir a mensagem de empate
    setTimeout(() => {
      // Remove o destaque visual
      hideWinningVisual(Array.from({ length: 9 }, (_, i) => i + 1));

      // Exibe a mensagem de empate
      alert("DEU EMPATE!");

      // Reinicia o jogo após o alerta
      init();
    }, 1000); // Ajuste o tempo conforme necessário
    return;
  }
}

function showWinningVisual(indices) {
  indices.forEach((index) => {
    const button = document.querySelector(`[data-i="${index}"]`);
    button.classList.add('winning-move');
  });
}

function hideWinningVisual(indices) {
  indices.forEach((index) => {
    const button = document.querySelector(`[data-i="${index}"]`);
    button.classList.remove('winning-move');
  });
}*/

function check() {
  let playerLastMove = player === "X" ? "O" : "X";

  const items = selected
    .map((item, i) => [item, i])
    .filter((item) => item[0] === playerLastMove)
    .map((item) => item[1]);

  for (pos of positions) {
    if (pos.every((item) => items.includes(item))) {
      // Exibe o destaque visual antes da mensagem de vitória
      showWinningVisual(pos, '#1ccd1c'); // Cor verde

      // Aguarda um curto período antes de exibir a mensagem de vitória
      setTimeout(() => {
        // Remove o destaque visual
        hideWinningVisual(pos);

        // Exibe a mensagem de vitória
        alert("O JOGADOR '" + playerLastMove + "' GANHOU!");

        // Reinicia o jogo após o alerta
        init();
      }, 1000); // Ajuste o tempo conforme necessário
      return;
    }
  }

  if (selected.filter((item) => item).length === 9) {
    // Exibe o destaque visual antes da mensagem de empate
    showWinningVisual(Array.from({ length: 9 }, (_, i) => i + 1), '#ff0000'); // Cor vermelha

    // Aguarda um curto período antes de exibir a mensagem de empate
    setTimeout(() => {
      // Remove o destaque visual
      hideWinningVisual(Array.from({ length: 9 }, (_, i) => i + 1), '#ff000');

      // Exibe a mensagem de empate
      alert("DEU EMPATE!");

      // Reinicia o jogo após o alerta
      init();
    }, 1000); // Ajuste o tempo conforme necessário
    return;
  }
}

function showWinningVisual(indices, color) {
  indices.forEach((index) => {
    const button = document.querySelector(`[data-i="${index}"]`);
    button.classList.add('winning-move');
    button.style.backgroundColor = color;
  });
}

function hideWinningVisual(indices) {
  indices.forEach((index) => {
    const button = document.querySelector(`[data-i="${index}"]`);
    button.classList.remove('winning-move');
    button.style.backgroundColor = ''; // Remove a cor de fundo
  });
}

