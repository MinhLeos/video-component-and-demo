class QualityMenu extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
         <media-menu>
            <!-- Button Quality-->
            <media-menu-button class="media-submenu-button">
                <media-icon type="chevron-left" class="media-submenu-close-icon"></media-icon>
                <media-icon type="settings-menu" class="media-submenu-icon"></media-icon>
                <span class="media-submenu-label">Quality</span>
                <span class="media-submenu-hint" data-part="hint"></span>
                <media-icon type="chevron-right" class="media-submenu-open-icon"></media-icon>
            </media-menu-button>
            <!-- Items -->
            <media-menu-items class="media-submenu">
                <media-quality-radio-group class="media-radio-group" auto-label="Auto">
                    <template>
                        <media-radio class="media-radio">
                            <div class="media-radio-check"></div>
                            <span class="media-radio-label" data-part="label"></span>
                            <span class="media-radio-hint" data-part="bitrate"></span>
                        </media-radio>
                    </template>
                </media-quality-radio-group>
            </media-menu-items>
        </media-menu>
        `;
  }
}

export default customElements.define('quality-menu', QualityMenu);
