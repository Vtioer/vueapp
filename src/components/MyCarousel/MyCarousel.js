export default {
    name: "MyCarousel",
    data() {
        return {
            _direction: "left",
            currIndex: 0,
            itemLength: 0,
        };
    },
    props: {
        interval: {
            type: Number,
            default: 3000,
        },
        height: {
            type: Number,
            default: 160,
        },
        direction: {
            type: String,
            default: "horizontal",
            validator: (val) => {
                return val == "vertical" || val == "horizontal";
            },
        },
        "initial-index": {
            type: Number,
            default: 0,
        },
        autoplay: {
            type: Boolean,
            default: true,
        },
        loop: {
            type: Boolean,
            default: true,
        },
    },

    mounted() {
        this.init();
        this.autoplay && this.startWhirl();
    },
    methods: {
        init() {
            this.currIndex = this.initialIndex;
            this._direction = this.direction == "horizontal" ? "left" : "top";
            this.defSlot = this.$slots.default ? this.$slots.default : [];
            this.itemLength = this.defSlot.length;

            this.defSlot.forEach((ele, index) => {
                let style = ele.elm.style;
                style.height = "100%";
                style.width = "100%";
                if (index == this.currIndex) {
                    style[this._direction] = "0%"
                } else {
                    style[this._direction] = "100%"
                }
                style.position = "absolute";
                style.transition = `${this._direction} 0.5s ease-in-out`;
            });
        },

        startWhirl() {
            if (this.loop) {
                this.timer = setInterval(this.handleMove, this.interval);
            }
        },

        handleMove(type = "right") {
            let changSlots = [];
            let len = this.itemLength;
            let defSlot = this.defSlot;

            if (type == 'right') {
                let nextIndex = this.currIndex + 1;

                nextIndex = nextIndex > len - 1 ? 0 : nextIndex;
                changSlots.push(defSlot[this.currIndex], defSlot[nextIndex])
            } else {
                let prevIndex = this.currIndex - 1;

                prevIndex = prevIndex < 0 ? len - 1 : prevIndex;
                changSlots.push(defSlot[prevIndex], defSlot[this.currIndex]);
            }

            if (type == "right") {
                changSlots[1].elm.style.transition = '';
                changSlots[1].elm.style[this._direction] = '100%';
                this.currIndex++;

                if (this.currIndex > len - 1) this.currIndex = 0;
            } else {
                changSlots[0].elm.style.transition = '';
                changSlots[0].elm.style[this._direction] = '-100%';
                this.currIndex--;

                if (this.currIndex < 0) this.currIndex = len - 1;
            }

            setTimeout(() => {
                changSlots.forEach((ele) => {
                    let style = ele.elm.style;
                    let offset = parseFloat(ele.elm.style[this._direction] || 0);

                    style.transition = `${this._direction} 0.5s ease-in-out`;

                    if (type == 'right') {
                        style[this._direction] = `${offset - 100}%`
                    } else {
                        style[this._direction] = `${offset + 100}%`
                    }
                })
            },30)

        },

        stopCarousel() {
            this.timer && clearInterval(this.timer);
        },

        handleControl(type = "right") {
            if (this.timeout) return

            this.timeout = setTimeout(() => {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                    this.timeout = undefined;
                }
                this.stopCarousel();
                this.handleMove(type);
                this.autoplay && this.startWhirl();
            }, 300)

        },
    },

    beforeDestroy() {
        this.timer && clearInterval(this.timer);
    },
};