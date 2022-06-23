import renderGeneral from "./src/render/renderGeneral.js";
import renderGrid from "./src/render/renderGrid.js";

const gameEl = document.querySelector("#game");

let generalRenderer;

const game = {
  gameEl,

  state: {
    cameraPos: {
      x: 0,
      y: 0,
    },
  },

  // registered to the DOM events
  globalKeyDownHandler: (e) => {
    game.handleKeyDown(e);
  },
  // pointer to currently registered handler
  handleKeyDown: null,

  // render the frame
  render: () => {
    generalRenderer();

    requestAnimationFrame(game.render);
  },

  init: () => {
    renderGrid();

    document.addEventListener("keydown", game.globalKeyDownHandler);

    requestAnimationFrame(game.render);
  },
};

window._game = game;

generalRenderer = renderGeneral();

game.init();
