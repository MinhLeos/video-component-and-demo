// import './setting-menu/speed-menu';
// import './setting-menu/quality-menu';
// import './setting-menu/caption-menu';

class SettingButton extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.render();
        this.handleCloseMenu();
    }

    render() {
        this.innerHTML = `
          <!-- Settings Menu -->
            <media-menu class="setting-menu">
                <media-tooltip>
                    <media-tooltip-trigger>
                        <media-menu-button class="media-button" aria-label="Settings">
                            <media-icon type="settings" class="media-rotate-icon"></media-icon>
                        </media-menu-button>
                    </media-tooltip-trigger>
                    <media-tooltip-content class="media-tooltip" placement="top">
                        <span>Setting</span>
                    </media-tooltip-content>
                </media-tooltip>
                <media-menu-items class="media-menu" placement="top" offset="0">
                  <!-- Menu Items + Submenus -->
                    
                  <media-menu>
                      <!-- Button -->
                      <media-menu-button class="media-submenu-button">
                          <media-icon type="chevron-left" class="media-submenu-close-icon"></media-icon>
                          <media-icon type="closed-captions" class="media-submenu-icon"></media-icon>
                          <span class="media-submenu-label">Captions</span>
                          <span class="media-submenu-hint" data-part="hint"></span>
                          <media-icon type="chevron-right" class="media-submenu-open-icon"></media-icon>
                      </media-menu-button>
                      <!-- Items -->
                      <media-menu-items class="media-submenu">
                          <media-captions-radio-group class="media-radio-group" off-label="Off">
                              <template>
                                  <media-radio class="media-radio">
                                      <div class="media-radio-check"></div>
                                      <span class="media-radio-label" data-part="label"></span>
                                  </media-radio>
                              </template>
                          </media-captions-radio-group>
                      </media-menu-items>
                  </media-menu>

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

                    <div class="custom-setting">
                      <media-icon type="settings"></media-icon>
                      <span class="media-submenu-label">Setting</span>
                      <media-icon data-part="close-target" class="media-icon-close" type="x-mark"></media-icon>
                    </div>
                </media-menu-items>
            </media-menu>
            `;
    }
    handleCloseMenu() {
        const handleClick = () => {
            const menuElement = this.querySelector('media-menu.setting-menu');
            if (menuElement) {
                menuElement?.close();
            }
        }

        const closeElement = this.querySelector('media-icon.media-icon-close');
        if (closeElement) {
            closeElement.addEventListener('click', handleClick)
        }
    }
}

export default customElements.define('setting-button', SettingButton);
