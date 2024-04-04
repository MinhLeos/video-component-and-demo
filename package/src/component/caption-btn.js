class CaptionButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Caption Button -->
            <media-tooltip class="caption-btn">
              <media-tooltip-trigger>
                <media-caption-button class="media-button">
                  <media-icon class="media-cc-on-icon" type="closed-captions-on"></media-icon>
                  <media-icon class="media-cc-off-icon" type="closed-captions"></media-icon>
                </media-caption-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span class="media-cc-on-tooltip-text">Closed-Captions Off</span>
                <span class="media-cc-off-tooltip-text">Closed-Captions On</span>
              </media-tooltip-content>
            </media-tooltip>
    `;
  }
}

export default customElements.define('caption-button', CaptionButton);
