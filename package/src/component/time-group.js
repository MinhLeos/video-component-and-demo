class TimeGroup extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <!-- Time Group -->
            <div class="media-time-group">
              <media-time type="current"></media-time>
              <div class="media-time-divider">/</div>
              <media-time type="duration"></media-time>
            </div>
            `;
  }
}

export default customElements.define('time-group', TimeGroup);
