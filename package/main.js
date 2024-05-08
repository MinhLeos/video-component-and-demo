import { TextTrack } from 'vidstack';

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
    return ['src', 'captionUrl', 'thumnailUrl', 'thumnailPreviewUrl', 'thumnailAltText', 'isAutoPlay'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
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
    const isAutoPlay = this.getAttribute('isAutoPlay');
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
        stream-type="on-demand"
        ${isAutoPlay ? 'autoplay' : ''}
      >
        <media-provider>
          <media-poster
            src="${thumnailUrl}"
            alt="${thumnailAltText}"
          >
          <p id="error-message" class="error-message">Error</p>
          </media-poster>
        </media-provider>

        <div class="media-buffering-indicator">
          <media-spinner class="media-buffering-spinner" size="96" track-width="8"></media-spinner>
        </div>

        <!-- Gestures -->
        <gesture-player></gesture-player>

        <!-- Captions -->
        <media-captions></media-captions>

        <!-- Controls -->
        <media-controls>
          <div class="media-controls-spacer"></div>
          <media-controls-group class="media-controls-group time-slider">
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

          <media-controls-group class="media-controls-group list-btn">
            <div class="custom-btn">
                <!-- Play Button -->
                <play-button class="play-button-container"></play-button>

                <!-- Seek Button -->
                <seek-button time="10" class="seek-button-backward-container"></seek-button>
                <seek-button time="10" isForward="true" class="seek-button-forward-container"></seek-button>
            </div>
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
            <pip-button class="pip-button-container"></pip-button>

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

    if (player) {
      player.textTracks.clear();
      const track = new TextTrack({
        src: captionUrl,
        label: 'English',
        language: 'en-US',
        kind: 'subtitles',
        default: true,
        type: 'vtt',
        id: 'default',
      });
      player.textTracks.add(track);
      track.addEventListener('load', () => {
        const trackHandle = player.textTracks.getById('default');
        const myCues = trackHandle?.cues || []
        myCues.forEach((cue, index) => {
          if (index % 2 === 0 && myCues[index + 1] !== undefined && myCues[index + 1] !== null) {
            cue.text += ' ' + myCues[index + 1].text;
            if (!isNaN(myCues[index + 1].endTime)) cue.endTime = myCues[index + 1].endTime;
          } else {
            cue.text = '';
            cue.endTime = -1;
            cue.startTime = -1;
          }
        })
      });
    }
  }

  handleEvent() {
    const isAutoPlay = this.getAttribute('isAutoPlay');
    const myPlayer = document.querySelector('media-player');
    if (myPlayer) {
      myPlayer.addEventListener('can-play', () => {
        if (isAutoPlay) {
          myPlayer?.play();
        }
      });
      myPlayer.addEventListener('error', () => {
        const errorMessageEle = document.getElementById('error-message');
        errorMessageEle.style.display = 'block';
      });
    }
  }
}

export default customElements.define('mgi-video-player', VideoPlayer);
