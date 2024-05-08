class SeekButton extends HTMLElement {
  constructor() {
    super();
  }
  static get observedAttributes() {
    return ['time', 'isForward'];
  }
  connectedCallback() {
    this.render();
    this.handleKeyPress();
  }
  attributeChangedCallback(time, isForward) {
    this.render();
    this.handleKeyPress();
  }
  render() {
    const time = this.getAttribute('time');
    const isForward = this.getAttribute('isForward');
    this.innerHTML = isForward
      ? `
         <!-- Seek Button -->
             <media-tooltip>
                <media-tooltip-trigger>
                    <media-seek-button class="media-button" seconds="${time}">
                        <media-icon type="seek-forward-${time}"></media-icon>
                    </media-seek-button>
              </media-tooltip-trigger>
              <media-tooltip-content class="media-tooltip" placement="top">
                <span>Seek Forward</span>
              </media-tooltip-content>
            </media-tooltip>
            `
      : `<media-tooltip>
            <media-tooltip-trigger>
              <media-seek-button class="media-button" seconds="-${time}">
                <media-icon type="seek-backward-${time}"></media-icon>
              </media-seek-button>
          </media-tooltip-trigger>
          <media-tooltip-content class="media-tooltip" placement="top">
            <span>Seek Backward</span>
          </media-tooltip-content>
        </media-tooltip>`;
  }
  handleKeyPress() {
    const mediaSeekButtonElement = this.querySelector('media-seek-button.media-button');
    if (mediaSeekButtonElement) {
      mediaSeekButtonElement.addEventListener('keypress', (e) => {
        if (e?.key === " ") {
          e.preventDefault();
          e.stopPropagation();
        }
      });
    }
  }
}

export default customElements.define('seek-button', SeekButton);
