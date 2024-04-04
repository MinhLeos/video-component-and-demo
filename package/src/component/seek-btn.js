class SeekButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Seek Button -->
            <media-tooltip>
                <media-tooltip-trigger>
                    <media-seek-button class="media-button" seconds="-10">
                        <media-icon type="seek-backward-10"></media-icon>
                    </media-seek-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span class="media-play-tooltip-text">Seek Backward</span>
              </media-tooltip-content>
            </media-tooltip>

            <media-tooltip>
                <media-tooltip-trigger>
                    <media-seek-button class="media-button" seconds="10">
                        <media-icon type="seek-forward-10"></media-icon>
                    </media-seek-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span class="media-play-tooltip-text">Seek Forward</span>
              </media-tooltip-content>
            </media-tooltip>
            `;
  }
}

export default customElements.define('seek-button', SeekButton);
