import { LitElement, html, css } from 'https://unpkg.com/lit-element/lit-element.js?module'
import './wdr-resume.js'

class WdrResumeLoader extends LitElement {
  static get properties() {
    return {
      resumePath: {type: String},
      resume: {type: Object}
    }
  }

  static get styles() {
    return style
  }

  constructor () {
    super()
    this.resume = null
    this.resumePath = ''
  }

  firstUpdated() {
    fetch(new Request(this.resumePath)).then((resp) => resp.json()).then((data) => {
      this.resume = data
    })
  }

  render() {
    return html`${this.resume ?
      html`<wdr-resume .resume="${this.resume}"></wdr-resume>` :
      html`<div class="loading">...</div>`
    }`
  }
}

const style = css`
.loading {
  height: 100%;
  width: 100%;
}
`

customElements.define('wdr-resume-loader', WdrResumeLoader)
