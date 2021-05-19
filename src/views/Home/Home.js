export default {
    name: "Home",
    data() {
        return {
            menuList: [],
            activeIndex: 0,
        };
    },
    created() {
        this.menuList = [
            { iconClass: "iconfont icon-home", text: "首页", pathName: "" },
            { iconClass: "iconfont icon-search", text: "社区", pathName: "" },
            { iconClass: "fa fa-comments-o", text: "消息", pathName: "" },
            {
                iconClass: "fa fa-calendar-o",
                text: "行程",
                pathName: "",
            },
            {
                iconClass: "iconfont icon-gerenzhongxin",
                text: "个人中心",
                pathName: "",
            },
        ];
    },
    methods: {
        handleClick(index, pathName) {
            console.log(pathName)
            this.activeIndex = index;
            // this.$router.push({ name: pathName });
        },
    },
};