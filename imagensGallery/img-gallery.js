const tpl = document.createElement("template");
tpl.innerHTML = `
<style>
:host{
display; block;
text-align: center;
}

.imgs {
    overflow: hidden;
}

::slotted(img){
    max-width: 100%;
}

.controls {
    margin-bottom: 1em;
}

</style>

<slot name = "title"></slot>
<div class="controls">
    <span id="current"> Foto 1 de 7</span>
    <button id="prev">Anterior</button>
    <button id="next">Próxima</button>
    </div>
    <div>
    <slot id="imgs"></slot>
    </div>
    `;

class ImgGalleryElement extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(tpl.content.cloneNode(true));

    // this.selectedIdx = 0; retiro a variavel para ser local e não ter acceso a ela por fora
    let selectedIdx = 0;
    Object.defineProperty(this, "selectedIdx", {
      get: () => selectedIdx,
      set: (value) => {
        const imgs = imgsEl.assignedNodes().filter(isImg);
        selectedIdx = fixIndex(value, imgs.length);
        updateUi();
      },
    });

    const imgsEl = this.shadowRoot.getElementById("imgs");
    const prevEl = this.shadowRoot.getElementById("prev");
    const nextEl = this.shadowRoot.getElementById("next");
    const currentEl = this.shadowRoot.getElementById("current");
    //console.log(imgs);

    const updateUi = () => {
      //   const imgs = imgsEl.assignedNodes().filter((e) => e.nodeName === "IMG");
      const imgs = imgsEl.assignedNodes().filter(isImg);
      currentEl.textContent = `Foto ${selectedIdx + 1} de ${imgs.length}`;
      for (let i = 0; i < imgs.length; i++) {
        const img = imgs[i];
        img.style.display = selectedIdx === i ? "initial" : "none";
      }
      prevEl.disabled = selectedIdx === 0;
      nextEl.disabled = selectedIdx === imgs.length - 1;
    };

    updateUi();

    prevEl.addEventListener("click", () => {
      this.selectedIdx--;
      //   updateUi();
    });
    nextEl.addEventListener("click", () => {
      this.selectedIdx++;
      //   updateUi();
    });

    imgsEl.addEventListener("slotchange", () => {
      this.selectedIdx = this.selectedIdx;

      //   const imgs = imgsEl.assignedNodes().filter((e) => e.nodeName === "IMG");
      //      const imgs = imgsEl.assignedNodes().filter(isImg);

      //   const length = imgs.length;
      //   if (selectedIdx >= length) {
      // selectedIdx = length - 1;
      //   }
      //      selectedIdx = fixIndex(selectedIdx, length);
      //      updateUi();
    });
  }
}

function fixIndex(index, length) {
  if (index >= length) {
    return length - 1;
  } else if (index < 0) {
    return 0;
  } else {
    return index;
  }
}

function isImg(e) {
  return e.nodeName === "IMG";
}

customElements.define("img-gallery", ImgGalleryElement);
