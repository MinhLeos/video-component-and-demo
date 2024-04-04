class FullScreenButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- Fullscreen Button -->
            <media-tooltip class="fullscreen-btn">
              <media-tooltip-trigger>
                <media-fullscreen-button class="media-button">
                  <media-icon class="media-fs-enter-icon" type="fullscreen"></media-icon>
                  <media-icon class="media-fs-exit-icon" type="fullscreen-exit"></media-icon>
                </media-fullscreen-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top end">
                <span class="media-fs-enter-tooltip-text">Enter Fullscreen</span>
                <span class="media-fs-exit-tooltip-text">Exit Fullscreen</span>
              </media-tooltip-content>
            </media-tooltip>
    `;
  }
}

export default customElements.define('fullscreen-button', FullScreenButton);
