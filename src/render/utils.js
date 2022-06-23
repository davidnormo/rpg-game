export const cellSize = 32;

export const calcPos = (pos, x, y) => {
  return {
    top: `${pos.y + y * cellSize}px`,
    left: `${pos.x + x * cellSize}px`,
  };
};

export const updatePos = (el, pos, x, y) => {
  const p = calcPos(pos, x, y);
  el.style.top = p.top;
  el.style.left = p.left;
};

export const htmlToEl = (htmlStr) => {
  const template = document.createElement("template");
  template.innerHTML = htmlStr;
  return template.content.firstChild;
};
