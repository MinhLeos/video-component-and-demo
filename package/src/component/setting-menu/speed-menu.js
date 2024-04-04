class SpeedMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <media-menu>
            <!-- Button -->
            <media-menu-button class="media-submenu-button">
                <media-icon type="chevron-left" class="media-submenu-close-icon"></media-icon>
                <media-icon type="odometer" class="media-submenu-icon"></media-icon>
                <span class="media-submenu-label">Speed</span>
                <span class="media-submenu-hint" data-part="hint"></span>
                <media-icon type="chevron-right" class="media-submenu-open-icon"></media-icon>
            </media-menu-button>
            <!-- Items -->
            <media-menu-items class="media-submenu">
                <media-speed-radio-group class="media-radio-group" normal-label="Normal">
                    <template>
                        <media-radio class="media-radio">
                            <div class="media-radio-check"></div>
                            <span class="media-radio-label" data-part="label"></span>
                        </media-radio>
                    </template>
                </media-speed-radio-group>
            </media-menu-items>
        </media-menu>
        `;
  }
}

export default customElements.define('speed-menu', SpeedMenu);
