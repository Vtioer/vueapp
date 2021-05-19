export default {
    name: "UploadImgs",
    data() {
        return {
            acceptList: [
                "image/jpeg",
                "image/jpg",
                "image/png",
                "image/webp",
                "image/bmp",
            ],
            imgList: [],
        };
    },

    props: {
        multiple: {
            type: Boolean,
            default: true,
        },
        limit: {
            type: Number,
            default: 0, // 默认0不限制数量
        },
        limitSize: {
            type: Number,
            default: 2, // 默认限制质量2M
        },
        accept: {
            type: String,
            default: "image/jpeg,image/jpg,image/png,image/webp,image/bmp",
        },
        showFileList: {
            type: Boolean,
            default: true,
        },
    },
    created() { },
    methods: {
        // 打开图片选择器
        handleOpen() {
            let inputDom = this.$refs.input;
            // 每次打开清除value值，以免再次打开选择同样的图片不触发change事件
            inputDom.value = "";
            // 打开图片选择器
            inputDom.click();
        },
        // 图片选择器发生变化时
        handleChange(event) {
            let fileList = [...event.target.files];
            fileList.forEach((file) => {
                let type = file.type.toLowerCase();
                // 图片原始大小
                let originSize = file.size;
                if (this.accept.indexOf(type) == -1) {
                    console.log("请选择“jpeg、jpg、png、webp、bmp”格式图片！");
                    return;
                }
                if (this.limit == 0 || this.imgList.length < this.limit) {
                    this.readFile(file)
                        .then((result) => {
                            return this.compressImg(result, type, originSize);
                        })
                        .then((data) => {
                            this.imgList.push(data);
                        });
                } else if (this.limit != 0 && this.imgList.length < this.limit) {
                    alert("最多只能上传" + this.limit + "张图片");
                }
            });
        },
        // 读取图片
        readFile(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader(); // 读取文件资源
                reader.readAsDataURL(file);
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
                reader.onerror = (error) => {
                    console.log("图片加载失败：" + error);
                    reject(error);
                };
            });
        },
        // 压缩图片
        compressImg(src, type, originSize) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = () => {
                    const { width, height } = img;
                    // 限制图片大小
                    let limitMaxSize = this.limitSize * 1024 * 1024;
                    if (originSize > limitMaxSize) {
                        // 创建画布
                        const canvas = document.createElement("canvas");
                        const context = canvas.getContext("2d");
                        // 设置宽高度为等同于要压缩图片的尺寸
                        canvas.width = width;
                        canvas.height = height;
                        // 清除画布
                        context.clearRect(0, 0, width, height);
                        // 将img绘制到画布上
                        context.drawImage(img, 0, 0, width, height);
                        // 计算压缩比
                        let ratio = limitMaxSize / originSize;
                        // 得到压缩后base64图片数据
                        resolve(canvas.toDataURL(type, ratio));
                    } else {
                        // 不需要压缩
                        resolve(src);
                    }
                };
                img.onerror = (error) => {
                    console.log("图片压缩失败：" + error);
                    reject(error);
                };
            });
        },
        // 删除图片
        handleDelete(index) {
            this.imgList.splice(index, 1);
        },
    },
};