import { htmlToEl } from "./utils.js";

export default () => {
  window._game.gameEl.appendChild(
    htmlToEl(`<div class="grid">
  <div class="grid-r grid-r-1"></div>
  <div class="grid-r grid-r-2"></div>
  <div class="grid-r grid-r-3"></div>
  <div class="grid-r grid-r-4"></div>
  <div class="grid-r grid-r-5"></div>
  <div class="grid-r grid-r-6"></div>
  <div class="grid-r grid-r-7"></div>
  <div class="grid-r grid-r-8"></div>
  <div class="grid-r grid-r-9"></div>
  <div class="grid-r grid-r-10"></div>
  <div class="grid-c grid-c-1"></div>
  <div class="grid-c grid-c-2"></div>
  <div class="grid-c grid-c-3"></div>
  <div class="grid-c grid-c-4"></div>
  <div class="grid-c grid-c-5"></div>
  <div class="grid-c grid-c-6"></div>
  <div class="grid-c grid-c-7"></div>
  <div class="grid-c grid-c-8"></div>
  <div class="grid-c grid-c-9"></div>
  <div class="grid-c grid-c-10"></div>
</div>`)
  );
};
