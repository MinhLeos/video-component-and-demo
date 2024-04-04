class MuteButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Mute Button -->
            <media-tooltip>
              <media-tooltip-trigger>
                <media-mute-button class="media-button">
                  <media-icon class="media-mute-icon" type="mute"></media-icon>
                  <media-icon class="media-volume-low-icon" type="volume-low"></media-icon>
                  <media-icon class="media-volume-high-icon" type="volume-high"></media-icon>
                </media-mute-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span class="media-mute-tooltip-text">Unmute</span>
                <span class="media-unmute-tooltip-text">Mute</span>
              </media-tooltip-content>
            </media-tooltip>
            `;
  }
}

export default customElements.define('mute-button', MuteButton);
