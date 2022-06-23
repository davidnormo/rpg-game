import { htmlToEl, calcPos, cellSize, updatePos } from "./utils.js";

const styles = htmlToEl(`<style>
.world-sprite {
  position: absolute;
  background-image: url(./assets/SERENE_VILLAGE_REVAMPED/Serene_Village_32x32.png);
}
#house-1 {
  top: 0;
  left: 0;
  background-position: 0 -688px;
  height: 102px;
  background-repeat: no-repeat;
  width: calc(32px*3);
}
#grass {
  position: absolute;
  background-image: url(./assets/world/grass.png);
  background-repeat: repeat;
  background-size: 1000% auto;
  height: 352px;
  width: 352px;
}
#character {
  position: absolute;
  background-image: url(./assets/Characters_V3_Colour.png);
  background-repeat: no-repeat;
  height: 32px;
  width: 32px;
  background-size: 1000% auto;
}
.main-down { background-position: 0 0; }
.main-up { background-position: -32px 0; }
.main-left { background-position: -96px 0; }
.main-right { background-position: -64px 0; }
#cameraPos {
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
}
</style>`);

const characterMain = htmlToEl(`<div id="character" class="main-down"></div>`);
const grass = htmlToEl(`<div id="grass"></div>`);
const house1 = htmlToEl(`<div id="house-1" class="world-sprite"></div>`);
const cameraPosEl = htmlToEl(`<div id="cameraPos"></div>`);

let cameraPos;
let characterPos;
let curCharacterDir = "down";
let nextCharacterDir = "down";

let s = { x: null, y: null };
const renderCameraPos = () => {
  if (cameraPos.x !== s.x || cameraPos.y !== s.y) {
    cameraPosEl.innerHTML = `x = ${cameraPos.x}, y = ${cameraPos.y}`;
  }
  s = { ...cameraPos };
};

const renderCharacter = () => {
  const p = calcPos(characterPos, 5, 5);
  characterMain.style.top = p.top;
  characterMain.style.left = p.left;

  characterMain.classList.replace(
    `main-${curCharacterDir}`,
    `main-${nextCharacterDir}`
  );
  curCharacterDir = nextCharacterDir;
};

const renderWorld = () => {
  updatePos(grass, cameraPos, 0, 0);
  updatePos(house1, cameraPos, 0, 0);
};

const generalKeyDownHandler = (e) => {
  switch (e.key) {
    case "ArrowUp":
      cameraPos.y += cellSize;
      nextCharacterDir = "up";
      break;
    case "ArrowDown":
      cameraPos.y -= cellSize;
      nextCharacterDir = "down";
      break;
    case "ArrowLeft":
      cameraPos.x += cellSize;
      nextCharacterDir = "left";
      break;
    case "ArrowRight":
      cameraPos.x -= cellSize;
      nextCharacterDir = "right";
      break;
  }
};

export default () => {
  cameraPos = window._game.state.cameraPos;
  characterPos = window._game.state.characterPos = { y: 0, x: 0 };

  document.body.appendChild(cameraPosEl);

  document.body.appendChild(styles);
  window._game.gameEl.appendChild(grass);
  window._game.gameEl.appendChild(house1);
  window._game.gameEl.appendChild(characterMain);

  window._game.handleKeyDown = generalKeyDownHandler;

  return () => {
    renderCameraPos();
    renderWorld();
    renderCharacter();
  };
};
