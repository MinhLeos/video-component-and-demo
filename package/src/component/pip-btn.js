class PIPButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- PIP Button -->
            <media-tooltip class="pip-btn">
              <media-tooltip-trigger>
                <media-pip-button class="media-button">
                  <media-icon class="media-pip-enter-icon" type="picture-in-picture"></media-icon>
                  <media-icon
                    class="media-pip-exit-icon"
                    type="picture-in-picture-exit"
                  ></media-icon>
                </media-pip-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span class="media-pip-enter-tooltip-text">Enter PIP</span>
                <span class="media-pip-exit-tooltip-text">Exit PIP</span>
              </media-tooltip-content>
            </media-tooltip>
    `;
  }
}

export default customElements.define('pip-button', PIPButton);
