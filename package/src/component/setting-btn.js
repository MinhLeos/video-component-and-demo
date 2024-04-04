import './setting-menu/speed-menu';
import './setting-menu/quality-menu';
import './setting-menu/caption-menu';

class SettingButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
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
                        <span class="media-cc-on-tooltip-text">Setting</span>
                    </media-tooltip-content>
                </media-tooltip>
                <media-menu-items class="media-menu" placement="top" offset="0">
                    
                    <!-- Menu Items + Submenus -->
                    <caption-menu></caption-menu>
                    <speed-menu></speed-menu>
                    <quality-menu></quality-menu>
                    
                </media-menu-items>
            </media-menu>
            `;
  }
}

export default customElements.define('setting-button', SettingButton);
