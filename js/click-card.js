customElements.define("click-card",class extends HTMLElement{connectedCallback(){let e,t;this.style.cursor="pointer";const s=this.querySelector("a");this.onmousedown=()=>e=+new Date,this.onmouseup=()=>{(t=+new Date)-e<200&&s.click()}}});