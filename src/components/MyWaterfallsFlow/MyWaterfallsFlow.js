export default {
    name: "MyWaterfallsFlow",
    data() {
        return {
            waterfallList: [],
            imgWidth: 0, // 每个盒子的宽度
            overallHeight: [],
            imgList: [],
        };
    },
    props: {
        /**
         * list like: {id: '', src: '', title: '',subtitle: ''}
         */
        list: {
            type: Array,
            default: () => { },
        },
        cols: {
            // 瀑布流的列数
            type: Number,
            default: 2,
        },
        margin: {
            type: Number,
            default: 10,
        },
    },

    created() {
        for (let i = 0; i < this.list.length; i++) {
            this.imgList.push(this.list[i]);
        }
    },

    mounted() {
        this.calculationWidth();
        window.addEventListener('resize', this.throttle(this.calculationWidth, 300))
    },

    methods: {
        //计算每个图片的宽度或者是列数
        calculationWidth() {
            this.waterfallList = [];
            let wrapdom = document.getElementById("v-waterfall");
            let domWidth = wrapdom.offsetWidth;

            wrapdom.style.margin = `0 ${this.margin}px`;

            this.imgWidth =
                (domWidth - this.margin * 2 - this.margin) / this.cols;
            if (!this.imgWidth && this.cols) {
                this.imgWidth =
                    (domWidth - this.margin * this.cols) / this.cols;
            } else if (this.imgWidth && !this.cols) {
                this.cols = Math.floor(
                    domWidth / (this.imgWidth + this.margin)
                );
            }
            //初始每项整体高度数组
            this.overallHeight = new Array(this.cols);
            for (let i = 0; i < this.overallHeight.length; i++) {
                this.overallHeight[i] = 0;
            }
            this.imgPreloading();
        },
        //图片预加载
        imgPreloading() {
            for (let i = 0; i < this.imgList.length; i++) {
                let aImg = new Image();
                aImg.src = this.imgList[i].src;
                aImg.onload = aImg.onerror = () => {
                    let imgData = {};
                    imgData.height = (this.imgWidth / aImg.width) * aImg.height;
                    imgData.src = this.imgList[i].src;
                    imgData.title = this.imgList[i].title;
                    imgData.subtitle = this.imgList[i].subtitle;
                    this.waterfallList.push(imgData);
                    this.rankImg(imgData);
                };
            }
        },

        //瀑布流布局
        rankImg(imgData) {
            let { imgWidth, margin, overallHeight } = this;
            let minIndex = this.filterMin();
            imgData.top = overallHeight[minIndex];
            imgData.left = minIndex * (margin + imgWidth);
            overallHeight[minIndex] += imgData.height + margin + 84; // 加了文字描述的盒子高度（预设84px）
        },
        /**
         * 找到最短的列并返回下标
         * @returns {number} 下标
         */
        filterMin() {
            const min = Math.min.apply(null, this.overallHeight);
            return this.overallHeight.indexOf(min);
        },
    },
};