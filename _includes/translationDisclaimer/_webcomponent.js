document.addEventListener('DOMContentLoaded', function() {
    var div = document.createElement('nysds-banner');
    document.body.appendChild(div);
    var closeclose = document.getElementById("nysds-close");
        if(closeclose){
        closeclose.addEventListener("click", closetranslate);
        function closetranslate () {
        document.getElementById("nysds-hide-this").style.display = "none";
        console.log('clicked that button')
        }
    }
}, false);


class nysdsBanner extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    
    <article id="nysds-hide-this" class="nysds-static-banner">
        <div class="nysds-static-wrap">
            <div class="nysds-disclaimer" lang="es"> Las traducciones automáticas no son perfectas y no pretenden reemplazar a los traductores humanos. Es posible que algunas páginas o parte del contenido no estén traducidos de forma precisa debido a las limitaciones del software de traducción. <a class="nysds-disclaimer-link" href="https://es.ny.gov/web-translation-services">Lea la exención de responsabilidad completa</a></div>
        </div>
        <button id="nysds-close" class="nysds-close-button nysds-close-icon" aria-labelledby="close-button-label">
                <span class="sr-only" id="close-button-label">Close this notification banner</span>
            </button>
    </article>
      `;
  }
}
customElements.define("nysds-banner", nysdsBanner);