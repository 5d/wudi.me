import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'

class WdrBasic extends LitElement {
  static get properties () {
    return {
      data: {type: Object}
    }
  }

  static get styles () {
    return style
  }

  get getEmail () {
    return this.data.email ?
      html`<a href="mailto:${this.data.email}">${this.data.email}</a>` :
      html``
  }

  get getWebsite () {
    return this.data.website ?
      html`<a href="${this.data.website}">${this.data.website}</a>` :
      html ``
  }

  render() {
    return html`
      <div>
        <p><strong>${this.data.name}</strong></p>
        ${this.getEmail}
        ${this.getWebsite}
      </div>
    `
  }
}

const style = css`
div {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  margin-bottom: 30px;
}

div strong {
  font-size: xx-large;
}

div a {
  color: black;
  display: block;
  text-decoration: none;
}
`

customElements.define('wrd-basic', WdrBasic)
