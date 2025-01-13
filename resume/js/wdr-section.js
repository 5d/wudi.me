import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'
import './wdr-section-item.js'

class WdrSection extends LitElement {
  static get properties () {
    return {
      section: {type: Object}
    }
  }

  static get styles () {
    return style
  }

  render() {
    return html`
      <section>
        <header>${this.section.header}<hr></header>
        ${this.section.items.map((item) => html`
          <wdr-section-item .data="${item}"></wdr-section-item>
        `)}
      </section>
    `
  }
}

const style = css`
section header {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1.1em;
}

section header hr {
  margin-block-start: 0;
}
`

customElements.define('wdr-section', WdrSection)
