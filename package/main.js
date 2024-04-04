import './src/assets/main.css';
import './src/vidstack/vidstack';
import './src/component/fullscreen-btn';
import './src/component/pip-btn';
import './src/component/caption-btn';
import './src/component/play-btn';
import './src/component/seek-btn';
import './src/component/mute-btn';
import './src/component/time-group';
import './src/component/gesture';
import './src/component/setting-btn';

class VideoPlayer extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['src', 'captionUrl', 'thumnailUrl', 'thumnailPreviewUrl'];
  }

  attributeChangedCallback(name, oldValue, newValue, thumnailAltText) {
    if (name === 'src') {
      this.render();
      this.handleTrack();
      this.handleEvent();
    }
  }

  connectedCallback() {
    this.render();
    this.handleTrack();
    this.handleEvent();
  }

  render() {
    const src = this.getAttribute('src');
    const thumnailUrl = this.getAttribute('thumnailUrl');
    const thumnailPreviewUrl = this.getAttribute('thumnailPreviewUrl');
    const thumnailAltText = this.getAttribute('thumnailAltText');
    this.innerHTML = `
        <media-player
        title="Sprite Fight"
        src="${src}"
        crossorigin
        playsinline
        autoplay
        stream-type="on-demand"
      >
        <media-provider>
          <media-poster
            src="${thumnailUrl}"
            alt="${thumnailAltText}"
          >
          <p id="error-message" class="error-message">Error</p>
          </media-poster>
        </media-provider>

        <!-- Gestures -->
        <gesture-player></gesture-player>

        <!-- Captions -->
        <media-captions></media-captions>

        <!-- Controls -->
        <media-controls>
          <div class="media-controls-spacer"></div>
          <media-controls-group class="media-controls-group">
            <!-- Time Slider -->
            <media-time-slider class="media-slider">
              <media-slider-chapters>
                <template>
                  <div class="media-slider-chapter">
                    <div class="media-slider-track"></div>
                    <div class="media-slider-track-fill media-slider-track"></div>
                    <div class="media-slider-progress media-slider-track"></div>
                  </div>
                </template>
              </media-slider-chapters>
              <div class="media-slider-thumb"></div>
              <media-slider-preview class="media-slider-preview">
                <media-slider-thumbnail
                  src="${thumnailPreviewUrl}"
                ></media-slider-thumbnail>
                <div data-part="chapter-title"></div>
                <media-slider-value></media-slider-value>
              </media-slider-preview>
            </media-time-slider>
          </media-controls-group>

          <media-controls-group class="media-controls-group">
            <!-- Play Button -->
            <play-button></play-button>

            <!-- Seek Button -->
            <seek-button></seek-button>

            <!-- Mute Button -->
            <mute-button></mute-button>

            <!-- Volume Slider -->
            <media-volume-slider class="media-slider-container media-slider">
              <div class="media-slider-track"></div>
              <div class="media-slider-track-fill media-slider-track"></div>
              <div class="media-slider-thumb"></div>
              <media-slider-preview no-clamp>
                <media-slider-value></media-slider-value>
              </media-slider-preview>
            </media-volume-slider>

            <!-- Time Group -->
            <time-group></time-group>

            <div class="media-controls-spacer"></div>

            <!-- Caption Button -->
            <caption-button></caption-button>

           <!-- Settings Menu -->
            <setting-button></setting-button>

            <!-- PIP Button -->
            <pip-button></pip-button>

            <!-- Fullscreen Button -->
             <fullscreen-button></fullscreen-button> 

          </media-controls-group>
        </media-controls>
      </media-player>
    `;
    this.style.display = 'block';
    this.style.width = '100%';
    this.style.height = '100%';
  }

  handleTrack() {
    const captionUrl = this.getAttribute('captionUrl');
    const player = document.querySelector('media-player');
    player.textTracks.clear();
    const track = {
      src: captionUrl,
      label: 'English',
      language: 'en-US',
      kind: 'subtitles',
      default: true,
      'data-type': 'vtt',
    };
    player.textTracks.add(track);
  }

  handleEvent() {
    const myPlayer = document.querySelector('media-player');
    if (myPlayer) {
      myPlayer.addEventListener('can-play', () => {
        myPlayer?.play();
      });
      myPlayer.addEventListener('error', () => {
        const errorMessageEle = document.getElementById('error-message');
        console.log('errorMessageEle', errorMessageEle);
        errorMessageEle.style.display = 'block';
      });
    }
  }
}

export default customElements.define('mgi-video-player', VideoPlayer);
