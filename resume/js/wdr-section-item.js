import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js'

class WdrSectionItem extends LitElement {
  static get properties () {
    return {
      data: {type: Object}
    }
  }

  static get styles () {
    return style
  }

  render() {
    return html`
      <div class="title">${(this.data.title || []).map((title) => html`<span>${title}</span>`)}</div>
      <div class="subtitle">${(this.data.subtitle || []).map((subtitle) => html`<span>${subtitle}</span>`)}</div>
      <ul class="detail">
      ${(this.data.details || []).map(({label, content}) => html`
        <li>
          ${label ? html`<strong>${label}: </strong>` : html``}
          <span>${content}</span>
        </li>
      `)}
      </ul>
    `
  }
}

const style = css`
div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
}

div.title {
  font-size: 1em;
  font-weight: normal;
  margin-bottom: 4px;
}

div.title span:first-of-type {
  font-weight: bold;
}

div.subtitle {
  font-style: italic;
  font-weight: normal;
  font-size: 1em;
  margin-top: 4px;
}

ul.detail {
  margin-top: 8px;
  list-style-type: circle;
}

ul.detail li {
  margin-block-start: 0.2em;
  margin-block-end: 0.2em;
}
`

customElements.define('wdr-section-item', WdrSectionItem)
