class CandourSpooktamic {
    constructor(options) {
        this.options = options;
    }

    init() {
        const ghostEl = document.createElement('div');
        ghostEl.id = 'spooktamic-ghost';
        ghostEl.classList.add('ltr');
        document.body.appendChild(ghostEl);

        this.el = ghostEl;
        this.duration = 15 / Math.abs(this.options.speed);

        this.initAnimation();
        this.setRemovalTimeout();
    }

    initAnimation() {
        this.el.style.transitionDuration = `${this.duration}s`;
        this._iterate();
    }

    _iterate() {
        const [ vw, vh ] = [window.innerWidth, window.innerHeight];
        const dir = this.el.classList.contains('ltr') ? 'r' : 'l';

        if(dir == 'r') {
            this.el.style.left = `${vw - this.el.getBoundingClientRect().width}px`;
        } else {
            this.el.style.left = 0;
        }
        this.el.style.top = `${this._generateRand(0, vh - this.el.getBoundingClientRect().height)}px`;

        setTimeout(() => {
            this.el.classList[dir == 'r' ? 'remove' : 'add']('ltr');
            this._iterate();
        }, (this.duration + .25) * 1000);
    }

    _generateRand(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    setRemovalTimeout() {
        const { timeout } = this.options;
        if(timeout <= 0) return;
        setTimeout(() => {
            this.el.classList.add('removing');
            setTimeout(() => this.el.parentNode.removeChild(this.el), 500);
        }, timeout * 1000);
    }
}

const init = () => {
    const OPTION_SCRIPT_ID = 'spooktamic_settings';
    const optionsScript = document.getElementById(OPTION_SCRIPT_ID);
    const options = JSON.parse(optionsScript.innerText);
    const spooktamic = new CandourSpooktamic(options);

    setTimeout(() => spooktamic.init(), 60);
}

document.addEventListener('DOMContentLoaded', init);