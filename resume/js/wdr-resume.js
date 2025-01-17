import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'
import './wdr-basic.js'
import './wdr-section.js'

class WdrResume extends LitElement {
  static get properties () {
    return {
      resume: {type: Object}
    }
  }

  static get styles () {
    return style
  }

  render() {
    return html`
      <main>
        <wrd-basic .data="${this.resume.basic}"></wrd-basic>
        ${this.resume.sections.map((section) => html`
          <wdr-section .section="${section}"></wdr-section>
        `)}
      </main>
    `
  }
}

const style = css`
main {
  background: white;
  padding: 30px;
  margin: auto;
  color: #343a40;
  max-width: 800px;
}
`

customElements.define('wdr-resume', WdrResume)
