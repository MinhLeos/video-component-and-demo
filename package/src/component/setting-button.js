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
    this.handleOpenMenu();
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
  handleOpenMenu() {
    // const handleTest1 = () => {
    //     const menuBtn = document.querySelector('media-menu-button');
    //     // console.log('menuBtn', menuBtn);
    //     if (menuBtn) {
    //         menuBtn.removeEventListener('keypress', handleClick)
    //     }
    //     const player = document.querySelector('media-player');
    //     const handleKeyPress = (e) => {
    //         console.log('---', e);
    //     }
    //     player.addEventListener('keydown', handleKeyPress)
    // }
    // const handleKeyPress = (e) => {
    //     console.log('---', e);
    // }
    const handleClick = (e) => {
      // e.preventDefault();
      // e.stopPropagation();


      console.log('click', e);
      if (e.keyCode === 13 || e.keyCode === 32) {
        const settingMenuElement = document.querySelector('media-menu.setting-menu')
        console.log('settingMenuElement', settingMenuElement);
        const mediaMenuItem = settingMenuElement.querySelector('media-menu-items')
        console.log('mediaMenuItem', mediaMenuItem);

        const listBtn = mediaMenuItem.querySelectorAll('media-menu-button.media-submenu-button')
        listBtn.forEach(btn => {
          btn.removeAttribute('data-focus');
        })
        let currentIndex = 0;
        const length = listBtn.length;
        listBtn[currentIndex].setAttribute('data-focus', true);
        console.log('listBtn', listBtn);
        mediaMenuItem.addEventListener('keypress', (e) => {
          if (e.key !== 'v') {
            console.log('media menu item', e);
            console.log('currentIndex', currentIndex);
            console.log('length', length);
            listBtn[currentIndex].removeAttribute('data-focus');
            if (currentIndex == length - 1) {
              currentIndex = 0;
            } else {
              currentIndex++;
            }
            listBtn[currentIndex].setAttribute('data-focus', true);
          } else {

          }

        })

        // settingMenuElement.addEventListener('keyup', handleKeyPress)

        // handleTest1();
        // ele.forEach((e, idx) => {
        //     const ele2 = e.querySelectorAll('media-menu-button')
        //     console.log('idx', idx);
        //     console.log('ele2', ele2);
        // })
        // ele2.dataset.focus = true
        // ele2.setAttribute('data-focus', true)
        // console.log('ele2', ele2.$props);
        // console.log('ele2', ele2.$state);
        // console.log('ele2', ele2.dataset);

        // ele2.focus();
      }
    }
    const menuBtn = document.querySelector('media-menu-button');
    console.log('menuBtn', menuBtn);
    if (menuBtn) {
      menuBtn.addEventListener('keypress', handleClick)
    }
  }
}

export default customElements.define('setting-button', SettingButton);
