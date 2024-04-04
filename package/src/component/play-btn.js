class PlayButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Play Button -->
            <media-tooltip>
              <media-tooltip-trigger>
                <media-play-button class="media-button">
                  <media-icon class="media-play-icon" type="play"></media-icon>
                  <media-icon class="media-pause-icon" type="pause"></media-icon>
                </media-play-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span class="media-play-tooltip-text">Play</span>
                <span class="media-pause-tooltip-text">Pause</span>
              </media-tooltip-content>
            </media-tooltip>
            `;
  }
}

export default customElements.define('play-button', PlayButton);
