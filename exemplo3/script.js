class ContadorElement extends HTMLElement{
    constructor(){
        super();

        this.attachShadow({mode: "open"});

        let counter = 0;
        const spanEl = document.createElement("span");
        spanEl.textContent = counter;

        const controlsEl = document.createElement("div");


        const incrementEl = document.createElement("button");
        incrementEl.textContent = "Incrementar";
        incrementEl.addEventListener("click", ()=>{
            counter++;
            spanEl.textContent = counter;
        })

        const decrementEl = document.createElement("button");
        decrementEl.textContent = "Decrementar";
        decrementEl.addEventListener("click", ()=>{
            counter--;
            spanEl.textContent = counter;
        })

        controlsEl.append(incrementEl, decrementEl)

        const linkEl = document.createElement("link");
        linkEl.setAttribute("href", "estilos.css");
        linkEl.setAttribute("rel","stylesheet")
        
        linkEl.textContent = `
        button{
            margin-left:1em;
        }
        `;


        this.shadowRoot.append(linkEl, spanEl, controlsEl);
    }
}

customElements.define("meu-contador", ContadorElement)